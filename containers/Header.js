import Submit from '../components/Submit'
import SocialBar from '../components/SocialBar.js'

const Header = () => (
	<header>
		<h1>Democracia en Red</h1>
		<p>Imaginamos, diseñamos e implementamos innovaciones en el sistema político para abrir los procesos de decisión y redistribuir el poder.</p>
		<Submit />
		<SocialBar />
		<style jsx>{`
    	 header {
     		background-color: #efefef;
    	 }
    	 header h1 {
    		color: var(--white);
    	 }
    	 header p {
    		color: var(--white);
    	 }
  	`}</style>
	</header>
	)

export default Header

