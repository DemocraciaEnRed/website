import React from 'react';

function ChangeGoverment () {
  return(
    <div className="change-goverment">
      <div className="container-bulma">
        <h1>¿Cambia la forma de gobernar?</h1>
        <div className="after-playback">
          <div className="videoWrapper">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/5beGeuQElZw`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
          </div>
        </div>
      <h2>Participan: </h2>
      <p>
        Fabio Quetglas - <em>Diputado Nacional Argentino</em> <br/>
        Donka Atanassova - <em>Alcaldía de Bogotá </em><br/>
        Lucía Abelenda - <em>AVINA</em> <br/>
        <strong>Modera: </strong><br/> Agustin Frizzera - <em>Democracia en Red</em> <br/>
        <br/>
        <br/>
        <a href="https://ciudadescomunes.org/congreso2020"> Mas información </a>
      </p>
      </div>
    </div>
  )
}

export default ChangeGoverment;