import Raining from './rainyday';

const Rainy = (() => {

  const startRaining = () => {
    let imageUrl = 'https://i.imgur.com/wvErRZP.jpg';
    let image = new Image;
    image.crossOrigin = "Anonymous";
    image.classList.add('background')
    image.onload = function () {
					var engine = new Raining.RainyDay({
						image: image
					});
					engine.rain([
						[0, 2, 200],
						[3, 3, 1]
					], 100);
				};
        image.src = imageUrl
  };


  return {startRaining}
})();

export default Rainy;
