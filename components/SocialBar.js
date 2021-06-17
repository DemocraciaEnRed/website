import Facebook from './Facebook'
import Twitter from './Twitter'
import Github from './Github'
import Instagram from "./Instagram" 
import Youtube from "./Youtube"
import Medium from "./Medium"

const SocialBar = ( { margin,alignSelf, iconsSize, width, mobileWidth, justifyContent, iconHover, iconMobileHover } ) => (
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
    <a href='https://www.instagram.com/democraciaenred' className='ins' target='_blank' rel='external'>
      <Instagram hover={iconHover} mobileHover={iconMobileHover} />
    </a>
    <a href='https://medium.com/multitudes' className='medium' target='_blank' rel='external' >
      <Medium hover={iconHover} mobileHover={iconMobileHover} />
    </a>
    <a href='https://www.youtube.com/channel/UCm5n0zxmfWN0pMuMPxk7psw/featured' className='fb' target='_blank' rel='external'>
      <Youtube hover={iconHover} mobileHover={iconMobileHover} />
   
    </a>
		<style jsx>{`
      .social-bar {
        justify-content: space-around;
        align-self: ${alignSelf};
        display: flex;
        width: ${width};
        margin: ${margin}
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