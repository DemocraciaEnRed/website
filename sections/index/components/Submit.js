import React from 'react'
import fetch from 'isomorphic-unfetch'
import { t } from '../../../polyglot-modules/polyglot.js'
import CheckedButton from '../../../components/CheckedButton.js'
const regexp = /^(?:[\w!#\$%&'\*\+\-\/=\?\^`\{\|\}~]+\.)*[\w!#\$%&'\*\+\-\/=\?\^`\{\|\}~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/
let response;

export default class Submit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false,
      hasClicked: false,
      placeholder: '',
      value: '',
      response: false,
      disabled: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    window.innerWidth < 1024 
    ? this.setState({placeholder: ('index.header.mobilePlaceholder')})
    : this.setState({placeholder: ('index.header.placeholder')})
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit= (e) => {
    e.preventDefault()
    this.setState({disabled: true})
    const email = this.state.value
    fetch('https://der-api.now.sh/validar-subscripcion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email})
    })
    .then(r => {
      if (!r.ok) {
        const data = r.json()
        .then(data => {
          switch (data.error) {
            case 'invalid-email':
              response = t('index.header.invalidMail')
            break
            case 'internal-error':
              response= t('index.header.internalError')
            break
            case 'is-in-list':
              response= t('index.header.isInList')
            break
          }
          this.unsuccesfulSubmit(response)
        })
      } else {
        this.succesfulSubmit()
      }
    })
  }
  
  unsuccesfulSubmit = (response) => {
    this.setState({
          response: response
    })
    setTimeout(() => this.setState({
      response: false,
      checked: false,
      disabled: false
    }), 4000)
  }

  succesfulSubmit = () => {
    this.setState({
      checked: true,
      hasClicked: true,
      response: t('index.header.mailSuscribed')
    })
    setTimeout(() => this.setState({
      response: false,
      checked: false,
      disabled: false
    }), 4000)
  }

  render () {
    return (
      <form className='submit' onSubmit={this.handleSubmit}>
        <div className='form-response-container'>
          {this.state.response &&
            <p className='regular-text form-response'>{this.state.response}</p>
          }
        </div>
        <div className='input-container'>
          <label htmlFor='email'>E-mail</label>
          <input type='email' placeholder={this.state.placeholder === '' ? '' : t(this.state.placeholder)} required value={this.state.value} onChange={this.handleChange} />
          <button type='submit' disabled={this.state.disabled} >
            {this.state.checked ?
              <CheckedButton />
            :
              <span className={`submit-text ${this.state.hasClicked ? 'submit-text-checked' : ''}`}>
      	 	     {t('index.header.callToAction')}
              </span>
            }
          </button>
        </div>
        <style jsx>{`
          .submit {
    		    display: flex;
            flex-wrap: wrap;
            margin-bottom: 45px;
          }
          .form-response-container {
            height: 17px;
            margin-bottom: 10px;
            padding: 10px;
            width: 100%;
          }
          .form-response {
            font-size: 1.4rem;
          }
          .input-container {
            display: flex;
            height: 39px;
            width: 470px;
          }
          .input-container label {
            display: none;
          }
          .input-container input {
    		    border: none;
    		    border-radius: 10rem 0 0 10rem;
            box-shadow: none;
    		    height: 100%;
            padding-left: 20px;
    		    width: 309px;
    	    }
          .input-container input::placeholder {
            color: var(--gray);
            font-size: 1.4rem;
            letter-spacing: 0.13rem;
          }
    	    .input-container button {
    		    background-color: var(--dark-accent);
    		    border: none;
    		    border-radius: 0 10rem 10rem 0;
  			    color: var(--white);
            cursor: pointer;
            display: flex;
            justify-content: center;
    		    height: 100%;
    		    width: 162px;
    	    }
          .form-response, .submit-text-checked {
            -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
            -moz-animation: fadein 2s; /* Firefox < 16 */
            -ms-animation: fadein 2s; /* Internet Explorer */
            -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 0.5s;
          }
          @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @media (max-width: 1024px) {
            .submit {
              margin-bottom: 37px;
            }
            .submit-input {
              height: 100%;
              width: 236px;
            }
            .submit-button {
              height: 100%;
              width: 124px;
            }
            .form-response-container {
              height: 27px;
            }
            .input-container {
              margin: 0 auto;
              height: 34px;
              width: 361px;
            }
          }
          @media (max-width: 375px) {
            .submit {
              width: 90%;
            }
            .submit-input{
              width: 80%;
            }
            .submit-button{
              width: 20%;
            }
            .submit input::placeholder {
              font-size: 1rem;
            }
            .form-response {
              font-size: 1.2rem;
            }
            .input-container {
              width: 100%;
            }
          }
          @media (max-width: 370px) {
            .form-response-container {
              height: 40px;
            }
          }
          @media (max-width: 320px) {
            .submit input::placeholder {
              font-size: 0.9rem;
            }
            .form-response {
              font-size: 1.0rem;
            }
          }
  	`}</style>
    </form>
    )}
	}
