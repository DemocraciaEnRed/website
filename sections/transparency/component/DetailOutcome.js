import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { t } from '../../../polyglot-modules/polyglot.js'

class DetailOutcome extends Component {
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
            return t(`transparency.outcomeByYearGraphic.years.${i}`)
          }),
          datasets: [
            {
              label: t("transparency.outcomeByYearGraphic.labels.0"),
              backgroundColor: '#FFDC5C',
              borderColor: '#FFDC5C',
              borderWidth: 1,
              hoverBackgroundColor: '#FFDC5C',
              hoverBorderColor: '#FFDC5C',
              data: [0, 0, 540900, 368805, 1073626.07]
            },
            {
              label: t("transparency.outcomeByYearGraphic.labels.1"),
              backgroundColor: '#219EFF',
              borderColor: '#219EFF',
              borderWidth: 1,
              hoverBackgroundColor: '#219EFF',
              hoverBorderColor: '#219EFF',
              data: [27593.75, 94031.07, 660411.1, 108363.95, 33837.97]
            },
            {
              label: t("transparency.outcomeByYearGraphic.labels.2"),
              backgroundColor: '#9DEDAC',
              borderColor: '#9DEDAC',
              borderWidth: 1,
              hoverBackgroundColor: '#9DEDAC',
              hoverBorderColor: '#9DEDAC',
              data: [51631.08, 81950, 126310, 223747, 237561.31]
            },
            {
              label: t("transparency.outcomeByYearGraphic.labels.3"),
              backgroundColor: '#C894FF',
              borderColor: '#C894FF',
              borderWidth: 1,
              hoverBackgroundColor: '#C894FF',
              hoverBorderColor: '#C894FF',
              data: [1547948, 2184899, 1254320, 1727560, 5166089.87]
            }
          ]//end data.datasets
        }})//end data
    }

    render() {
      const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
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
            <div className="detailOutcome-container">
                 <div className="subtitle">{subtitle}</div>
                    <div className="detailOutcome-graphic">
                    <Bar
                      data={data}
                      width={650}
                      height={300}
                     options={chartOptions}
                    />
                    </div>
                       <style jsx>{`
                         .detailOutcome-container{
                          min-width: 0
                        }
                       .detailOutcome-graphic {
                          position: relative;
                         /*  height: 70vh;
                          width: 40vw; */
                          margin-right: 25px;
                          min-width: 0
                       }
                        .subtitle {
                          text-align: center;
                        }

                        @media (min-width: 780px) and (max-width: 1400px) {
                          .detailOutcome-container {
                            margin-bottom: 20px;
                          }


                        .detailOutcome-graphic {
                          margin: 0 0 20px 0;
                           height: 60vh;
                          width: 65vw;
                        }
                        }
                        @media (min-width: 341px) and (max-width: 780px) {
                          .detailOutcome-container {
                            margin-bottom: 20px;
                          }


                        .detailOutcome-graphic {
                          margin: 0 0 10px 0;
                           height: 36vh;
                          width: 85vw;
                        }
                         }

                         `

                       }
                       </style>
                  </div>
        )
    }
}

export default DetailOutcome;
