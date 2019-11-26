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
  const snow = /SNOW/g;
  const mist = /MIST/g;
  const fog = /FOG/g;
  const errMsg = document.querySelector('.errmsg');

  const defaultLocation = 'London,uk';

  const checkRain = (str) => str.toUpperCase().match(rain) || str.toUpperCase().match(drizzle);

  const checkWind = (str) => str.toUpperCase().match(wind);

  const checkSun = (str) => str.toUpperCase().match(sun);

  const checkClouds = (str) => str.toUpperCase().match(clouds);

  const clearSky = (str) => str.toUpperCase().match(clear);

  const checkSnow = (str) => str.toUpperCase().match(snow) || str.toUpperCase().match(mist) || str.toUpperCase().match(fog);

  const checkTime = (i) => {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  };

  const startTime = () => {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.currenttime').innerHTML = `${h}:${m}:${s}`;
    setTimeout(() => {
      startTime();
    }, 500);
  };
  const handleEvent = () => {
    const location = document.querySelector('#location').value;
    Service.getData(location, errMsg);
  };

  const startApp = () => {
    Service.getData(defaultLocation, errMsg);
    document.querySelector('#search').addEventListener('click', () => {
      handleEvent();
    });
    Snow.startSnowing();
  };

  const currentJsonData = (data) => {
    if ((typeof data) === 'number') {
      const temp = `${document.querySelector('.temp').textContent}  ${data}F`;
      document.querySelector('.temp').textContent = temp;
    } else {
      const { main } = data.weather[0];
      document.querySelector('.location').textContent = data.name;
      document.querySelector('.description').textContent = data.weather[0].description;
      document.querySelector('.temp').textContent = `${data.main.temp}°c`;
      if (checkRain(main)) {
        document.querySelector('.snow').style.display = 'none';
        document.querySelector('body').backgroundImage = 'none';
        Rainy.startRaining();
      } else if (checkWind(main)) {
        document.querySelector('.snow').style.display = 'none';
        document.querySelector('body').backgroundImage = 'none';
        Transform.initializeTranformations();
        document.querySelectorAll('.cloudLayer').forEach((node) => {
          node.classList.add('.wind-rotation');
        });
      } else if (checkSun(main)) {
        if (document.querySelector('.snow') !== null) {
          document.querySelector('.snow').style.display = 'none';
        }
        if (document.querySelector('#rainy-canvas') !== null) {
          document.querySelector('#rainy-canvas').style.display = 'none';
        }
        document.querySelector('body').backgroundImage = 'url(./images/sunny.jpeg)';
      } else if (checkClouds(main)) {
        if (document.querySelector('.snow') !== null) {
          document.querySelector('.snow').style.display = 'none';
        }
        if (document.querySelector('#rainy-canvas') !== null) {
          document.querySelector('#rainy-canvas').style.display = 'none';
        }
        document.querySelector('body').backgroundImage = 'none';
        document.querySelectorAll('.cloudLayer').forEach((node) => {
          node.style.display = 'block';
        });
        Transform.initializeTranformations();
      } else if (clearSky(main)) {
        if (document.querySelector('.snow') !== null) {
          document.querySelector('.snow').style.display = 'none';
        }
        document.querySelector('body').backgroundImage = 'none';
        if (document.querySelector('#rainy-canvas') !== null) {
          document.querySelector('#rainy-canvas').style.display = 'none';
        }
        document.querySelectorAll('.cloudLayer').forEach((node) => {
          node.style.display = 'none';
        });
      } else {
        if (document.querySelector('#rainy-canvas') !== null) {
          document.querySelector('#rainy-canvas').style.display = 'none';
        }
        document.querySelectorAll('.cloudLayer').forEach((node) => {
          node.style.display = 'none';
        });

        document.querySelector('body').backgroundImage = 'url(./images/bg.jpg)';
        document.querySelector('.snow').style.display = 'block';
      }
    }

    startTime();
  };

  return { startApp, currentJsonData };
})();

export default DomManger;
