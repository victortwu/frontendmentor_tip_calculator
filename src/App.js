import TotalBill from './components/TotalBill'
import SelectTip from './components/SelectTip'
import NumOfPeople from './components/NumOfPeople'
import GrandTotal from './components/GrandTotal'
import './App.css';

function App() {
  return (
    <div className="App">

    <div id='appTitle'>
      <span>SPLI</span>
      <span>TTER</span>
    </div>

    <main className='calculatorContainer'>
      <div className='mainLeft'>
        <TotalBill/>
        <SelectTip/>
        <NumOfPeople/>
      </div>
      <div className='mainRight'>
        <GrandTotal/>
      </div>
      <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
    </div>
  );
}

export default App;
