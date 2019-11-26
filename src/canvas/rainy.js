import Raining from './rainyday';

const Rainy = (() => {
  const startRaining = () => {
    const imageUrl = 'https://i.imgur.com/wvErRZP.jpg';
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function () {
      const engine = new Raining.RainyDay({
        image,
        blur: 0,
      });
      engine.rain([
        [3, 3, 0.1],
      ], 33);
    };
    image.src = imageUrl;
  };


  return { startRaining };
})();

export default Rainy;
