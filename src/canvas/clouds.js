const Clouds = (() => {

  const update = (worldXAngle, worldYAngle, layers) => {
    for (let j = 0; j < layers.length; j += 1) {
      const layer = layers[j];
      layer.data.a += layer.data.speed;
      const t = `translateX( ${layer.data.x}px ) \
        translateY( ${layer.data.y}px ) \
        translateZ( ${layer.data.z}px ) \
        rotateY( ${-worldYAngle}deg ) \
        rotateX( ${-worldXAngle}deg ) \
        scale( ${layer.data.s})`;
      layer.style.transform = t;
    }

    requestAnimationFrame(update);
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomX = (min = -256, max = 256) => getRandomInt(min, max);

  const randomY = (min = -256, max = 256) => getRandomInt(min, max);

  const randomZ = (min = -256, max = 256) => getRandomInt(min, max);

  const randomA = (min = -180, max = 180) => getRandomInt(min, max);

  const randomS = () => Math.random();
  const createCloud = () => {
    const div = document.createElement('div');
    div.className = 'cloudBase';
    var t = `translateX( ${randomX()}px ) \
      translateY( ${randomY()}px ) \
      translateZ( ${randomZ()}px )`;
    div.style.transform = t;
    world.appendChild(div);

    for (let j = 0; j < 4 + Math.round(Math.random() * 10); j += 1) {
      const cloud = document.createElement('img');
      cloud.className = 'cloudLayer';
      cloud.src = '../src/images/cloud.png';

      cloud.data = {
        x: randomX(),
        y: randomY(),
        z: randomZ(),
        a: randomA(),
        s: randomS(),
      };
      var t = `translateX( ${randomX()}px ) \
      translateY( ${randomY()}px ) \
      translateZ( ${randomZ()}px ) \
      rotateZ( ${randomA()}deg ) \
      scale( ${randomS()} )`;
      cloud.style.transform = t;

      div.appendChild(cloud);
    }

    return div;
  };

  const generate = (world, worldXAngle, worldYAngle) => {
    const objects = [];

    if (world.hasChildNodes()) {
      while (world.childNodes.length >= 1) {
        world.removeChild(world.firstChild);
      }
    }

    for (let j = 0; j < 10; j += 1) {
      objects.push(createCloud());
    }

    const nodeList = Array.from(document.querySelectorAll('.cloudLayer'));

    update(worldXAngle, worldYAngle, nodeList);
  };

  return { generate, createCloud };
})();

export default Clouds;
