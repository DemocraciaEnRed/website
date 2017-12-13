import Facebook from './Facebook'
import Twitter from './Twitter'
import Github from './Github'
import Insta from './Insta'

const SocialBar = ( { alignSelf, iconsSize, width, mobileWidth, justifyContent, iconHover, iconMobileHover } ) => (
	<nav className='social-bar'>
		<a href='https://www.facebook.com/democraciaenred' className='fb' target='_blank' rel='external'>
      <Facebook hover={iconHover} mobileHover={iconMobileHover} />
    </a>
		<a href='https://twitter.com/fundacionder' className='tw' target='_blank' rel='external'>
      <Twitter hover={iconHover} mobileHover={iconMobileHover} />
    </a>
		<a href='https://github.com/democraciaenred' className='github' target='_blank' rel='external'>
      <Github hover={iconHover} mobileHover={iconMobileHover} />
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