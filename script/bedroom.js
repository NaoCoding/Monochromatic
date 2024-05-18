let bedroom_Bed
function start_SceneBedroom() {
    MoveBorder = ["bedroom_Bed"]; // 各個物件
    WallBorder = [15,85,15,85] // 牆壁
    RoomWall = createImg("image/white_background.png", "RoomWall");
    RoomWall.style("position:absolute;top:15%;left:15%;width:70%;height:70%;");
    RoomWall.style("borderStyle:solid;borderWidth:2px;");
    RoomWall.style("zIndex:-1");
    RoomWall.show();

    bedroom_Bed = createImg("image/bedroom_bed.png","bed")
    bedroom_Bed.style("position:absolute;top:15%;left:15%;width:12%;height:30%;");
    bedroom_Bed.attribute("id","bedroom_Bed")
    bedroom_Bed.show()

  
    inventoryButton.show();
    colorButton.show();
  }