const Snow = (() => {
  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');
  const particlesCount = 246;
  const particleArray = [];
  let width; let
    height;
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  const random = (min, max) => min + Math.random() * (max - min + 1);

  const resizeCanvas = (evt) => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', (evt) => {
    resizeCanvas(evt);
  });

  const createSnowFlakes = () => {
    let i = 0;
    while (i < particlesCount) {
      particleArray.push({
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random(),
        speedX: random(-11, 11),
        speedY: random(1, 5),
        radius: random(0.2, 2.2),
      });
      i += 1;
    }
  };

  const drawSnowFlakes = () => {
    let i = 0;
    while (i < particleArray.length) {
      const gradient = context.createRadialGradient(
        particleArray[i].x,
        particleArray[i].y,
        0,
        particleArray[i].x,
        particleArray[i].y,
        particleArray[i].radius
      );

      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3');
      // gradient.addColorStop(.8, 'rgba(210, 236, 242,' + particleArray[i].opacity + ')');
      // gradient.addColorStop(1, 'rgba(237, 247, 249,' + particleArray[i].opacity + ')');


      context.beginPath();
      context.arc(
        particleArray[i].x,
        particleArray[i].y,
        particleArray[i].radius,
        0,
        Math.PI * 2,
        false,
      );
      context.fillStyle = gradient;
      context.fill();
      i += 1;
    }
  };

  const moveFlakes = () => {
    let i = 0;
    while (i < particleArray.length) {
      particleArray[i].x += particleArray[i].speedX;
      particleArray[i].y += particleArray[i].speedY;

      if (particleArray[i].y > height) {
        particleArray[i].x = Math.random() * width * 1.5;
        particleArray[i].y = -50;
      }
      i += 1;
    }
  };

  const clearCanvas = () => {
    context.clearRect(0, 0, width, height);
  };

  const updateSnowFlakes = () => {
    clearCanvas();
    drawSnowFlakes();
    moveFlakes();
  };


  const startSnowing = () => {
    setInterval(updateSnowFlakes, 50);
    createSnowFlakes();
  };

  return { startSnowing, clearCanvas };
})();

export default Snow;
