import React, {Component} from "react"
import {Doughnut} from "react-chartjs-2"



  
class Income extends Component {
    constructor(props) {
        super(props);

        this.state= {
            data: { labels: [
                'Servicios',
                'Donaciones',
                'Altec',
                'Open Society',
                'Clip',
                'FFHC'
              ],
              datasets: [{
                data: [55.43, 0, 23.14, 16.86, 3.64, 0.93],
                backgroundColor: [
                '#219EFF',
                '#87e99a',
                '#9dedac',
                '#b3f1be',
                '#c8f5d0',
                '#def9e3',
                ],
                hoverBackgroundColor: [
                '#219EFF',
                '#87e99a',
                '#9dedac',
                '#b3f1be',
                '#c8f5d0',
                '#def9e3',
                ],
               
            },
            {
                data: [55.4, 44.6, 0, 0, 0],
                backgroundColor: [
                '#219EFF',
                '#5ce175',
                '#FFF',
                '#FFF',
                '#FFF',
                '#FFF',
                ],
                hoverBackgroundColor: [
                '#219EFF',
                '#72e588',
                '#EA73C0',
                ]
            }
        ]
            

            }
        }
    }

    render() {
        const {data} = this.state;
        const {subtitle} = this.props;
        const chartOptions = {
          maintainAspectRatio: false,
          responsive: true,
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                  //get de current data set
                let dataset = data.datasets[tooltipItem.datasetIndex];
                //get the current items value
                let currentValue = dataset.data[tooltipItem.index];
               return currentValue + '%';
              },
              title: function(tooltipItem, data) {
                return data.labels[tooltipItem[0].index];
              }
            }
          }
        }
        return (
            <div className="income-container">
           <div className="subtitle">{subtitle}</div>
           <div className="income-graphic">
            <Doughnut
            data={data}
            options={chartOptions}
            width={650}
            height={150}
             />
             </div>
            <style jsx>
                    {`
        .income-container{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        flex-wrap: wrap;
        min-width: 0;
        }
        .subtitle{
            margin-top: 10px;
            margin-bottom: 10px;
            text-align: center;
            width: 100%;
            font-size: 35px;
        }
        
        .income-graphic {
          display: flex;
          justify-content: center;
          height: 45vh;
          min-width: 0;
          position: relative;
        }

        @media (min-width: 780px) and (max-width: 1400px) {
            .income-graphic {
              height: 60vh;
              width: 65vw; 
            }
        }
        @media (min-width: 341px) and (max-width: 780px) {
          .income-graphic {
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

export default Income