class Game {
  constructor() {

  }

  start() {
    player = new Player();
    playerCount = player.getCount()
    form = new Form();
    form.display();
   
  }
  getState() {
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value", (data) => {
      gameState = data.val()
    })
  }
  updateState(state) {
   database.ref("/").update({
    gameState: state 
   })
  }
}

