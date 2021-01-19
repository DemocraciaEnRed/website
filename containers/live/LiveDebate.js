import React from 'react';

function LiveDebate () {
  return(
    <div >
      <section className='debate-container'>
        <div className='container-bulma'>
          <h2><span>#VolvamosADebatir</span></h2>
          <h1>La Desinformación como Distorsión Democrática <br/> ¿Qué podemos hacer?</h1>
          <div className="after-playback">
            <div className="videoWrapper">
              <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/eO-V4sYj5H8`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
            </div>
          </div>
          <div className="vid-description">
          <h3> Natalia Aruguete</h3>
          <p><em>(Investigadora del CONICET y periodista) - ARG </em></p>
          <br/>
          <h4>
            <em>Moderado por: </em>
            Agustin Frizzera <small> <em>(Democracia en Red)</em></small>
          </h4>
          <p>
              Un encuentro online gratuito para pensar las consecuencias de seguir degradando nuestro espacio público, nuestros lugares comunes. 
              Un espacio para analizar cómo discutimos en las redes con una mirada humana, tecnológica y política.
              Paneles, conversatorios, conferencias y la presentación del documento Estrategias y recomendaciones para enfrentar la <strong>#desinformación</strong>.
          </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default LiveDebate;
