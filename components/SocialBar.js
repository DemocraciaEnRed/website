const SocialBar = () => (
	<nav className='social-bar'>
		<a href='' className='fb'></a>
		<a href='' className='tw'></a>
		<a href='' className='insta'></a>
		<a href='' className='github'></a>
		<style jsx>{`
      .social-bar {
        align-self: flex-end;
        margin-top: 30px;
      }
			.social-bar a{
				background-size: contain;
      	background-repeat: no-repeat;
      	background-position: center;
      	display: inline-block;
        height: 30px;
        margin-left: 61px;
        width: 30px;
			}
    	.fb {
      	background-image: url('/static/assets/icons/Facebook.svg');
    	}
    	.tw {
    		background-image: url('/static/assets/icons/Twitter.svg');
    	}
    	.insta {
    		background-image: url('/static/assets/icons/Insta.svg');
    	}
    	.github {
    		background-image: url('/static/assets/icons/Github.svg');
    	}
      @media (max-width: 500px) {
        .social-bar {
          align-self: center;
          display: flex;
          justify-content: space-around;
          width: 100%;
        }
        .social-bar a{
          background-size: contain;
          margin-left: 0px;
        }
      }
  	`}</style>
  </nav>
	)

export default SocialBar