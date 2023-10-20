import React, {useState} from 'react'

// önerilen başlangıç stateleri
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4

export default function AppFunctional(props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [steps, setSteps] = useState(initialSteps)
  const [message, setMessage] = useState(initialMessage)

  function getXY(paramCurrentIndex) {
    let x = "";
    let y = "";
    if(paramCurrentIndex === 0 || paramCurrentIndex === 1 || paramCurrentIndex === 2){
      x = "1";
    }else if(paramCurrentIndex === 3 || paramCurrentIndex === 4 || paramCurrentIndex === 5){
      x = "2";
    }else if(paramCurrentIndex === 6 || paramCurrentIndex === 7 || paramCurrentIndex === 8){
      x = "3";
    }
    if(paramCurrentIndex === 0 || paramCurrentIndex === 3 || paramCurrentIndex === 6){
      y = "1";
    }else if(paramCurrentIndex === 1 || paramCurrentIndex === 4 || paramCurrentIndex === 7){
      y = "2";
    }else if(paramCurrentIndex === 2 || paramCurrentIndex === 5 || paramCurrentIndex === 8){
      y = "3";
    }
    return `${x}, ${y}`
  }

  function getXYMesaj(cbfGetXY) {
    return `Koordinatlar (${cbfGetXY})`
  }

  function reset() {
    setCurrentIndex(initialIndex);
    setSteps(initialSteps);
    setMessage(initialMessage);
  }

  function sonrakiIndex(way) {
    if(way === "right"){
      if(!(currentIndex === 2 || currentIndex === 5 || currentIndex === 8)){
        setSteps(steps + 1);
        return  currentIndex + 1;
      }else{
        setMessage("You can't go right")
        return  currentIndex;
      }
    }else if(way === "left"){
      if(!(currentIndex === 0 || currentIndex === 3 || currentIndex === 6)){
        setSteps(steps + 1);
        return currentIndex - 1;
      }else{
        setMessage("You can't go left")
        return currentIndex;
      }
    }else if(way === "up"){
      if(!(currentIndex === 0 || currentIndex === 1 || currentIndex === 2)){
        setSteps(steps + 1);
        return  currentIndex - 3;
      }else{
        setMessage("You can't go up")
        return currentIndex
      }
    }else if(way === "down"){
      if(!(currentIndex === 6 || currentIndex === 7 || currentIndex === 8)){
        setSteps(steps + 1);
        return currentIndex + 3;
      }else{
        setMessage("You can't go down")
        return currentIndex
      }
    }
  }

  function ilerle(cbfSonrakiIndex) {
    setCurrentIndex(cbfSonrakiIndex)
    
  }

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
  }

  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMesaj(getXY(currentIndex))}</h3>
        <h3 id="steps">{steps} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === currentIndex ? ' active' : ''}`}>
              {idx === currentIndex ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={()=> ilerle(sonrakiIndex("left"))}>SOL</button>
        <button id="up" onClick={()=> ilerle(sonrakiIndex("up"))} >YUKARI</button>
        <button id="right" onClick={ ()=>  ilerle(sonrakiIndex("right"))}>SAĞ</button>
        <button id="down" onClick={ ()=>  ilerle(sonrakiIndex("down"))}>AŞAĞI</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="email girin"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
