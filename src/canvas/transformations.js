import Clouds from './clouds';

const Transform = (() => {

    const initializeTranformations = () => {

      let world = document.getElementById( 'world' );
      let viewport = document.getElementById( 'viewport' );
      let worldXAngle = 0;
      let worldYAngle = 0;
      let d = 0;

      Clouds.generate(world, worldXAngle, worldYAngle);
    }
    return {initializeTranformations}
})();

export default Transform;
