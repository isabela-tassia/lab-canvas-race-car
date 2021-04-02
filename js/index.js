const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
let car;
  function startGame() {
    // const img = new Image();
    // const car = new Image();
    // car.src = `./images/car.png`;
    // img.src = `./images/road.png`;
    // img.onload = () => {
    //   ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    //   ctx.drawImage(car, 225, 620, 50, 80);
//     };
// };()
  car = new Component(30, 30, "grey", 10, 120);
}



  // class Car {
  //   constructor() {
  //     this.img = ``;
  //     this.width = 50;
  //     this.height = 80;
  //     this.x = ctx.canvas.width / 2 - 25;
  //     this.y = ctx.canvas.height - 120;
  //     this.direction = ``;
  //   }

  //   renderImage() {
  //     this.img = new Image();
  //     this.img.src = `/images/car.png`;
  //     this.img.onload = () => {
  //       this.drawSelf();
  //     };
  //   }
    
  // }
};
