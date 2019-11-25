import Service from './services';
import Snow from './canvas/snow';
import Rainy from './canvas/rainy';
import Transform from './canvas/transformations';

const DomManger = (() => {

  const rain = /RAIN/g;
  const wind = /WIND/g;
  const sun = /SUN/g;
  const clouds = /CLOUDS/g;

  const defaultLocation = 'London,uk';
  let currentData = '';

  const checkRain = (str) => {
    return str.toUpperCase().match(rain);
  }

  const checkWind = (str) => {
    return str.toUpperCase().match(wind)
  }

  const checkSun = (str) => {
    return str.toUpperCase().match(sun)
  }

  const checkClouds = (str) => {
    return str.toUpperCase().match(clouds);
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
      if(checkRain(main)){
        document.querySelector('.snow').style.display = 'none';
        document.querySelector('body').backgroundImage = 'none';
        Rainy.startRaining();
      }else if(checkWind(main)){

      }else if(checkSun(main)){

      }else if(checkClouds(main)){
        document.querySelector('.snow').style.display = 'none';
        document.querySelector('body').backgroundImage = 'none';
        Transform.initializeTranformations();
      }
      startTime();
    }

    return {startApp, currentJsonData}

  })();

export default DomManger;
