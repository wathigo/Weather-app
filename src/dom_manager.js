import Service from './services';

const DomManger = (() => {

    const startApp = () => {
      Service.getData('London,uk');
    }

    return {startApp}

  })();

export default DomManger;
