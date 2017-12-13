const ContactTitle = () => (
  <div className='contact-title-container'>
    <h2 className='section-title'>Contactate con nosotros</h2>
    <p className='regular-text'>Tenés dudas, recomendaciones, querés colaborar o solamente saludarnos?</p>
    <p className='regular-text'>Aquí podés hacerlo.</p>
    <style jsx>{`
      .contact-title-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .section-title {
        font-size: 3.6rem;
        margin-bottom: 7px;
        text-transform: uppercase;
      }
      .regular-text {
        color: var(--black);
        font-size: 2.4rem;
        text-align: center;
      }
    `}</style>
  </div>
)

export default ContactTitle