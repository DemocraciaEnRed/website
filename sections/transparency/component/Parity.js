import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Parity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['Cantidad', 'Horas', 'Salario'],
        datasets: [
          {
            label: 'Mujeres',
            backgroundColor: '#20A19A',
            borderColor: '#20A19A',
            borderWidth: 1,
            hoverBackgroundColor: '#20A19A',
            hoverBorderColor: '#20A19A',
            data: [50, 49, 47, 0]
          },
          {
            label: 'Hombres',
            backgroundColor: '#FF6A72',
            borderColor: '#FF6A72',
            borderWidth: 1,
            hoverBackgroundColor: '#FF6A72',
            hoverBorderColor: '#FF6A72',
            data: [50, 51, 53, 0]
          }
        ]
       
       }
    }
  }
render() {
  const {data} = this.state
  const {subtitle} = this.props
  return (
    <div>
      <div className="parity-subtitle">
        <h1>{subtitle}</h1>
        </div>
      <HorizontalBar
       width={650}
       data={data} 
       height={450}
       options={{
        scales:
        {
          xAxes:[{display: false}],
          yAxes:[
            {
              gridLines: {display: false},
             ticks: {fontSize: 20}            
           }
           ]
        }
        }
      }
       />
     <style jsx>{`
       .parity-subtitle {
         margin: 15px;
         text-align: center;
       }
     `}
     
     </style>
    </div>
 
 
  )

}
}

export default Parity