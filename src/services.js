const Service = (() => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q='
  const getData = (location) => {
    fetch(url+`${location}&APPID=94896a8bdcbe02520a271bd7f5a69cd9`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return {getData};

})();

export default Service;
