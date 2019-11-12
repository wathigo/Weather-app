const rain = () => {
  const startRaining = () => {
    const image = document.getElementById('background');
    image.onload = () => {
        let engine = new RainyDay({
            image: this
        });
        engine.rain([
            [3, 2, 2]
        ], 100);
    };
    image.crossOrigin = 'anonymous';
    image.src = 'http://i.imgur.com/U1Tqqdw.jpg';
  }
}
