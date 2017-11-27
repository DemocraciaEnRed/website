const data = {
  title: 'Conexiones Latinoamericanas de Innovación Política',
  text: [
    'La Iniciativa CLIP apunta a crear condiciones, reformas institucionales y una cultura política diferente, desde el presente y para el mediano y largo plazo, que contribuyan a mejorar y transformar la democracia para una redistribución efectiva del poder.',
    'Como parte de su Consejo Estratégico, DeR está comprometida con el CLIP en tanto busca generar conocimiento desde lo teórico/práctico sobre los dilemas del desarrollo sustentable y los nuevos marcos de ejercicio político; articular experiencias y lecciones aprendidas entre los participantes de la iniciativa; acompañar y preparar a los actores cuando deciden participar en la disputa electoral o sumarse a una gestión pública estatal.'
  ],
  callToAction: 'Más info'
}

const Clip = () => (
  <div className='clip-container'>
    <h2>{data.title}</h2>
    <div className='clip-text'>
      {data.text.map((it, i)=> {
        return <p key={i}>{it}</p>
      })}
    </div>
    <button className='btn'>
      <span className='action-text'>
        {data.callToAction}
      </span>
    </button>
  </div>
)

export default Clip
