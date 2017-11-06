import Submit from '../components/Submit'
import SocialBar from '../components/SocialBar.js'

const Header = () => (
	<header>
		<h1>Democracia en Red</h1>
		<p className='subtext'>Imaginamos, diseñamos e implementamos innovaciones en el sistema político para abrir los procesos de decisión y redistribuir el poder.</p>
		<Submit />
		<SocialBar />
		<style jsx>{`
    	header {
     		background-color: #dedede;
        display: flex;
        flex-direction: column;
        padding: 94px 40px 32px 85px;
    	}
    	header h1 {
    		color: var(--white);
    	}
    	header p {
    		color: var(--white);
        line-height: 1.5;
        letter-spacing: 0.08rem;
        margin: 24px 0 48px;
        max-width: 598px;
    	}
      @media (max-width: 500px) {
        header {
          align-items: center;
          padding: 30px 26px 37px;
          text-align: center;
        }
        header h1 {
          font-size: 3.6rem;
        }
        header p {
          font-size: 2.0rem;
          letter-spacing: 0.07rem;
          line-height: 3.6rem;
        }
      }
  	`}</style>
	</header>
	)

export default Header

