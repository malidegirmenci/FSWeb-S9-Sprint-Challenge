import React, {useState} from 'react'

// önerilen başlangıç stateleri
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4
 //  "B" nin bulunduğu indexi

export default function AppFunctional(props) {
  // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
  // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [steps, setSteps] = useState(initialSteps)

  function getXY() {
    // Koordinatları izlemek için bir state e sahip olmak gerekli değildir.
    // Bunları hesaplayabilmek için "B" nin hangi indexte olduğunu bilmek yeterlidir.
    
  }

  function getXYMesaj() {
    // Kullanıcı için "Koordinatlar (2, 2)" mesajını izlemek için bir state'in olması gerekli değildir.
    // Koordinatları almak için yukarıdaki "getXY" helperını ve ardından "getXYMesaj"ı kullanabilirsiniz.
    // tamamen oluşturulmuş stringi döndürür.
  }

  function reset() {
    // Tüm stateleri başlangıç ​​değerlerine sıfırlamak için bu helperı kullanın.
    setCurrentIndex(initialIndex);
    setSteps(initialSteps);
  }

  function sonrakiIndex(way) {
    // Bu helper bir yön ("sol", "yukarı", vb.) alır ve "B" nin bir sonraki indeksinin ne olduğunu hesaplar.
    // Gridin kenarına ulaşıldığında başka gidecek yer olmadığı için,
    // şu anki indeksi değiştirmemeli.
    if(way === "right"){
      return !(currentIndex === 2 || currentIndex === 5 || currentIndex === 8) ? currentIndex + 1 : currentIndex;
    }else if(way === "left"){
      return !(currentIndex === 0 || currentIndex === 3 || currentIndex === 6) ? currentIndex - 1 : currentIndex;
    }else if(way === "up"){
      return !(currentIndex === 0 || currentIndex === 1 || currentIndex === 2) ? currentIndex - 3 : currentIndex;
    }else if(way === "down"){
      return !(currentIndex === 6 || currentIndex === 7 || currentIndex === 8) ? currentIndex + 3 : currentIndex;
    }
    console.log("currentIndex:", currentIndex);
  }

  function ilerle(cbfSonrakiIndex) {
    setCurrentIndex(cbfSonrakiIndex)
    setSteps(steps + 1);

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
        <h3 id="coordinates">Koordinatlar (2, 2)</h3>
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
        <h3 id="message"></h3>
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
