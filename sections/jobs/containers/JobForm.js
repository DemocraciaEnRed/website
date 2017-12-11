const JobForm = () => (
  <section className='form-wrapper'>
    <form>
      <div className='job-section'>
        <div className='job-title'>
          <h5>Datos Personales</h5>
        </div>
        <div className='job-input-container'>
          <label htmlFor='name' className='required-field'>
            <span>Nombre y apellido</span>
          </label>
          <input type='text' name='name' required />
          <label htmlFor='email' className='required-field'>
            <span>Email</span>
          </label>
          <input type='email' name='email' required />
          <label htmlFor='phone' className='required-field'>
            <span>Teléfono</span>
          </label>
          <input type='number' name='phone' required />
        </div>
      </div>
      <div className='job-section'>
        <div className='job-title'>
          <h5>Carga tu CV</h5>
        </div>
        <div className='job-input-container'>
          <label className='file-label'>
            <span className='file-span'>Cargar archivo</span>
            <input type='file' />
          </label>
          <span className='optional-field'>Este campo es opcional</span>
        </div>
      </div>
      <div className='job-section'>
        <div className='job-title'>
          <h5>Comentarios o consultas</h5>
        </div>
        <div className='job-input-container'>
          <label htmlFor='comments'>
            <span>¿Algo más que nos quieras decir?</span>
          </label>
          <textarea name='comments' />
          <span className='optional-field'>Este campo es opcional</span>
        </div>
      </div>
      <div className='btn-container'>
        <button className='btn'>
          <span className='action-text'>
            Aplicar ahora
          </span>
        </button>
      </div>
    </form>
    <style jsx>{`
      .form-wrapper {
        padding-bottom: 64px;
      }
      form {
        width: 100%;
      }
      .job-section {
        display: flex;
        flex-wrap: nowrap;
      }
      .job-section:not(last-child) {
        margin-bottom: 65px;
      }
      .job-title {
        padding-right: 63px;
      }
      .job-input-container {
        border-left: solid 1px #979797;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        padding-left: 63px;
        width: 778px;
      }
      h5 {
        color: var(--light-accent);
        font-size: 2.0rem;
        letter-spacing: 0.13rem;
        text-align: left;
        width: 152px;
      }
      label {
        color: var(--black);
        font-size: 1.6rem;
        margin-bottom: 10px;
        letter-spacing: 0.13rem;
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
        height: 43px;
        width: 100%;
      }
      input:not(last-child) {
        margin-bottom: 22px;
      }
      .optional-field {
        color: #999;
        font-size: 1.4rem;
        letter-spacing: 0.13rem;
      }
      textarea {
        width: 100%;
        height: 150px;
        margin-bottom: 19px;
        border-radius: 10px;
        border: solid 1px #979797;
      }
      .file-label {
        align-items: center;
        border-radius: 10px;
        border: solid 1px #979797;
        display: flex;
        height: 43px;
        justify-content: center;
        width: 200px;
      }
      .file-span {
        background-color: #d8d8d8;
        border-radius: 10px;
        color: var(--black);
        font-size: 1.6rem;
        letter-spacing: 0.13rem;
        padding: 3px 5px;
      }
      input[type="file"] {
        display: none;
      }
      .btn-container {
        display: flex;
        justify-content: center;
        margin-top: 26px;
      }
      @media (max-width: 1024px) {
        .job-input-container {
          width: 600px;
        }
      }
    `}</style>
  </section>
)

export default JobForm