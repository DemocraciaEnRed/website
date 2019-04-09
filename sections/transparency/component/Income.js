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
                'FFHC',
                'Servicios',
                'Donaciones'
               
              ],
              datasets: [{
                data: [51.9, 37.8, 8.2, 2.1, 0, 0],
                backgroundColor: [
                '#ef8cca ',
                '#f4a4d5 ',
                '#f8bbdf ',
                '#fbd2ea',
                '#9DEDAC',
                '#EA73C0',
                ],
                label: ['Hola', 'Ble', 'Ble'],
                hoverBackgroundColor: [
                '#ef8cca ',
                '#f4a4d5 ',
                '#f8bbdf',
                '#fbd2ea',
                '#9DEDAC',
                '#EA73C0',
                ],
               
            },
            {
                data: [0, 0, 0, 0, 55.4, 44.6],
                backgroundColor: [
                '#EA73C0',
                '#9DEDAC',
                '#EA73C0',
                '#9DEDAC',
                '#9DEDAC',
                '#EA73C0',
                ],
                hoverBackgroundColor: [
                '#EA73C0',
                '#9DEDAC',
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