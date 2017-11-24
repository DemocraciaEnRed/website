const content = {
  text : [
    'Es necesario repensar el modelo educativo. Hoy, se sigue educando niños para la sociedad industrial: ciudadanos-consumidores que sólo aprenden a elegir entre opciones y acceden a un conocimiento estandarizado, administrado verticalmente y munido de dinámicas disciplinarias de "premios y castigos".',
    'Los Entornos de Aprendizaje Auto Organizado (S.O.L.E., sus siglas en inglés) son espacios que a simple vista parecen algo caóticos: muchos niños, algunas computadoras y una gran pregunta. La propuesta organiza el acceso en grupos a las computadoras para investigar y responder a una pregunta estimulante. Así, surgen en el aula nuevas interacciones. La magia desatada por esta experiencia enciende la curiosidad y el asombro de los niños, los grandes motores de este dispositivo.',
    'Basada en la metodología del Dr. Sugata Mitra, el enfoque S.O.L.E. está concluyendo su aplicación piloto en la Escuela N° 20 de la Ciudad de Buenos Aires, gracias a un convenio con el Ministerio de Educación. En total, realizamos más de 160 sesiones S.O.L.E., en 4 etapas en 2015 y 2016, en 5 grados de educación inicial de dicha Escuela.',
    'Entre sus resultados y aprendizajes, destacamos los siguientes:'
  ],
  listItems : [
    'En el 94% de las sesiones, los niños lograron construir una respuesta apropiada para la pregunta curricular planteada',
    'En la prueba de retención de conocimiento realizada al final de la etapa 4 (junio 2016), los alumnos recordaban el 80% de los contenidos trabajados en SOLE.',
    'Los docentes reportan mejoras en las habilidades de comprensión lectora, fundamentalmente cuando se realiza en grupos.',
    'La evaluación de la capacidad de adquirir conocimientos en Internet (CACI) dio mejores resultados un 20% superiores a los de las escuelas constituidas como “grupos de control”.',
    'A  partir del enfoque y las actividades desarrolladas, se logró impactar sobre las metas aspiracionales de algunos estudiantes.'
  ],
  buttonText: 'Más info'
}

const Sole = () => (
  <div className='sole-container'>
    <div>
      {content.text.map((it, i)=> {
        return <p key={i}>{it}</p>
      })}
    </div>
    <ul>
      {content.listItems.map((it,i)=> {
        return <li key={i}>{it}</li>
      })}
    </ul>
    <button className='btn'>
      <span className='action-text'>
        {content.buttonText}
      </span>
    </button>
    <style jsx>{`
      .sole-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 60px 0 100px;
      }
      .sole-container p{
        font-size: 2rem;
        letter-spacing: 0.13rem;
        margin-top: 20px;
        text-align: center;
      }
      .sole-container p:first-child{
        margin-top: 43px;
      }
      .sole-container ul {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        list-style-type: disc;
        margin: 41px 192px 42px;
      }
      .sole-container .btn {
        margin-top: -3px;
      }
    `}</style>
  </div>
)

export default Sole