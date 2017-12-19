import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export default class JobForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: 'Cargar archivo'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    fetch('https://der-api.now.sh/trabajo',{
      method: 'POST',
      body: form
    })
    .then(r => console.log(r.status))
  }

  render () {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className='job-section'>
            <div className='job-title'>
              <h5>Datos Personales</h5>
            </div>
            <div className='job-input-container'>
              <label htmlFor='id' className='hidden-field'>
                <input type='text' name='id' defaultValue={this.props.id} />
              </label>
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
                <span className='file-span'>{this.state.message}</span>
                <input type='file' name='cv' ref='file' onChange={() => this.setState({message: this.refs.file.value})}/>
              </label>
              <span className='optional-field'>Este campo es opcional. Máximo 5 mb.</span>
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
            <button type='submit' className='btn'>
              <span className='action-text'>
                Aplicar ahora
              </span>
            </button>
          </div>
        <style jsx>{`
          form {
            width: 100%;
            background-color: var(--white);
            padding-bottom: 16px;
            padding-top: 31px;
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
            padding: 10px;
            width: 100%;
          }
          input:not(last-child) {
            margin-bottom: 22px;
          }
          .hidden-field {
            display: none;
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
            padding: 10px;
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
            display: block;
            font-size: 1.6rem;
            letter-spacing: 0.13rem;
            max-width: 100%;
            overflow: hidden;
            padding: 3px 5px;
            text-overflow: ellipsis;
            white-space: nowrap;
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
            form {
              padding-top: 0;
            }
            .job-input-container {
              width: 600px;
            }
          }
          @media (max-width: 768px) {
            .job-section {
              flex-direction: column;
            }
            .job-input-container {
              border-left: 0;
              padding: 30px 0 0;
            }
            .job-section:not(last-child) {
              margin-bottom: 50px;
            }
            h5 {
              width: auto;
            }
          }
          @media (max-width: 641px) {
            .job-input-container {
              width: 100%;
            }
          }
        `}</style>
      </form>
    )
  }
}