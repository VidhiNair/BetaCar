class Game{
   constructor(){

   }

 getState(){
var gameStateRef = database.ref("GameState") 
gameStateRef.on("value",function(data){GameState = data.val()})
}
update(state){
    database.ref('/').update({GameState:state})
}
async start(){
if(GameState === 0){
  player = new Player()
  var playerCountRef = await database.ref("PlayerCount").once("value")
  if(playerCountRef.exists()){
    PlayerCount = playerCountRef.val()
    player.getCount()
  }
  form = new Form()
  form.display()
}
}
play(){
  form.hide();
  textSize(25)
  text("Game Starting!",250,250)
  player.getInfo()
  if(allPlayers !== undefined){
    var display_position = 130
    for(var plr in allPlayers){
      if(plr === "player" + player.index)
      fill("red")
      else{
        fill("black")
      }
    display_position = display_position + 20
    textSize(15)
    text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_position)

  }}
  if(keyIsDown(UP_ARROW) && player.index !== null){
  player.distance = player.distance + 50
  player.update()
}
}
}