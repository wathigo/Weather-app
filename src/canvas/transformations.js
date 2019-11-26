import Clouds from './clouds';

const Transform = (() => {
  const initializeTranformations = () => {
    const world = document.getElementById('world');
    const viewport = document.getElementById('viewport');
    const worldXAngle = 0;
    const worldYAngle = 0;
    const d = 0;

    Clouds.generate(world, worldXAngle, worldYAngle);
  };
  return { initializeTranformations };
})();

export default Transform;
