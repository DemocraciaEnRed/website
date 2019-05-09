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

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      labels: {
        fontFamily: "Dosis-Regular, 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 20
      }
    },
    scales:
        {
          xAxes:[{display: false}],
          yAxes:[
            {
              gridLines: {display: false},
             ticks: {
               fontSize: 20,
               fontFamily: "Dosis-Regular, 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              }            
           }
           ]
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
                //get de current data set
                let title = data.datasets[tooltipItem.datasetIndex].label;
              let dataset = data.datasets[tooltipItem.datasetIndex];
              //get the current items value
              let currentValue = dataset.data[tooltipItem.index];
             return title + ': ' + currentValue + '%';
            },
           
          }
        }

  }
  const {data} = this.state
  const {subtitle} = this.props
  return (
    <div>
      <div className="parity-subtitle">
        <h1>{subtitle}</h1>
        </div>
        <div className="parity-graphic">
      <HorizontalBar
       width={600}
       height={450}
       data={data} 
       options={chartOptions}
       />
       </div>
     <style jsx>{`
       .parity-subtitle {
         margin: 15px;
         text-align: center;
       }
       .parity-graphic {
         min-width: 0;
         display: flex;
         justify-content: center;
         align-items: center;
       }

       @media (min-width: 300px) and (max-width: 780px) {
         .parity-graphic {
           height: 40vh;
           width: 85vw; 
         }
       }

       @media (min-width: 780px) and (max-width: 1400px) {
        .parity-graphic {
          height: 40vh;
          width: 85vw; 
        }
       }
     `}
     
     </style>
    </div>
 
 
  )

}
}

export default Parity