import { t } from '../../../polyglot-modules/polyglot.js'
import Submit from '../components/Submit'
import SocialBar from '../../../components/SocialBar.js'

const Header = () => (
	<header>
		<h1>Democracia en Red</h1>
		<p className='subtext'>sarasasas</p>
		<Submit />
		<SocialBar alignSelf={'flex-end'} iconsSize={'30px'} width={'300px'} mobileWidth={'100%'} justifyContent={'space-around'}/>
		<style jsx>{`
    	header {
     		background-color: #dedede;
        display: flex;
        flex-direction: column;
        padding: 144px 40px 32px 85px;
    	}
    	header h1 {
    		color: var(--white);
    	}
    	header p {
    		color: var(--white);
        line-height: 1.5;
        letter-spacing: 0.08rem;
        margin: 24px 0 80px;
        max-width: 598px;
    	}
      @media (max-width: 1024px) {
        header {
          align-items: center;
          padding: 90px 26px 37px;
          text-align: center;
        }
        header h1 {
          font-size: 3.6rem;
        }
        header p {
          font-size: 2.0rem;
          letter-spacing: 0.07rem;
          line-height: 3.6rem;
          margin: 25px 0px 33px;
        }
      }
  	`}</style>
	</header>
	)

export default Header

