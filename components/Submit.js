import React from 'react';
let isChecked = 'Submit';

export default class Submit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  checkingButton = () => {
    this.setState({checked: true})
    setTimeout(() => this.setState({
      checked: false,
    }), 2000)
  }

  render () {
    return (
      <div className='submit'>
        <input type='email' />
        <button onClick={this.checkingButton}>
          <span className='submit-text'>
      	 	 {this.state.checked ? 'Cambie' : 'Submit'} 
          </span>
        </button>
        <style jsx>{`
          .submit {
    		    display: flex;
    		    height: 55px;
    		    width: 588px;
          }
          .submit input {
    		    border: none;
    		    border-radius: 10rem 0 0 10rem;
    		    height: 100%;
    		    width: 75%;
    	    }
          .submit input:focus {
            border: none;
          }
    	    .submit button {
    		    background-color: var(--dark-accent);
    		    border: none;
    		    border-radius: 0 10rem 10rem 0;
  			    color: var(--white);
    		    height: 100%;
    		    width: 25%;
    	    }
          @media (max-width: 500px) {
            .submit {
              max-width: 100%;
              height: 34px;
            }
            .submit-text {
            font-size: 1.6rem;
            }
          }
  	`}</style>
    </div>
    )}
	}
