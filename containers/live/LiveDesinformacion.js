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

        <section id="desinformacion" className='desinformacion-container'>
          
          
        <div className='container-bulma'>
            <img src='/static/assets/live/desinformacion/desinformacion-logo.png' className='desinformacion-logo' />
            <div className="about">
              <p><b>Transmitido el Miércoles 04 de Noviembre 2020 a las 18:00hs (AR)</b></p>
            </div>
            {/* <div className="boton-inscripcion">
               <a href="https://preguntarparaacordar.typeform.com/to/frhgJKpY" rel='external' target='_blank'>
                <button className='inscripcion-btn'>
                  <span className='action-text'>INSCRIBIRSE</span>
                </button>
              </a>
            </div> */}
          {/* <div className="tile is-ancestor tiles-container">
            <div className="tile is-parent">
              <div className="tile is-8 is-child">
                <div className="videoWrapper">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/E5Q3zZoYKnI `}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="tile is-child is-4 desinformacion-event-container">
               <iframe src="https://app.sli.do/event/pmi8o3wr" height="100%" width="100%" frameBorder="0" style={{"minHeight": "100%"}}></iframe>
              </div>
            </div>
          </div> */}
          <div className="after-playback">
            <div className="videoWrapper">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/PHVXDLpZxyE`}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
          </div>
            <div className="about">
              <p><b>Un conversatorio junto a Agustín Frizzera, de @democraciaenred y Bernardo Sorj, de Plataforma Democrática (Brasil) para describir y analizar el fenómeno vigente que cambió el paradigma en la comunicación política y que amenaza el espacio democrático: la #Desinformación.</b></p>
<p><b>Un espacio para hablar sobre las estrategias y las tácticas que se llevan a cabo para intentar entender cómo opera la desinformación como proyecto político.</b></p>
            </div>
            <h1 className="agenda-title"><span>Participan</span></h1>
            <div className="tile is-ancestor tiles-container participantes">
            <div className="tile is-parent">
              <div className="tile is-4 is-child">
            <img src='/static/assets/live/desinformacion/part1.png' className='participante-foto' />
              <p className="participante-nombre"><span>Miriam Lewin</span></p>
              <p className="participante-org"><span className="mod">Moderadora</span><br/><br/>Defensoría del Público de Servicios de Comunicación Audiovisual</p>
              </div>
              <div className="tile is-4 is-child">
            <img src='/static/assets/live/desinformacion/part2.png' className='participante-foto' />
  <p className="participante-nombre"><span>Agustín Frizzera</span></p>
              <p className="participante-org">Democracia en Red</p>
              </div>
              <div className="tile is-4 is-child">
            <img src='/static/assets/live/desinformacion/part3.png' className='participante-foto' />
  <p className="participante-nombre"><span>Bernardo Sorj</span></p>
              <p className="participante-org">Plataforma Democrática</p>
              </div>
              </div>
              </div>
            {/* <div className="agenda">
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
            </div> */}
            <br/>
            <h3 className="organizaciones-participantes-title"><span>Organizan</span></h3>

          <img src='/static/assets/live/desinformacion/organizan.png' className='desinformacion-logo-organizaciones' />
          </div>
          </section>
        
        <style jsx>{`
          #desinformacion{
            // background-color: #6fdda0;
            // background-color: #a1e6bf;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2365c58f' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            color: #000
          }
          #desinformacion *{
          font-family: 'Titillium Web', sans-serif !important;
            text-transform: uppercase !important;
          }
          #desinformacion .desinformacion-event-container{
            background-color: #000;
            height:100%;
          }
          @media print,screen and (max-width:769px) {
            #desinformacion .desinformacion-event-container{
              background-color: #000;
              height:500px;
            }
          }
          #desinformacion .boton-inscripcion{
            margin: 25px auto;
            text-align:center;
          }
          #desinformacion .desinformacion-logo{
            margin: 0 auto;
            display: block;
            max-width: 700px; 
            width: 100%;
          }
          #desinformacion .desinformacion-logo-organizaciones{
            margin: 0 auto;
            display: block;
            max-width: 800px;
            width: 100%; 
          }
          #desinformacion .after-playback{
            max-width: 960px;
            margin: 0 auto;
          }
          #desinformacion .inscripcion-btn {
            background-color: #f4e471;
            border-radius: 10rem;
            border-left: 1px solid #b8a41b;
            border-right: 1px solid #b8a41b;
            border-bottom: 4px solid #b8a41b;
            align-self: center;
            z-index: 5;
            cursor: pointer;
            padding: 15px 30px;
          }
          #desinformacion .participante-foto{
            max-width: 250px;
            margin: 0 auto;
            display:block;
          }
          #desinformacion .participantes .participante-nombre{
            // background-color: #f4e471;
            // padding: 2px 7px;
            font-size: 2.5rem;
            font-weight: 700;
            color:  #000;
            text-align: center;
            margin: 20px;
          }
          #desinformacion .participantes .participante-nombre span{
            background-color: #f4e471;
            padding: 2px 7px;
          }
          #desinformacion .participantes .participante-org{
            // background-color: #f4e471;
            // padding: 2px 7px;
            // background-color: #000;
            // padding: 2px 7px;
            font-size: 1.8rem;
            font-weight: 700;
            color:  #000;
            width: auto;
            margin: 0 auto;
            text-align: center;
          }
          #desinformacion .participantes .participante-org span.mod{
            background-color: #000;
            padding: 2px 15px;
            color: #FFF;
          }
          #desinformacion .inscripcion-btn :hover {
            background-color: #f4e471;
            border-radius: 10rem;
            border-left: 1px solid #b8a41b;
            border-right: 1px solid #b8a41b;
            border-bottom: 0px solid #b8a41b;
            border-top: 4px solid #b8a41b;
            // margin-top: 0.3rem;
          }
          #desinformacion .inscripcion-btn .action-text {
            font-size: 2.5rem;
            color: #000;
          }
          #desinformacion .inscripcion-btn:hover .action-text {
            color: #000;
          }
          #desinformacion .about {
            text-align:center;
            margin: 20px auto;
          }
          #desinformacion .about p {
            font-size: 1.8rem;
            color: #000;
          }
          #desinformacion .about p b {
            font-size: 1.8rem;
            color: #000;
          }
          #desinformacion .agenda-title{
            margin: 15px 0 30px;
            text-align: center;
          }
          #desinformacion .agenda-title span{
            background-color: #000;
            padding: 2px 15px;
            color: #fff;
            font-weight: 700;
          }
          #desinformacion .organizaciones-participantes-title{
            margin: 15px 0 30px;
            text-align: center;
            font-size: 3rem;
          }
          #desinformacion .organizaciones-participantes-title span{
            background-color: #000;
            padding: 2px 15px;
            color: #fff;
            font-weight: 700;
          }
          #desinformacion .agenda .agenda-content{
          padding: 20px;
          }
          #desinformacion .agenda .agenda-content .the-title{
            color: #000;
            font-family: var(--bold);
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 2.8rem;
          }
          #desinformacion .agenda .agenda-content .the-title .the-time{
            background-color: #000;
            padding: 4px 10px;
            color: #FFF;
          }
          #desinformacion .agenda .agenda-content .the-mod{
            color: #000;
            font-size: 2.1rem;
            font-weight: bold;
          }
          #desinformacion .agenda .agenda-content .the-mod u {
            // background-color: #f4e471;
            // padding: 2px 7px;
            font-size: 1.8rem;
            font-weight: normal;
            color:  #000;
          }
          #desinformacion .agenda .agenda-content hr {
            color: #000;
            margin: 10px 0;
          }
          #desinformacion .agenda .agenda-content .the-mod .org{
            color:  #f4e471;
            background-color: #000;
            padding: 2px 7px;
            font-weight: normal;
            font-size: 1.8rem;
          }
          #desinformacion .agenda .agenda-content .participant{
            color: #000;
            font-size: 2.1rem;
            background-color: #f4e471;
            padding: 2px 7px;
          }
          #desinformacion .agenda .agenda-content .participant .org{
            color: #000;
            font-size: 1.8rem;
          }

        `}</style>
      </div>
    )
  }
}

export default LiveEleitas