import React, {Component} from "react"
import {Doughnut} from "react-chartjs-2"

class Income extends Component {
    constructor(props) {
        super(props);

        this.state= {
            data: { labels: [
                'Altec',
                'Open Society',
                'Clip',
                'Donaciones',
                'FFHC',
               
              ],
              datasets: [{
                data: [51.9, 37.8, 8.2, 2.1],
                backgroundColor: [
                '#B6DFFF',
                '#219EFF',
                '#37607F',
                '#1A7ECC'
                ],
                hoverBackgroundColor: [
                '#B6DFFF',
                '#219EFF',
                '#37607F',
                '#1A7ECC'
                ],
               
            },
            {
                data: [44.6, 56.4],
                label: [
                    'Donaciones',
                'Servicios'
                ],
                backgroundColor: [
                '#EA73C0',
                '#9DEDAC'
                ],
                hoverBackgroundColor: [
                '#EA73C0',
                '#9DEDAC'
                ]
            }
        ]
            

            }
        }
    }

    render() {
        const {data} = this.state
        return (
            <div className="income-container">
           <div className="title"><span>INGRESOS</span></div>
            <Doughnut
            width={180}
            height={180}
            data={data}
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