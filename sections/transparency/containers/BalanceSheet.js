import { t } from '../../../polyglot-modules/polyglot.js'

const sheets = [0, 1]

const BalanceSheet = (props) => {
  return (
    <section className="balance-sheet-container">
    <div className="text-container">
    <div className="title"><h1>{props.text}</h1></div>
    </div>
    <div className="btn-container">
      {sheets.map(i => {
        return <a className="btn-a" href={t(`transparency.balanceSheets.sheets.${i}.urldownload`)} target="_blank">
            <button className="btn">
              <span className="action-text">{t(`transparency.balanceSheets.sheets.${i}.btn-text`)}</span>
            </button>
          </a>
      })}
    </div>

    <style jsx>{`
    .balance-sheet-container {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      width: 100%;
    }
    .text-container {
      display: flex;
      width: 100%;
    }
    .title {
      width: 100%;
      text-align: center;
    }
    .btn-container {
      display: flex;
      margin: 20px;
      justify-content: center;
      width: 100%;
    }
    .btn-a {
      margin-right: 15px;
    }
    .btn-a:last-child {
      margin-right: 0;
    }
    `}
    </style>
    </section>
  )

}

export default BalanceSheet
