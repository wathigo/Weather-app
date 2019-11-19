import Raining from './rainyday';

const Rainy = (() => {

  const startRaining = () => {
    const image = document.querySelector('#background');
    image.crossOrigin = "Anonymous";
    console.log('loaded!')
		var engine = new Raining.RainyDay({
			image: image
		});
		engine.rain([
			[0, 2, 200],
			[3, 3, 1]
		], 100);

  };


  return {startRaining}
})();

export default Rainy;
