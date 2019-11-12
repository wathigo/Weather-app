import Service from './services';
import Snow from './canvas/snow';
import Rainy from './canvas/rainy'

const DomManger = (() => {

  const acceptedwords = /RAIN/g

  const defaultLocation = 'London,uk';
  let currentData = '';

  const checkRain = (str) => {
    return str.toUpperCase().match(acceptedwords)
  }
  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const startTime = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.currenttime').innerHTML = h + ":" + m + ":" + s;
    setTimeout(function() {
      startTime()
      }, 500);
    }

    const startApp = () => {
      Service.getData(defaultLocation);
      Snow.startSnowing();
    }

    const currentJsonData = (data) => {
      console.log(data);
      let main = data.weather[0].main;
      document.querySelector('.location').textContent = data.name;
      document.querySelector('.description').textContent = data.weather[0].description;
      document.querySelector('.temp').textContent = data.main.temp + '°c';
      if((checkRain(main))){
        console.log("True");
        document.querySelector('canvas').style.display = 'none';
        Rainy.startRaining();
      }
      startTime();
    }

    return {startApp, currentJsonData}

  })();

export default DomManger;
