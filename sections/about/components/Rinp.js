const data = {
  text: [
    'La crisis de representación es latinoamericana y, por lo tanto, los debates deben ser, también, latinoamericanos. Pensar soluciones escalables en diferentes países, aprender de las experiencias locales y debatir sobre implementaciones de las mismas herramientas en diferentes contextos socio-económicos e institucionales.',
    'Desde Democracia en Red estamos comprometidos con esta red de personas en América Latina que estamos trabajando, desde el sistema político y/o la sociedad civil, en el paradigma de la innovación cívica.',
    'Luego del encuentro fundacional de Buenos Aires, en Julio de 2016, trabajamos juntos en el desarrollo de innovaciones que nos permitan participar en el diseño de instancias nuevas de participación ciudadana con impacto en el sistema político. '
  ],
  list: {
    title: 'Como productos de la Red podemos destacar:',
    items: [
      'El futuro lanzamiento de “Politica Recuperada” (octubre 2016), material audiovisual de entrevistas a miembros de la Red.',  
      'El futuro lanzamiento de “Que democracia para el Siglo XXI. volII”(febrero 2017), publicación de formato epub con reflexiones sobre nuevas vías para la representación democrática y el sujeto político del siglo XXI.',
      'Taller de “campañas políticas innovadoras” para miembros de la Bancada Ativista (bancadaativista.org), fue realizado en Sao Paulo, en agosto de 2016, con 5 integrantes de la Red (Agustín Frizzera, DeR, Arg; Rodrigo Etchecopar, RD, Chi; Caio Tendolini, UpDate, Br; Susana Ochoa y Alejandra Parra, WikiPolítica, Mx) como expositores.'
    ]
  },
  callToAction: 'Más info'
}

const Rinp = () => (
  <div className='rinp-container'>
    <img src='/static/assets/about/logoredi.svg' alt='Red de Innovación Política Logo'/>
    <div className='rinp-text'>
      {data.text.map((it,i)=> {
        return <p key={i}>{it}</p>
      })}
    </div>
    <div className='rinp-list'>
      <p>{data.list.title}</p>
      <ul>
        {data.list.items.map((it, i)=> {
          return <li key={i}>{it}</li>
        })}
      </ul>
    </div>
    <button className='btn'>
      <span className='action-text'>
        {data.callToAction}
      </span>
    </button>
    <style jsx>{`
      .rinp-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 100px 0;
        position: relative;
      }
      .rinp-text {
        margin-top: 41px;
      }
      .rinp-text p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      .rinp-text p:last-child {
        margin-top: 38px;
      }
      .rinp-list {
        margin: 38px 192px 42px;
      }
      .rinp-list p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: left;
        margin-bottom: 38px;
      }
      .rinp-list ul {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        list-style-type: disc;
      }
      .rinp-container:after{
        content : '';
        position: absolute;
        left    : 10%;
        bottom  : 0;
        height  : 1px;
        width   : 80%;
        border-bottom:1px solid #979797;
      }
    `}</style>
  </div>
)

export default Rinp