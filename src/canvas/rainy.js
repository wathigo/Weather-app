import Raining from './rainyday';

const Rainy = (() => {

  const startRaining = () => {
    const imageEl = document.querySelector('body');
    imageEl.crossOrigin = 'anonymous';
    console.log('loaded!')
		var engine = new Raining.RainyDay({
			image: imageEl
		});
		engine.rain([
			[0, 2, 200],
			[3, 3, 1]
		], 100);
    };

  return {startRaining}
})();

export default Rainy;
