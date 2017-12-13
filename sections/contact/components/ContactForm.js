import ContactButton from './ContactButton'

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
      <label htmlFor='contact-info'>
        <span>¿Cómo nos conociste?</span>
      </label>
      <input type='text' name='contact-info' />  
    </div>
    <div className='input-wrapper'>
      <label htmlFor='comments'>
        <span>Acá podés dejarnos tu mensaje!</span>
      </label>
      <textarea name='comments' required />
    </div>
    <ContactButton />
    <style jsx>{`
      form {
        width: 100%;
        margin-top: 48px;
      }
      .input-wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
      label {
        font-size: 1.6rem;
        letter-spacing: 0.13rem;
        margin-bottom: 10px;
      }
      label.required-field :after {
        color: #ff0000;
        content: '*';
        font-size: 1.6rem;
        letter-spacing: 0.13rem;
      }
      input {
        border-radius: 10px;
        border: solid 1px #979797;
        padding: 10px;
        height: 43px;
        width: 100%;
      }
      textarea {
        border-radius: 10px;
        border: solid 1px #979797;
        height: 150px;
        margin-bottom: 48px;
        padding: 10px;
        width: 100%;
      }
      div.input-wrapper:not(last-child){
        margin-bottom: 22px;
      }
    `}</style>
  </form>
)

export default ContactForm