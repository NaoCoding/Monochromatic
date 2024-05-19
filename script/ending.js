

function start_sceneEnding(){
    ColorStatus = 3
    ScreenNow = 4
    BGM()

    hideLivingRoom()
    hideParentRoom()
    hideBedRoom()
    RoomWall.hide()

    FlashLightRed.hide()
    FlashLightWhite.hide()
    FlashLightYellow.hide()

    ending_background = createImg("image/ending_background.png","ending")
    ending_background.style("position:absolute;width:100%;height:100%;top:0%;left:0%")
    ending_background.style("zIndex:1000000")
    


}