const GrandTotal = (props) => {

const resetButtonClass = (props.totalPeople > 1 || props.totalBill > 0) ?
                          'resetButtonActive' : 'resetButtonInactive'

return(

    <div className='grandTotalContainer'>
        <div className='totalsContainer'>
            <div id='totalsLabel'>
              <h4>Tip Amount</h4>
              <span>/ person</span>
            </div>
            <div>
              <h2>${props.tipEach.toFixed(2)}</h2>
            </div>
        </div>
        <div className='totalsContainer'>
            <div id='totalsLabel'>
              <h4>Total</h4>
              <span>/ person</span>
            </div>
            <div>
              <h2>${props.totalEach.toFixed(2)}</h2>
            </div>
        </div>
        <div onClick={()=> props.reset()} className={resetButtonClass}>RESET</div>

    </div>

  )
}

export default GrandTotal
