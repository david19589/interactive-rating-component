import './App.css';
import Header from './components/Header/Header';
import Circles from './components/Circle/Circles';
import Button from './components/Button/Button';
import SecondBox from './components/SecondBox/Secondbox';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(0)
  const arr = [1, 2, 3, 4, 5];

  const [clicked2, setClicked2] = useState(false)
  const handleClick = () => {
    if (clicked !== 0) {
      setClicked2(clicked2 => !clicked2)
    } else {
      return;
    }
  }

  return (
    <div className='container'>
      <div className={`${clicked2 ? "box2" : "box"}`}>
        <Header />

        <div className="num-div">
          {arr.map((item) => {
            return (
              <Circles onClick={() => setClicked(item)} className={`${clicked === item ? "circle-clicked" : "num"}`} key={item} number={item} clicked={clicked} />
            );
          })}

        </div>

        <Button onClick={handleClick} className={`${clicked2 ? "btn-clicked" : "submit"}`} />
      </div>
      <div className={`${clicked2 ? "box" : "box2"}`}>
        <SecondBox result={clicked} />
      </div>
    </div>
  );
}

export default App;
