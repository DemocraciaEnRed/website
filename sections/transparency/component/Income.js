import React, {Component} from "react"
import {Doughnut} from "react-chartjs-2"
import { t } from '../../../polyglot-modules/polyglot.js'

class Income extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
      this.setData()
    }

    componentWillReceiveProps(nextProps){
      if (nextProps && nextProps.currentLang && this.props.currentLang != nextProps.currentLang){
        this.setData()
        this.setState({ currentLang: nextProps.currentLang })
      }
    }

    setData(){
      this.setState({data: {
        labels: [0,1,2,3,4].map(i => {
          return t(`transparency.incomeGraphic.labels.${i}`)
        }),
        datasets: [
          {
            data: [
              56.8, 0, 10.2, 23.2, 9.8
            ],
            backgroundColor: [
              '#219EFF',
              '#87e99a',

              '#9dedac',
              '#c8f5d0',
              '#b3f1be',
              '#b3f1be',
              '#def9e3',
              '#9dedac',
            ],
            hoverBackgroundColor: [
              '#219EFF',
              '#87e99a',

              '#9dedac',
              '#c8f5d0',
              '#b3f1be',
              '#b3f1be',
              '#def9e3',
              '#9dedac',
            ],
          },
          {
            data: [
              56.8, 43.2
            ],
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
        ]//end datasets
      }})
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
