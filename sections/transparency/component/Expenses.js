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
                'Oficina'
              ],
              datasets: [{
                data: [70.3, 14.7, 4.6, 10.3],
                backgroundColor: [
                '#62378C',
                '#B54CFF',
                '#9500FF',
                '#73617F'
                ],
                hoverBackgroundColor: [
                '#62378C',
                '#B54CFF',
                '#9500FF',
                '#73617F'
                ]
            }]
            

            }
        }
    }

    render() {
        const {data} = this.state
        return (
            <div className="expenses-container">
           <div className="title"><span>GASTOS</span></div>
            <Doughnut
            width={350}
            height={250}
            data={data}
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