console.log("working");

//Declare the variables
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;

function preload() {
    game.load.image("sky", "assets/sky.png");
    game.load.image("ground", "assets/platform.png");
}

function create() {
    // Give game physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the sky
    game.add.sprite(0, 0, "sky");

    //Physics group
    platforms = game.add.physicsGroup();
    platforms.enableBody = true;

    // Ground
    var ground = platforms.create(0, game.world.height - 64, "ground");
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;

    //Ledges
    var ledge = platforms.create(400, 400, "ground");
    ledge.body.immovable = true;
    var ledge = platforms.create(-150, 250, "ground");
    ledge.body.immovable = true;

}

function update() {

}
