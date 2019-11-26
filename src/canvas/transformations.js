import Clouds from './clouds';

const Transform = (() => {
  const initializeTranformations = () => {
    const world = document.getElementById('world');
    const worldXAngle = 0;
    const worldYAngle = 0;

    Clouds.generate(world, worldXAngle, worldYAngle);
  };
  return { initializeTranformations };
})();

export default Transform;
