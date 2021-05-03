var database
var canvas
var gameState=0
var playerCount
var form
var game
var player
var distance = 0
var allPlayers
function setup(){
    canvas=createCanvas(400,400)
    database = firebase.database()
    console.log(database)
    game=new Game()
game.getState()
game.start()
}

function draw(){
if(playerCount === 4){
game.update(1)
}
  if(gameState === 1){
clear()
game.play()

  }
}
