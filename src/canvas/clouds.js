const Clouds = (() => {
  /*
    objects is an array of cloud bases
    layers is an array of cloud layers
  */
  const objects = [];
  const layers = [];

  /*
    Clears the DOM of previous clouds bases
    and generates a new set of cloud bases
  */

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

  const generate = (world, worldXAngle, worldYAngle) => {
    const objects = [];

    if (world.hasChildNodes()) {
      while (world.childNodes.length >= 1) {
        world.removeChild(world.firstChild);
      }
    }

    for (let j = 0; j < 10; j++) {
      objects.push(createCloud());
    }
    const layers = document.querySelectorAll('.cloudLayer');

    const nodeList = Array.from(layers);
    console.log(typeof nodeList);

    update(worldXAngle, worldYAngle, nodeList);
  };

  /*
    Creates a single cloud base: a div in world
    that is translated randomly into world space.
    Each axis goes from -256 to 256 pixels.
  */

  const random_x = (min = -256, max = 256) => getRandomInt(min, max);

  const random_y = (min = -256, max = 256) => getRandomInt(min, max);

  const random_z = (min = -256, max = 256) => getRandomInt(min, max);

  const random_a = (min = -180, max = 180) => getRandomInt(min, max);

  const random_s = () => Math.random();
  const createCloud = () => {
    const div = document.createElement('div');
    div.className = 'cloudBase';
    var t = `translateX( ${random_x()}px ) \
      translateY( ${random_y()}px ) \
      translateZ( ${random_z()}px )`;
    div.style.transform = t;
    world.appendChild(div);

    for (let j = 0; j < 4 + Math.round(Math.random() * 10); j++) {
      const cloud = document.createElement('img');
      cloud.className = 'cloudLayer';
      cloud.src = '../src/images/cloud.png';

      cloud.data = {
        x: random_x(),
        y: random_y(),
        z: random_z(),
        a: random_a(),
        s: random_s(),
      };
      var t = `translateX( ${random_x()}px ) \
      translateY( ${random_y()}px ) \
      translateZ( ${random_z()}px ) \
      rotateZ( ${random_a()}deg ) \
      scale( ${random_s()} )`;
      cloud.style.transform = t;

      div.appendChild(cloud);
      layers.push(cloud);
    }

    return div;
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return { generate, createCloud };
})();

export default Clouds;
