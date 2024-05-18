function safeBoxSetup() {
  MoveBorder.push("safeBox"); // 各個物件
  //   RoomWall = createImg("image/white_background.png", "RoomWall");
  //   RoomWall.style("position:absolute;top:15%;left:15%;width:70%;height:70%;");
  //   RoomWall.style("borderStyle: solid; borderWidth: 2px;");
  //   RoomWall.style("zIndex:-1");
  //   RoomWall.show();

  safeBox = createImg("image/safeBox_img.png", "safeBox");
  safeBox.style("position:absolute;top:15%;left:30%;width:12%;height:15%;");
  safeBox.attribute("id", "safeBox");
  safeBox.show();

  //   inventoryButton.show();
  //   colorButton.show();
}

function safeBoxTrigger() {
  dialogBox.show();
}
