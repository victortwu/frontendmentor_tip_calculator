import React, { useState, useRef } from 'react'
import { ReactComponent as DollarIcon } from './images/icon-dollar.svg'
import { ReactComponent as PersonIcon } from './images/icon-person.svg'
import GrandTotal from './components/GrandTotal'
import './App.css';

function App() {

  const billRef = useRef()
  const pplRef = useRef()
  const customRef = useRef()

  const [totalBill, setTotalBill] = useState(0)
  const [totalPeople, setTotalPeople] = useState(1)
  const [tipEach, setTipEach] = useState(0)
  const [totalEach, setTotalEach] = useState(0)
  const [customTip, setCustomTip] = useState('')

  const [show, setShow] = useState(false)
  const [zero, setZero] = useState(false)


    const calcTip = (pct) => {
        setTipEach((totalBill * pct) / totalPeople)
        setTotalEach((totalBill * (1  + pct)) / totalPeople)
    }



    const handleCustomTip =(e)=> {
        e.preventDefault()
        const pct = customTip * .01
        calcTip(pct)
        setShow(false)
    }


    const reset = () => {
        billRef.current.value = ''
        pplRef.current.value = ''
        customRef.current.value = ''
        setTotalBill(0)
        setTotalPeople(1)
        setCustomTip('')
        setTipEach(0)
        setTotalEach(0)
        setZero(false)
    }


  const toggleModal =  show ? 'show' : 'hide'
  const toggleZeroClass = zero ? 'show' : 'hide'
  const inputBorderStyle = zero ? {border: 'solid 1px red'} : {border: 'none'}

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
              <div className='iconDiv'>
                <DollarIcon/>
              </div>
            </div>

            <div className='selectTipContainer'>
              <span className='selectTipTitle'>Select Tip %</span>

              <div className='percentButtonGrid'>
                    <button onClick={()=> calcTip(.05)} className='percentButton1'>5%</button>
                    <button onClick={()=> calcTip(.10)} className='percentButton2'>10%</button>
                    <button onClick={()=> calcTip(.15)} className='percentButton3'>15%</button>
                    <button onClick={()=> calcTip(.25)} className='percentButton4'>25%</button>
                    <button onClick={()=> calcTip(.50)} className='percentButton5'>50%</button>
                    <div onClick={()=> {setShow(true)}} className='customButton'>Custom</div>

                    <div className={toggleModal}>
                      <form onSubmit={handleCustomTip} className='customTipForm'>
                        <button className='customSubmitButton' type='submit'>Submit Custom %</button>
                        <button className='xButton' onClick={()=> setShow(false)}>X</button>

                          <input  ref={customRef}
                                  type='number'
                                  min='1'
                                  max='99'
                                  placeholder='00%'
                                  value={customTip}
                                  autoFocus
                                  onChange={(e)=> {
                                                  e.preventDefault()
                                                  setCustomTip(e.target.value)
                                                  }}></input>

                      </form>
                    </div>
              </div>

            </div>


            <div className='numOfPeopleContainer'>
              <label>Number of People</label><span className={toggleZeroClass}>Can't be zero</span>
              <input style={inputBorderStyle} ref={pplRef} onChange={(e)=> {
                                      e.preventDefault()
                                      if(e.target.value > 0){
                                        setTotalPeople(e.target.value)
                                        setZero(false)
                                      } else {
                                        setZero(true)
                                      }

                                    }} type='number' min='1' max='25' placeholder='0'></input>
              <div className='iconDiv'>
                  <PersonIcon/>
              </div>
            </div>

          </div>

          <div className='mainRight'>
            <GrandTotal
                totalPeople={totalPeople}
                totalBill={totalBill}
                tipEach={tipEach}
                totalEach={totalEach}
                reset={reset}
                />
          </div>

        </main>

        <div className='attribution'>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
            Coded by <a href="https://victor-twu-portfolio.herokuapp.com/">Victor Twu</a>.
        </div>

    </div>
  );
}

export default App;
