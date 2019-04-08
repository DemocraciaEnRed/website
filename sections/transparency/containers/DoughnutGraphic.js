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
        <Income />
        <Expenses />
     
      <style jsx>{`
    .graphic-section {
      display: flex;
      justify-content: center;
      overflow-x: hidden;
    }

  `}</style>
      </section>
  )

  }
  
}

export default DoughnutGraphic;