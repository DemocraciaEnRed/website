import React from 'react'
import fetch from 'isomorphic-unfetch'
import { t } from '../../../polyglot-modules/polyglot.js'
import CheckedButton from '../../../components/CheckedButton.js'
const regexp = /^(?:[\w!#\$%&'\*\+\-\/=\?\^`\{\|\}~]+\.)*[\w!#\$%&'\*\+\-\/=\?\^`\{\|\}~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/

export default class Submit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false,
      hasClicked: false,
      placeholder: '',
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    window.innerWidth < 1024 
    ? this.setState({placeholder: t('index.header.mobilePlaceholder')})
    : this.setState({placeholder: t('index.header.placeholder')})
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const email = this.state.value
    fetch('https://der-api.now.sh/validar-subscripcion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email})
    })
    .then(r => console.log(r.status))
  }

  checkingButton = () => {
    this.setState({
      checked: true,
      hasClicked: true
    })
    setTimeout(() => this.setState({
      checked: false,
    }), 2000)
  }

  render () {
    return (
      <form className='submit' onSubmit={this.handleSubmit}>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder= {this.state.placeholder} required value={this.state.value} onChange={this.handleChange} />
        <button type='submit' >
          {this.state.checked ?
            <CheckedButton />
           :
            <span className={`submit-text ${this.state.hasClicked ? 'submit-text-checked' : ''}`}>
      	 	   {t('index.header.callToAction')}
            </span>
          }
        </button>
        <style jsx>{`
          .submit {
    		    display: flex;
    		    height: 39px;
    		    width: 470px;
            margin-bottom: 45px;
          }
          .submit label {
            display: none;
          }
          .submit input {
    		    border: none;
    		    border-radius: 10rem 0 0 10rem;
    		    height: 100%;
            padding-left: 20px;
    		    width: 309px;
    	    }
          .submit input::placeholder {
            color: #999999;
            font-size: 1.4rem;
            letter-spacing: 0.13rem;
          }
          .submit input:focus {
            border: none;
          }
    	    .submit button {
    		    background-color: var(--dark-accent);
    		    border: none;
    		    border-radius: 0 10rem 10rem 0;
  			    color: var(--white);
            display: flex;
            justify-content: center;
    		    height: 100%;
    		    width: 162px;
    	    }
          .submit-text-checked {
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
              width: 361px;
              height: 34px;
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
          }
          @media (max-width: 320px) {
            .submit input::placeholder {
              font-size: 0.9rem;
            }
          }
  	`}</style>
    </form>
    )}
	}
