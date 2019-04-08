import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class DetailOutcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: {
            labels: ['30 de junio de 2015', '30 de junio de 2016', '30 de junio de 2017', '30 de junio de 2018'],
  datasets: [
    {
      label: 'Diseño',
      backgroundColor: '#FFDC5C',
      borderColor: '#FFDC5C',
      borderWidth: 1,
      hoverBackgroundColor: '#FFDC5C',
      hoverBorderColor: '#FFDC5C',
      data: [0, 0,330325.30, 192205]
    },
    {
        label: 'Impuesto e intereses',
        backgroundColor: '#219EFF',
        borderColor: '#219EFF',
        borderWidth: 1,
        hoverBackgroundColor: '#219EFF',
        hoverBorderColor: '#219EFF',
        data: [9301.58, 25257.96, 34786.16, 80626.18]
      },
      {
        label: 'Gastos de oficina',
        backgroundColor: '#9DEDAC',
        borderColor: '#9DEDAC',
        borderWidth: 1,
        hoverBackgroundColor: '#9DEDAC',
        hoverBorderColor: '#9DEDAC',
        data: [24.091,36, 28298, 2310, 59.372]
      },
      {
        label: 'Honorarios',
        backgroundColor: '#C894FF',
        borderColor: '#C894FF',
        borderWidth: 1,
        hoverBackgroundColor: '#C894FF',
        hoverBorderColor: '#C894FF',
        data: [1497115.69, 933012.19, 1254320, 1727560]
      }
  ]
        }
        }
    }
    render() {
        const {data} = this.state
        return (
            <div>
                 <div className="subtitle">Egreso por objeto del año fiscal</div>
                    <Bar
                      data={data}
                     width={650}
                     height={350}
                     options={{scales: {
                      yAxes: [
                        {
                            ticks: {
                               callback: function(label) {
                                 return '$' + label;
                               }
                            }
                        }
                      ]
                  }}}
                
                      
                    />
                       <style jsx>{
                         `
                         .subtitle {
                           text-align: center;
                         }
                         `
                       }
                       </style>
                  </div>
        )
    }
}

export default DetailOutcome;