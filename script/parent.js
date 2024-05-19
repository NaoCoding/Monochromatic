let parent_bigBed,parent_smallBed
let parent_doll,parent_photo_label
let parent_closet,parent_door

function parent_doorDialogBox(){

    isControlingCharacter = 0
    showLivingRoom()
    ScreenNow = 2
    mainCharacter.style("top:20%;left:70%")
    FlashLightWhite_getXY()
    bedroomKeyState = 0;
    MoveBorder = ["livingroom_bigTable","livingroom_door2bed","livingroom_door2outside","livingroom_door2parent"
                    ,"livingroom_flower","livingroom_knife","livingroom_photo","livingroom_sova",
                        "livingroom_tv"]
    PressEBorder = [0,1,2,3,4,5,6,7,8]

    hideParentRoom()
    isControlingCharacter = 1

}


function parent_dollDialogBox(){

}






function hideParentRoom(){

    parent_bigBed.hide()
    parent_smallBed.hide()
    parent_doll.hide()
    parent_photo_label.hide()
    parent_closet.hide()
    parent_door.hide()

}



function showParentRoom(){

    parent_bigBed.show()
    parent_smallBed.show()
    parent_doll.show()
    parent_photo_label.show()
    parent_closet.show()
    parent_door.show()

}

async function UnlockYellow(){

    isControlingCharacter = 0
    

    ColorStatus = 2
    UnlockedStatus = 2
    flash_idx = 2
    FlashLightWhite_getXY()
    fadeOutAnimation(35);
    await delay(1500);
    document.body.style.opacity = 1
    dialogBox.show()
    FlashLightWhite.hide()
    FlashLightRed.show()
    dialogBoxFunction("What happened !?")
    await delay(2000)
    fadeOutAnimation(25);
    FlashLightWhite.show()
    FlashLightRed.hide()
    dialogBox.hide()
    await delay(1000);
    FlashLightRed.hide()
    FlashLightYellow.show()
    fadeInAnimation(25);
    await delay(1000);
    FlashLightWhite.show()
    FlashLightYellow.hide()
    fadeOutAnimation(25);
    await delay(1000);
    FlashLightWhite.hide()
    FlashLightYellow.show()
    
    fadeInAnimation(25);
    await delay(1250);
    
    isControlingCharacter = 1

}

function start_SceneParentRoom(){

    ScreenNow = 3
    mainCharacter.style("top:60%;left:70%")
    FlashLightWhite_getXY()

    MoveBorder = ["parent_bigBed","parent_smallBed","parent_doll","parent_photo_label"
                    ,"parent_closet","parent_door"]
    PressEBorder = [0,1,2,3,4,5]

    parent_bigBed = createImg("image/parent_bigBed.png","bed")
    parent_bigBed.style("position:absolute;top:15%;left:15%;width:20%;height:25%;");
    parent_bigBed.attribute("id","parent_bigBed")
    parent_bigBed.show()

    parent_smallBed = createImg("image/parent_smallBed.png","bed")
    parent_smallBed.style("position:absolute;top:50%;left:15%;width:17%;height:25%;");
    parent_smallBed.attribute("id","parent_smallBed")
    parent_smallBed.show()

    parent_closet = createImg("image/bedroom_closet.png","bed")
    parent_closet.style("position:absolute;top:75%;left:40%;width:20%;height:10%;");
    parent_closet.attribute("id","parent_closet")
    parent_closet.show()

    parent_doll = createImg("image/parent_doll.png","bed")
    parent_doll.style("position:absolute;top:15%;left:55%;width:20%;height:30%;");
    parent_doll.attribute("id","parent_doll")
    parent_doll.show()

    parent_photo_label = createImg("image/parent_photo_label.png","bed")
    parent_photo_label.style("position:absolute;top:47%;left:82%;width:3%;height:15%;");
    parent_photo_label.attribute("id","parent_photo_label")
    parent_photo_label.show()

    parent_door = createImg("image/livingroom_door2outside.png","bed")
    parent_door.style("position:absolute;top:81%;left:69%;width:11%;height:4%;");
    parent_door.attribute("id","parent_door")
    parent_door.show()


}