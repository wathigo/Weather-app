import Service from './services';
import Snow from './canvas/snow';

const DomManger = (() => {

    const startApp = () => {
      Snow.startSnowing();
      Service.getData('London,uk');
    }

    return {startApp}

  })();

export default DomManger;
