import Service from './services';
import Snow from './canvas/snow';

const DomManger = (() => {

  const defaultLocation = 'London,uk';
  let currentData = '';

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
      document.querySelector('.location').textContent = data.name;
      document.querySelector('.description').textContent = data.weather[0].description;
      document.querySelector('.temp').textContent = data.main.temp + '°c';
      startTime();
    }

    return {startApp, currentJsonData}

  })();

export default DomManger;
