import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

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
        backgroundColor: '#EA73C0',
        borderColor: '#EA73C0',
        borderWidth: 1,
        hoverBackgroundColor: '#EA73C0',
        hoverBorderColor: '#EA73C0',
        data: [1497115.69, 933012.19, 1346284.39, 2630485.26]
      }
  ]
        }
        }
    }
    render() {
        const {data} = this.state
        return (
            <div>
              <div className="subtitle">Ingresos por fuente de financiamiento año fiscal</div>
                    <Bar
                      data={data}
                     width={650}
                     height={350}
                     options={{scales: {
                      yAxes: [
                        {
                            ticks: {
                               callback: function(label, index, labels) {
                                 return '$' + label;
                               }
                            }
                        }
                      ]
                  }}}
                   
                      
                    />
                    <style jsx>
                    
                    {`.subtitle {
                      text-align: center;
                    }`}

                    </style>
                  </div>
        )
    }
}

export default Details