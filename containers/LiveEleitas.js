import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'


class LiveEleitas extends Component {
  constructor (props) {
    super(props)

    this.state = {
      
    }
  }

  // handleLink = (hash) => (e) => {
  //   const node = document.getElementById(hash)
  //   this.handleMainMenu()
  //   window.location.pathname !== '/' ? Router.push({pathname: '/', hash: '#'+hash}) : jump(node, {offset: -50})
  // }

  // handleMainMenu = () => {
  //   let mobileMenu = window.innerWidth <= 1024 ? true : false
  //   this.setState({
  //     menu: !this.state.menu,
  //     mobile: mobileMenu
  //   })
  // }

  render () {
    return (
      <div>

        <section id="eleitas" className='eleitas-container'>
          
          
        <div className='container-bulma'>
            <div className="about">
              <p><b>Miércoles 28 de octubre a las 18:30hs (AR)</b></p>
            </div>
            <div className="boton-inscripcion">
               <a href="https://preguntarparaacordar.typeform.com/to/wdTiw5fE" rel='external' target='_blank'>
                <button className='inscripcion-btn'>
                  <span className='action-text'>INSCRIBIRSE</span>
                </button>
              </a>
            </div>
          <div className="tile is-ancestor tiles-container">
            <div className="tile is-parent">
              <div className="tile is-child">
                <div className="videoWrapper">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/zNehcYqxRhk`}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="tile is-child is-4 eleitas-event-container">
               <iframe src="https://app.sli.do/event/seruchx1" height="100%" width="100%" frameBorder="0" style={{"minHeight": "100%"}}></iframe>
              </div>
            </div>
          </div>
            <div className="about">
              <p>Un estudio y serie audiovisual sobre las mujeres latinoamericanas en el poder. Una aproximación a entender cómo las prácticas políticas y culturales pueden cambiar los espacios políticos institucionales en América Latina y los paradigmas de poder.</p>
              <p>Más de 96 entrevistas a mujeres electas y especialistas en política y género de 6 países de América Latina.</p>
            </div>
            <h1 className="agenda-title">Agenda</h1>
            <div className="agenda">
              <div className="tile is-ancestor tiles-container">
                <div className="tile is-parent">
                <div className="tile is-child agenda-content">
                    <p className="the-title"><span className="the-time">18.30 Hs</span><br/>Conversatorio: “Electas. Mujeres en la Política”. Presentación del estudio</p>
                    <p className="the-mod"><u>Modera</u>: Florencia Polimeni <span className="org">(Democracia en Red)</span></p>
                    <hr/>
                    <br/>

                    <p className="participant">Beatriz Pedreira <span className="org">(Instituto Update)</span></p>
                    <p className="participant">Soledad Tuñón <span className="org">(Democracia en Red)</span></p>
                  </div>
                  <div className="tile is-child agenda-content">
                    <p className="the-title"><span className="the-time">19.00 Hs</span><br/>Conversatorio: Mujeres al Poder. Nuevos liderazgos.</p>
                    <p className="the-mod"><u>Modera</u>: Candelaria Botto <span className="org">(Economía Feminita)</span></p>
                    <hr/>
                    <br/>
                    <p className="participant">La Negra Albornoz <span className="org">(La Garganta Poderosa)</span></p>
                    <p className="participant">Silvia Lospennato <span className="org">(Diputada Nacional)</span></p>
                    <p className="participant">Victoria Donda <span className="org">(Titular del INADI)</span></p>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <h2 className="agenda-title">Organizan</h2>

          <img src='/static/assets/live/eleitas/eleitas-organizan-white.png' className='eleitas-logo-organizaciones' />
          </div>
          </section>
        
        <style jsx>{`
          #eleitas{
            // background-color: #603d99;
            background: rgb(96,61,153);
            background: -moz-linear-gradient(135deg, rgba(96,61,153,1) 0%, rgba(57,34,94,1) 100%);
            background: -webkit-linear-gradient(135deg, rgba(96,61,153,1) 0%, rgba(57,34,94,1) 100%);
            background: linear-gradient(135deg, rgba(96,61,153,1) 0%, rgba(57,34,94,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#603d99",endColorstr="#39225e",GradientType=1);
            font-size: 16px;
            color: #FFF
          }
          #eleitas .eleitas-event-container{
            background-color: #FFF;
            height:100%;
          }
          @media print,screen and (max-width:769px) {
            #eleitas .eleitas-event-container{
              background-color: #FFF;
              height:500px;
            }
          }
          #eleitas .boton-inscripcion{
            margin: 25px auto;
            text-align:center;
          }
          #eleitas .eleitas-logo-organizaciones{
            margin: 0 auto;
            display: block;
            max-width: 600px; 
          }
          #eleitas .inscripcion-btn {
            background-color: #eb8941;
            border-radius: 10rem;
            border-left: 1px solid #a84b07;
            border-right: 1px solid #a84b07;
            border-bottom: 4px solid #a84b07;
            align-self: center;
            z-index: 5;
            cursor: pointer;
            padding: 15px 30px;
          }
          #eleitas .inscripcion-btn :hover {
            background-color: #eb8941;
            border-radius: 10rem;
            border-left: 1px solid #a84b07;
            border-right: 1px solid #a84b07;
            border-bottom: 0px solid #a84b07;
            border-top: 4px solid #a84b07;
            // margin-top: 0.3rem;
          }
          #eleitas .inscripcion-btn .action-text {
            font-size: 3rem;
            color: #000;
          }
          #eleitas .inscripcion-btn:hover .action-text {
            color: #000;
          }
          #eleitas .about {
            text-align:center;
            margin: 20px auto;
          }
          #eleitas .about p {
            font-size: 2rem;
            color: #FFF;
          }
          #eleitas .about p b {
            font-size: 2rem;
            color: #FFF;
          }
          #eleitas .agenda-title{
            color: #FFF;
            margin: 15px 0 30px;
            text-align: center;
          }
          #eleitas .agenda .agenda-content{
          padding: 20px;
          }
          #eleitas .agenda .agenda-content .the-title{
            color: #FFF;
            font-family: var(--bold);
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 2.8rem;
          }
          #eleitas .agenda .agenda-content .the-title .the-time{
            background-color: #FFF;
            padding: 4px 10px;
            color: #603d99;
          }
          #eleitas .agenda .agenda-content .the-mod{
            color: #FFF;
            font-size: 2.3rem;
            font-weight: bold;
          }
          #eleitas .agenda .agenda-content .the-mod u {
            background-color: #FFF;
            padding: 2px 7px;
            font-size: 2rem;
            font-weight: normal;
            color: #603d99;
          }
          #eleitas .agenda .agenda-content hr {
            color: #FFF;
            margin: 10px 0;
          }
          #eleitas .agenda .agenda-content .the-mod .org{
            color: #fda659;
            font-weight: normal;
            font-size: 2.3rem;
          }
          #eleitas .agenda .agenda-content .participant{
            color: #FFF;
            font-size: 2rem;
          }
          #eleitas .agenda .agenda-content .participant .org{
            color: #fda659;
          }

        `}</style>
      </div>
    )
  }
}

export default LiveEleitas