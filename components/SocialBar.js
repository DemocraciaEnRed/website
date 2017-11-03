const SocialBar = () => (
	<nav className='social-bar'>
		<a href='' className='fb'></a>
		<a href='' className='tw'></a>
		<a href='' className='insta'></a>
		<a href='' className='github'></a>
		<style jsx>{`
      .social-bar {
        display: flexbox;
        flex-direction: column;
      }
			.social-bar a{
				background-size: auto 20px;
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
  	`}</style>
  </nav>
	)

export default SocialBar