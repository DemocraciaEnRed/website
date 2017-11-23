import Facebook from './Facebook'
import Twitter from './Twitter'
import Github from './Github'
import Insta from './Insta'

const SocialBar = ( { alignSelf, iconsSize, width, mobileWidth, justifyContent } ) => (
	<nav className='social-bar'>
		<a href='' className='fb'>
      <Facebook />
    </a>
		<a href='' className='tw'>
      <Twitter />
    </a>
		<a href='' className='insta'>
      <Insta />
    </a>
		<a href='' className='github'>
      <Github />
    </a>
		<style jsx>{`
      .social-bar {
        justify-content: space-between;
        align-self: ${alignSelf};
        display: flex;
        width: ${width};
      }
			.social-bar a{
				background-size: contain;
      	background-repeat: no-repeat;
      	background-position: center;
      	display: inline-block;
        height: ${iconsSize};
        width: ${iconsSize};
			}

      @media (max-width: 1024px) {
        .social-bar {
          align-self: center;
          display: flex;
          justify-content: ${justifyContent};
          width: ${mobileWidth};
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