import React, { Component } from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import fetch from 'isomorphic-unfetch'
import CheckedButton from '../../../components/CheckedButton'

export default class JobForm extends Component {
  constructor () {
    super()
    this.state = {
      disabled: false,
      error: false,
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    fetch('https://der-api.now.sh/contacto',{
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(r => {
      if (r.status === 200){
        this.setState({
          success: true
        }, () => console.log(this.state))
        setTimeout(() => this.setState({
          disabled: false,
          success: false
        }), 4000)
      } else {
        this.setState({
          error: true
        })
        setTimeout(() => this.setState({
          disabled: false,
          error: false
        }), 4000)
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
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
        </    div>
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
          <textarea name='comments' />
        </div>
        <div className='btn-container'>
          <div className='message-container'>
            {this.state.error &&
              <span className='regular-text'>{t('index.header.internalError')}</span>
            }
          </div>
          <button className='btn' type='submit' disabled={this.state.disabled}>
            {this.state.success ?
              <CheckedButton />
            :
              <span className='action-text'>
                Enviar
              </span>
            }
          </button>
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
            margin-bottom: 11px;
            max-width: 718px;
            padding: 10px;
            width: 100%;
          }
          div.input-wrapper:not(last-child){
            margin-bottom: 22px;
          }
          .btn-container {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
          }
          .message-container {
            min-height: 22px;
            margin-bottom: 15px;
          }
          .regular-text {
            color: var(--dark-accent);
            text-align: center;
          }
        `}</style>
      </form>
    )
  }
}
