const GrandTotal = (props) => {

const backGroundColor = (props.totalPeople > 1 || props.totalBill > 0) ?
                        {backgroundColor: 'var(--aquaGreen)'}
                        : {backgroundColor: 'var(--lightDeepGreen)'}

console.log(props.zero)
console.log(props.zeroBill)
console.log(props.tip)
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
      <div style={backGroundColor} onClick={()=> props.reset()} className='resetButton'>RESET</div>

    </div>

  )
}

export default GrandTotal
