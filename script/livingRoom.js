let livingroom_bigTable

function start_SceneLivingRoom(){
    moveBorder = []
    PressEBorder = []
    WallBorder = [15,85,15,85]

    

    mainCharacter.style("top:55%;left:20%")
    FlashLightWhite_getXY()

    livingroom_bigTable = createImg("image/livingroom_bigTable.png","bed")
    livingroom_bigTable.style("position:absolute;top:30%;left:50%;width:30%;height:30%;");
    livingroom_bigTable.attribute("id","livingroom_bigTable")
    livingroom_bigTable.show()



}