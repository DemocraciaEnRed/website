const Submit = () => (
	<div className='submit'>
      <input type='email' />
      <button>
      	<span className='submit-text'>
      		Submit 
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
	)

export default Submit