import React, { useState, useRef } from 'react'
import GrandTotal from './components/GrandTotal'
import './App.css';

function App() {

  const billRef = useRef()
  const pplRef = useRef()
  const customRef = useRef()

  const [totalBill, setTotalBill] = useState(null)
  const [totalPeople, setTotalPeople] = useState(1)
  const [tip, setTip] = useState(null)
  const [total, setTotal] = useState(null)
  const [tipEach, setTipEach] = useState(0)
  const [totalEach, setTotalEach] = useState(0)
  const [customTip, setCustomTip] = useState(null)
  const [show, setShow] = useState(false)


  const calcTip = (percent) => {
    const tempTip = totalBill * percent
    const tempTotal = totalBill * (1  + percent)
    setTip(tempTip)
    setTotal(tempTotal)
    setTipEach(tempTip / totalPeople)
    setTotalEach(tempTotal / totalPeople)
  }



  const handleCustomTip =(e)=> {
      e.preventDefault()
      const percent = customTip * .01
      calcTip(percent)
      setShow(false)
  }

  const reset = () => {
    billRef.current.value = ''
    pplRef.current.value = ''
    customRef.current.value = ''
    setTotalBill(0)
    setTotalPeople(1)
    setTip(0)
    setTotal(0)
    setCustomTip(null)
    setTipEach(0)
    setTotalEach(0)
  }


  const toggleModal =  show ? 'show' : 'hide'
  console.log(totalBill)
  console.log(totalPeople)
  console.log(`Tip: ${tip}, Total with tip: ${total}`)
  console.log(`Tip each: ${tipEach}, Total each: ${totalEach}`)

  return (
    <div className="App">

    <div id='appTitle'>
      <span>SPLI</span>
      <span>TTER</span>
    </div>

    <main className='calculatorContainer'>
      <div className='mainLeft'>

        <div className='totalBillContainer'>
          <label htmlFor='bill'>Bill</label>
          <input ref={billRef} onChange={(e)=> {
                                  e.preventDefault()
                                  setTotalBill(e.target.value)
                                }} id='bill' type='number' placeholder='0' autoFocus></input>
        </div>

        <div className='selectTipContainer'>
          <span className='selectTipTitle'>Select Tip %</span>
          <table className='buttonsTable'>
            <tbody>
              <tr>
                <td><button onClick={()=> calcTip(.05)} className='percentButton'>5%</button></td>
                <td><button onClick={()=> calcTip(.10)} className='percentButton'>10%</button></td>
                <td><button onClick={()=> calcTip(.15)} className='percentButton'>15%</button></td>
              </tr>
              <tr>
                <td><button onClick={()=> calcTip(.25)} className='percentButton'>25%</button></td>
                <td><button onClick={()=> calcTip(.50)} className='percentButton'>50%</button></td>
                <td><button onClick={()=> {
                                            setShow(true)

                                          }} className='customButton'>Custom</button></td>
              </tr>
            </tbody>
          </table>
          <div className={toggleModal}>
            <form onSubmit={handleCustomTip} className='customTipForm'>
              <label>Custom Tip %</label>
              <input  ref={customRef}
                      type='number'
                      min='1'
                      max='99'
                      placeholder='00%'
                      value={customTip}
                      onChange={(e)=> {
                                      e.preventDefault()
                                      setCustomTip(e.target.value)
                                      }}></input>
              <button type='submit'>SUBMIT</button>
              <button className='xButton' onClick={()=> setShow(false)}>X</button>
            </form>
          </div>
        </div>


        <div className='numOfPeopleContainer'>
          <label htmlFor='numPpl'>Number of People</label>
          <input ref={pplRef} onChange={(e)=> {
                                  e.preventDefault()
                                  setTotalPeople(e.target.value)
                                }} id='numPpl' type='number' min='1' max='25' placeholder='0'></input>
        </div>

      </div>
      <div className='mainRight'>
        <GrandTotal tipEach={tipEach} totalEach={totalEach} reset={reset}/>
      </div>
      <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://victor-twu-portfolio.herokuapp.com/">Victor Twu</a>.
      </div>
    </main>

    </div>
  );
}

export default App;
