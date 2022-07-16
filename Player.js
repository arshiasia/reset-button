class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
getCount(){
var PlayerRef=database.ref("playerCount");
 PlayerRef.on("value",data=>
{
  PlayerCount=data.val()
})
}
UpdateCount(count)
{
  database.ref("/").update({
    playerCount:count
  })
}
}
