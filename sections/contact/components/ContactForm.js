import React, { Component } from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import fetch from 'isomorphic-unfetch'
import CheckedButton from '../../../components/CheckedButton'

export default class JobForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      reference: '',
      comments: '',
      disabled: false,
      error: false,
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      disabled: true
    })
    const form = {
      name: this.state.name,
      email: this.state.email,
      reference: this.state.reference,
      comments: this.state.comments
    }
    fetch('api/contacto',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    .then(r => {
      if (r.status === 200){
        this.setState({
          success: true
        })
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
            <span>{t('contact.form.name')}</span>
          </label>
          <input type='text' name='name' onChange={this.handleChange.bind(this)} required />
        </div>
        <div className='input-wrapper'> 
          <label htmlFor='email' className='required-field'>
            <span>{t('contact.form.email')}</span>
          </label>
          <input type='email' name='email' onChange={this.handleChange.bind(this)} required />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='reference'>
            <span>{t('contact.form.reference')}</span>
          </label>
          <input type='text' name='reference' onChange={this.handleChange.bind(this)} />  
        </div>
        <div className='input-wrapper'>
          <label htmlFor='comments'>
            <span>{t('contact.form.message')}</span>
          </label>
          <textarea name='comments' onChange={this.handleChange.bind(this)} />
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
                {t('contact.callToAction')}
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
            font-size: 2rem;

          }
          input:required {
            box-shadow: none;
          }
          input:focus {
            box-shadow: 0 0 1.5px 1px red;
          }
          textarea {
            border-radius: 10px;
            border: solid 1px #979797;
            height: 150px;
            margin-bottom: 11px;
            max-width: 718px;
            padding: 5px;
            width: 100%;
            font-size: 1.9rem;

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
            text-align: center;
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
