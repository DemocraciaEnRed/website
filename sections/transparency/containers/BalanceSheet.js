
const BalanceSheet = (props) => {
  return (
    <section className="balance-sheet-container">
    <div className="text-container">
    <div className="title"><h1>{props.text}</h1></div>
    </div>
    <div className="btn-container">
    <a href={props.url} target="_blank">
      <button className="btn">
        <span className="action-text">{props.btnText}</span>
      </button>
      </a>
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
   
    `}
    </style>
    </section>
  )
 
}

export default BalanceSheet