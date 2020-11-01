class ex1 extends Phaser.Scene {
  constructor() {
    super({ key: ex1 }); //This is calling the in javascript
  }

  preload() {
    this.load.image("GFS", "images/gem1.jpg");
  }

  create() {
    this.image = this.add.image(400, 300, "GFS");
  }
}
