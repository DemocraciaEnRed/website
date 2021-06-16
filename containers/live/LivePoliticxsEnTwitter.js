import React from 'react';

function LivePoliticxsEnTwitter () {
  return(
    <div >
      <section className='politicxs-container'>
        <div className='container-bulma'>
          <h1>POLITICXS EN TWITTER</h1>
          <div className="after-playback">
            <div className="videoWrapper">
              <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/watch?v=z258VDvsQD4&t=6s&ab_channel=DemocraciaEnRed`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
            </div>
          </div>
          <div className="politicxs-description">
          <p>Políticxs en Twitter es un repositorio con interacciones de más de 500 usuarios relacionados con la política en Argentina. Ponemos a disposición de la comunidad este ATLAS con datos libres y reutilizables, para facilitar la producción de conocimiento.
              <br/>
            Te invitamos a conocer más en el evento que hicimos de lanzamiento!</p>
          </div>

          <div className="logos-container">
              
            <img src='/static/assets/logo-der.svg' class="logo-der" alt="DER logo" className='logos-politicxs-tw' />
            <img src='/static/assets/live/politicxs-twitter/uba.png' alt="UBA logo" className='logos-politicxs-tw' />
            <img src='/static/assets/live/politicxs-twitter/ndi.png' alt="NDI logo" className='logos-politicxs-tw' />
            <img class="odr-logo" src='/static/assets/live/politicxs-twitter/odr.png' alt="ODR logo"className='logos-politicxs-tw' />

          </div>
          
        </div>
      </section>

      <style>{`

      .logos-container img{
          height:50px;
          margin:20px;
      }

      .logos-container img.odr-logo, .logos-container img.logo-der{
        height:65px
      }

      .logos-container{
          display:flex;
          justify-content:space-around;
          max-width: 960px;
          margin:auto;
          flex-wrap:wrap;
      }

      .politicxs-container h1{
          text-align:center;
          padding:50px 20px;
          color: #fff
          
      }

      .politicxs-description{
            font-size: 1.8rem;
            padding:50px 10px;
            font-family: 'Titillium Web',sans-serif !important;
            font-weight: 600;
            line-height: 1.5;
            text-align: center;
            max-width: 960px;
            margin: auto;
            color: #fff
        }
        .politicxs-description p{
          color: #fff

        }

        section.politicxs-container{
          background-color: #314c5b
        }

      `}

      </style>
    </div>
  );
}

export default LivePoliticxsEnTwitter;