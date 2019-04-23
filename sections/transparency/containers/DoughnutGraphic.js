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
        <Income subtitle={t('transparency.doughnutGraphic.subtitleOne')} />
        <Expenses subtitle={t('transparency.doughnutGraphic.subtitleTwo')} />
     
      <style jsx>{`
    .graphic-section {
      display: flex;
      justify-content: space-around;
      overflow-x: hidden;
      height: auto;
      
    }
    @media (max-width: 700px) {
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