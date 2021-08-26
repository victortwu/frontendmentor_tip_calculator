const SelectTip =()=> {
  return(
    <div className='selectTipContainer'>
      <span className='selectTipTitle'>Select Tip %</span>
      <table className='buttonsTable'>
        <tbody>
          <tr>
            <td><button className='percentButton'>5%</button></td>
            <td><button className='percentButton'>10%</button></td>
            <td><button className='percentButton'>15%</button></td>
          </tr>
          <tr>
            <td><button className='percentButton'>25%</button></td>
            <td><button className='percentButton'>50%</button></td>
            <td><button className='customButton'>Custom</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SelectTip
