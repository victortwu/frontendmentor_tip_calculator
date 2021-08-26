const GrandTotal = () => {
  return(
    <div className='grandTotalContainer'>
        <div className='totalsContainer'>
            <div id='totalsLabel'>
              <h4>Tip Amount</h4>
              <span>/ person</span>
            </div>
            <div>
              <h2>$0.00</h2>
            </div>
        </div>
        <div className='totalsContainer'>
            <div id='totalsLabel'>
              <h4>Total</h4>
              <span>/ person</span>
            </div>
            <div>
              <h2>$0.00</h2>
            </div>
        </div>
      <button className='resetButton'>RESET</button>
    </div>
  )
}

export default GrandTotal
