const game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update,
});

function preload() {
  //This is what loads before the game starts. There might be ways around this but this is how we can start
  game.load.image("background", "/images/backdrop1.png");
  game.load.image("gem", "/images/gem1.png");
  game.load.image("platform", "/images/block1.png");
  game.load.spritesheet("player", "/images/ball.png"); //This is the player
}
function create() {}
function update() {}
