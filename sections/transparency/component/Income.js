import React, {Component} from "react"
import {Doughnut} from "react-chartjs-2"


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
          return data.labels[tooltipItem[0].index];
        }
      }
    }
  }
  
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
                data: [55.4, 0,51.9, 37.8, 8.2, 2.1],
                backgroundColor: [
                '#C894FF',
                '#87e99a',
                '#9dedac',
                '#b3f1be',
                '#c8f5d0',
                '#def9e3',
                ],
                hoverBackgroundColor: [
                '#C894FF',
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
                '#C894FF',
                '#5ce175',
                '#FFF',
                '#FFF',
                '#FFF',
                '#FFF',
                ],
                hoverBackgroundColor: [
                '#C894FF',
                '#72e588',
                '#EA73C0',
                '#9DEDAC',
                '#9DEDAC',
                '#EA73C0',
                ]
            }
        ]
            

            }
        }
    }

    render() {
        const {data} = this.state;
        const {subtitle} = this.props
        return (
            <div className="income-container">
           <div className="title"><span>{subtitle}</span></div>
            <Doughnut
            width={180}
            height={180}
            data={data}
            options={option}
             />
            <style jsx>
                    {`
        .income-container{
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

export default Income