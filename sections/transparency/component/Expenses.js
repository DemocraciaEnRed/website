import React, {Component} from "react"
import {Doughnut} from "react-chartjs-2"


class Expenses extends Component {
    constructor(props) {
        super(props);

        this.state= {
            data: { labels: [
                'Honorarios',
                'Servicios de Consultoria',
                'Diseño y comunicación',
                'Oficina',
                'Otros'
              ],
              datasets: [{
                data: [70.3, 14.7, 4.6, 10.3, 0.1],
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
            

            }
        }
    }

    render() {
        const {data} = this.state;
        const {subtitle} = this.props;
        
        const option = {
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
           <div className="title"><span>{subtitle}</span></div>
            <Doughnut
            width={350}
            height={250}
            data={data}
            options={option}
             />
            <style jsx>
                    {`
        .expenses-container{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        flex-wrap: wrap;
        }
        .title{
            margin-top: 10px;
            margin-bottom: 10px;
            text-align: center;
            width: 100%;
        }
        .title span {
            font-weight: 600;
            font-size: 35px;
        }

  `}

            </style>
            </div>
        )
    }
}

export default Expenses