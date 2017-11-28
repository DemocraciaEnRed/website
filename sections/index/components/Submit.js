import React from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import CheckedButton from './CheckedButton.js'

export default class Submit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false,
      hasClicked: false
    }
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
      <div className='submit'>
        <input type='email' />
        <button onClick={this.checkingButton}>
          {this.state.checked ?
            <CheckedButton />
           :
            <span className={`submit-text ${this.state.hasClicked ? 'submit-text-checked' : ''}`}>
      	 	   sarasa
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
          .submit input {
    		    border: none;
    		    border-radius: 10rem 0 0 10rem;
    		    height: 100%;
            padding-left: 20px;
    		    width: 309px;
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
          }
  	`}</style>
    </div>
    )}
	}
