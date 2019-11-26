import DomManger from './dom_manager';

const Service = (() => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  let currentData;

  const getData = (location, errMsg) => {
    fetch(`${url}${location}&APPID=94896a8bdcbe02520a271bd7f5a69cd9&units=Metric`)
      .then(response => response.json())
      .then((data) => {
        DomManger.currentJsonData(data);
        getDataF(location)
      })
      .catch((err) => {
        errMsg.style.display = 'block';
        setTimeout(() => {
          errMsg.style.display = 'none';
        }, 800);
      });
  };

  const getDataF = (location) => {
    fetch(`${url}${location}&APPID=94896a8bdcbe02520a271bd7f5a69cd9&units=imperial`)
      .then((response) => response.json())
      .then((data) => { DomManger.currentJsonData(data.main.temp); })
      .catch((err) => console.log(err));
  };

  return { getData, currentData, getDataF };
})();

export default Service;
