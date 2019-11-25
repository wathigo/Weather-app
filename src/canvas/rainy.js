import Raining from './rainyday';

const Rainy = (() => {

  const startRaining = () => {
    let imageUrl = 'https://i.imgur.com/wvErRZP.jpg';
    let image = new Image;
    image.crossOrigin = "Anonymous";
    image.onload = function () {
					var engine = new Raining.RainyDay({
						image: image,
            blur: 0
					});
          engine.rain([
            [3, 3, 0.1]
            ], 33);
				};
        image.src = imageUrl
  };


  return {startRaining}
})();

export default Rainy;
