import React from 'react';

function CommonCitys () {
  return(
    <React.Fragment>
      <div className="common-citys">
        <div className="container-bulma">
          <h1>Incubadora de Ciudades Comunes</h1>
          <div className="after-playback">
            <div className="videoWrapper">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/NmH6-CvpK24`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
          <p>
            <strong>#VolverALaCalle</strong> busca soluciones replicables, de bajo costo y alto impacto para reactivar los espacios públicos con distanciamiento físico y recuperar la confianza perdida en la vida urbana.<br/>
            En el marco del programa de incubación los proyectos ganadores del #IDEATÓN, Agustín Frizzera, Director Ejecutivo de Democracia En Red y Coordinador de Causas Comunes, charló sobre Gobierno Abierto y Nuevas Tecnologías.<br/> 
            Conocé más en  <a href="http://ciudadescomunes.org">http://ciudadescomunes.org</a>
          </p>
        </div>
      
        <div className="container-bulma">
          <h1>
            <span>El impacto de la crisis actual en las decisiones de las ciudades</span>
          </h1>
          <div className="after-playback">
            <div className="videoWrapper">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/jMs-S-MCdyg`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
          
            <p>
              <span>
                <strong>Maria Buhigas</strong>  Regidora del Ayuntamiento de Barcelona<br/>
                Modera: <br/>Agustin Frizzera - Democracia en red <br/><br/>
              </span>
            </p>
        </div>
      </div>
    </React.Fragment>
  )
}
export default CommonCitys;