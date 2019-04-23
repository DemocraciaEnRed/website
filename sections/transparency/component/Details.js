import React, {Component} from 'react';
import {Bar, defaults} from 'react-chartjs-2';


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: {
            labels: ['30 de junio de 2015', '30 de junio de 2016', '30 de junio de 2017', '30 de junio de 2018'],
  datasets: [
    {
      label: 'Servicios',
      backgroundColor: '#219EFF',
      borderColor: '#219EFF',
      borderWidth: 1,
      hoverBackgroundColor: '#219EFF',
      hoverBorderColor: '#219EFF',
      data: [0, 2019402.49,330325.30, 678800]
    },
    {
        label: 'Donaciones',
        backgroundColor: '#5ce175',
        borderColor: '#5ce175',
        borderWidth: 1,
        hoverBackgroundColor: '#5ce175',
        hoverBorderColor: '#5ce175',
        data: [1497115.69, 933012.19, 1346284.39, 2630485.26]
      }
  ]
        }
        }
    }
    render() {
        const chartOptions = {
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function(value) {
                    return '$' + value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
                  }
              }
            ]
        },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return '$' + parseInt(tooltipValue).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }

        }
        const {data} = this.state;
        const {subtitle} = this.props;
        return (
            <div className="details-container">
              <div className="subtitle">{subtitle}</div>
              <div className="details-graphic">
                    <Bar
                      data={data}
                     width={650}
                     height={350}
                     options={chartOptions}
                   
                      
                    />
                    </div>
                    <style jsx>
                    
                    {`
                    .subtitle {
                      text-align: center;
                    }
                    @media (max-width: 700px) {
                      .details-container {
                        margin-bottom: 20px;
                      }

                      
                    .details-graphic {
                      margin-bottom: 15px;
                    }
                     }
                    `}

                    </style>
                  </div>
        )
    }
}

export default Details