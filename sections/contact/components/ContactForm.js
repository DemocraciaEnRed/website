const ContactForm = () => (
  <form>
    <div className='input-wrapper'>
      <label htmlFor='name' className='required-field'>
        <span>Nombre y apellido</span>
      </label>
      <input type='text' name='name' required />
    </div>
    <div className='input-wrapper'> 
      <label htmlFor='email' className='required-field'>
        <span>Email</span>
      </label>
      <input type='email' name='email' required />
    </div>
    <div className='input-wrapper'>
      <label htmlFor='contact-info' className='required-field'>
        <span>¿Cómo nos conociste?</span>
      </label>
      <input type='text' name='contact-info' required />  
    </div>
    <div className='input-wrapper'>
      <label htmlFor='comments'>
        <span>Acá podés dejarnos tu mensaje!</span>
      </label>
      <textarea name='comments' />
    </div>
    <div className='btn-container'>
      <button className='btn'>
        <span className='action-text'>
          Enviar
        </span>
      </button>
    </div>
  </form>
)

export default ContactForm