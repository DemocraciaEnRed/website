import { t } from '../../../polyglot-modules/polyglot.js'
import React, {Component} from "react"
import Income from "../component/Income"
import Expenses from "../component/Expenses"

class DoughnutGraphic extends Component{
  constructor(props) {
    super(props);

  }
  render () {
    return (
      <section className="graphic-section"> 
         <div className='title'>
           <h1>{t('transparency.title')}</h1>
          </div>
          <div className="section-subtitle">
          <p>{t('transparency.subtitle')}</p>
        <div className="section-text">
        </div>
    </div>
        <Income subtitle={t('transparency.doughnutGraphic.subtitleOne')} />
        <Expenses subtitle={t('transparency.doughnutGraphic.subtitleTwo')} />
     
      <style jsx>{`
    .graphic-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      overflow-x: hidden;
      height: auto;
      
    }
    .title {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .section-subtitle {
      text-align: center;
      font-size: 2.4rem;
      width: 100%;  
    }
    @media (min-width: 300px) and (max-width: 780px) {
      .graphic-section {

        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        overflow-x: hidden;

      }
      
    }

  `}</style>
      </section>
  )

  }
  
}

export default DoughnutGraphic;