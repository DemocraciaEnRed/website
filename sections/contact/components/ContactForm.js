import fetch from 'isomorphic-unfetch'
import ContactButton from './ContactButton'

const submitForm = (e) => {
  e.preventDefault()
  console.log(e.target)
  const form = new FormData(e.target)

  fetch('https://der-api.now.sh/contacto',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: {}
    })
    .then(r => console.log(r.status))
}

const ContactForm = () => (
  <form onSubmit={submitForm}>
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
      <label htmlFor='reference'>
        <span>¿Cómo nos conociste?</span>
      </label>
      <input type='text' name='reference' />  
    </div>
    <div className='input-wrapper'>
      <label htmlFor='comments'>
        <span>Acá podés dejarnos tu mensaje!</span>
      </label>
      <textarea name='comments' required />
    </div>
    <div className='btn-container'>
      <ContactButton />
    </div>
    <style jsx>{`
      form {
        margin-top: 48px;
        max-width: 718px;
        width: 100%;
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
        max-width: 718px;
        padding: 10px;
        height: 43px;
        width: 100%;
      }
      textarea {
        border-radius: 10px;
        border: solid 1px #979797;
        height: 150px;
        margin-bottom: 48px;
        max-width: 718px;
        padding: 10px;
        width: 100%;
      }
      div.input-wrapper:not(last-child){
        margin-bottom: 22px;
      }
      .btn-container {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </form>
)

export default ContactForm