var ship,shipImage
var sea,seaImage
function preload(){
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 sea = createSprite(100,100)
 sea.addImage(seaImage)
  ship = createSprite(200,200)
  ship.addAnimation("shipmoving",shipImage)
ship.scale = 0.25
}

function draw() {
  background("blue");
 drawSprites()
}