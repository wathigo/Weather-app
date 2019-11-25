import Service from './services';
import Snow from './canvas/snow';
import Rainy from './canvas/rainy';
import Transform from './canvas/transformations';

const DomManger = (() => {

  const rain = /RAIN/g;
  const drizzle = /DRIZZLE/g;
  const wind = /WIND/g;
  const sun = /SUN/g;
  const clouds = /CLOUDS/g;
  const clear = /CLEAR/g;

  const defaultLocation = 'London,uk';
  let currentData = '';

  const checkRain = (str) => {
    return str.toUpperCase().match(rain) || str.toUpperCase().match(drizzle);
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

  const clearSky = (str) => {
    return str.toUpperCase().match(clear);
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
    const handleEvent = () => {
      let location = document.querySelector('#location').value;
      Service.getData(location)
    }

    const startApp = () => {
      Service.getData(defaultLocation);
      document.querySelector('#search').addEventListener('click', () => {
        handleEvent();
      })
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
        document.querySelector('.snow').style.display = 'none';
        document.querySelector('body').backgroundImage = 'none';
        Transform.initializeTranformations();
        document.querySelectorAll('.cloudLayer').forEach(node => {
          node.classList.add('.wind-rotation');
        })
      }else if(checkSun(main)){
        document.querySelector('.snow').style.display = 'none';
        document.querySelector('rainy-canvas').style.display = 'none';
        document.querySelector('body').backgroundImage = 'url(./images/sunny.jpeg)';
      }else if(checkClouds(main)){
        console.log('clouds@')
        document.querySelector('.snow').style.display = 'none';
        document.querySelector('body').backgroundImage = 'none';
        document.querySelector('#rainy-canvas').style.display = 'none';
        document.querySelectorAll('.cloudLayer').forEach(node => {
          node.style.display = 'block';
        })
        Transform.initializeTranformations();
      }else {
        document.querySelector('.snow').style.display = 'none';
        document.querySelector('body').backgroundImage = 'none';
        document.querySelector('#rainy-canvas').style.display = 'none';
        document.querySelectorAll('.cloudLayer').forEach(node => {
          node.style.display = 'none';
        })

      }
      startTime();
    }

    return {startApp, currentJsonData}

  })();

export default DomManger;
