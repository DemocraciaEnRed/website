import React, {Component} from "react"
import {Doughnut} from "react-chartjs-2"


class Expenses extends Component {
    constructor(props) {
        super(props);

        this.state= {
            data: { labels: [
                'Diseño y comunicación',
                'Contrataciones Ext.',
                'Honorarios',
                'Oficina',
                'Otros'
              ],
              datasets: [{
                data: [3.44, 15.65, 54.21, 8.38, 18.32],
                backgroundColor: [
                '#62378C',
                '#B54CFF',
                '#9500FF',
                '#73617F',
                '#C894FF'
                ],
                hoverBackgroundColor: [
                '#62378C',
                '#B54CFF',
                '#9500FF',
                '#73617F',
                '#C894FF'
                ]
            }]


            },

        }
    }





    render() {
        const {data} = this.state;
        const {subtitle} = this.props;
        const option = {
          cutoutPercentage: 65,
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
                  //return each label
                return data.labels[tooltipItem[0].index];
              }
            }
          }
        }
        return (

            <div className="expenses-container">
           <div className="subtitle">{subtitle}</div>
           <div className="expenses-graphic" ref={ (divElement) => this.divElement = divElement}>
            <Doughnut
            data={data}
            options={option}
            width={650}
            height={500}
             />
             </div>
            <style jsx>
                    {`
        .expenses-container{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        flex-wrap: wrap;
        }
        .subtitle{
            margin-top: 10px;
            margin-bottom: 10px;
            text-align: center;
            width: 100%;
            font-size: 35px;
        }

        .expenses-graphic {
          display: flex;
          justify-content: center;
          height: 50vh;
          min-width: 0;
          position: relative;
        }
        canvas {
          width: 360px;
        }

        @media (min-width: 780px) and (max-width: 1400px) {
          .expenses-graphic {
            height: 60vh;
            width: 65vw;
          }
      }
      @media (min-width: 341px) and (max-width: 780px) {
        .expenses-graphic {
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

export default Expenses
