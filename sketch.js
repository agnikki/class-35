var gameState=0,playerCount,database;
var form,game,player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20, displayHeight-25);

}

function draw(){
  background("white");
  
    drawSprites();
  
}


