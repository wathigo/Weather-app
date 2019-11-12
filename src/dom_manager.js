import Service from './services';
import Snow from './canvas/snow';

const DomManger = (() => {

  const defaultLocation = 'London,uk';

    const startApp = () => {
      Snow.startSnowing();
      Service.getData(defaultLocation);
    }

    return {startApp}

  })();

export default DomManger;
