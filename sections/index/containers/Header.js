import { t } from '../../../polyglot-modules/polyglot.js'
import Modal from '../components/Modal'
//import Submit from '../components/Submit'
import SocialBar from '../../../components/SocialBar.js'

const Header = ( {modal, content, hideModal} ) => (
	<header>
    <div className="super">
      <div className="img-container">
        <img className='logoDerMenu' src='../static/assets/der_black.svg'/>
      </div>
    </div>

		<div className="subtext-container"><p className='subtext'>{t('index.header.subtitle')}</p></div>
    {/* <div className="subtext-title"><span>{t('index.header.socialmedia')}</span></div> */}
		{/* <Submit /> */}
		<SocialBar alignSelf={'center'} iconsSize={'30px'} width={'25%'} mobileWidth={'100%'} justifyContent={'space-around'} iconHover={'#3CA2DA'} iconMobileHover={'#999'} />
		{modal &&
      <Modal content={content} hideModal={hideModal} />
    }
    <style jsx>{`
      .super {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .img-container {
        background-position: center bottom;
        width: 40em;
        display: flex;
        justify-content: center;
      }
      .logo-der-header {
        fill: black;
      }
      .subtext-container {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .subtext-title {
        margin: 20px;
        display: flex;
        justify-content: center;
      }
      .subtext-title span {
        font-weight: 800;
        text-align: center;
        font-size: 3rem;
        letter-spacing: 3px;
        color: #8A509F;
        padding: 20px;
      }
      img.logoDerMenu{
        width:65em;
        // padding-bottom:4em;
      }
      @media (max-width: 440px) {
        img.logoDerMenu{
          width:30em;
        }
      }
      header {
     		// background-image: url('../static/assets/header/headerWeb.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        padding: 124px 40px 72px 85px;
        background-position: center bottom;
    	}
    	header h1 {
    		color: var(--black);
    	}
    	header p {
    		color: var(--black);
        line-height: 1.5;
        letter-spacing: 0.08rem;
        margin: 24px 0 30px;
        max-width: 598px;
    	}
      @media (max-width: 1024px) {
        header {
          align-items: center;
          padding: 90px 26px 57px;
          text-align: center;
        }
        header h1 {
          font-size: 3.6rem;
        }
        header p {
          font-size: 2.0rem;
          letter-spacing: 0.07rem;
          line-height: 3.6rem;
          margin: 25px 0px 30px;
        }
      }

			.social-bar {
				margin-bottom: 15px;
				margin-top: 5px;
			}
  	`}</style>
	</header>
	)

export default Header
