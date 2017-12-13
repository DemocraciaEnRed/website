import React from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import CheckedButton from '../../../components/CheckedButton.js'

export default class Submit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false,
      hasClicked: false
    }
  }

  checkingButton = () => {
    this.setState({
      checked: true,
      hasClicked: true
    })
    setTimeout(() => this.setState({
      checked: false,
    }), 2000)
  }

  render () {
    return (
     <div className='btn-container'>
      <button className='btn' onClick={this.checkingButton}>
        {this.state.checked ?
          <CheckedButton />
          :
          <span className='action-text'>
            Enviar
          </span>
        }
      </button>
      <style jsx>{`
        .btn-container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
    )}
  }
