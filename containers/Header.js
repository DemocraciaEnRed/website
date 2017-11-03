import Submit from '../components/Submit'
import SocialBar from '../components/SocialBar.js'

const Header = () => (
	<header>
		<h1>Democracia en Red</h1>
		<p className='subtitle'>Imaginamos, diseñamos e implementamos innovaciones en el sistema político para abrir los procesos de decisión y redistribuir el poder.</p>
		<Submit />
		<SocialBar />
		<style jsx>{`
    	 header {
     		background-color: #dedede;
    	 }
    	 header h1 {
    		color: var(--white);
    	 }
    	 header p {
    		color: var(--white);
        max-width: 598px;
    	 }
  	`}</style>
	</header>
	)

export default Header

