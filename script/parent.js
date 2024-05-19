let parent_bigBed,parent_smallBed
let parent_doll,parent_photo_label
let parent_closet,parent_door

function parent_doorDialogBox(){

    document.getElementById("pressESound").pause();
    document.getElementById("openDoorSound").volume = 0.5
    document.getElementById("openDoorSound").play();
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


async function parent_photo_labelDialogBox(){

    isControlingCharacter = 0
    dialogBox.show()

    if(ColorStatus == 2){
        dialogBoxFunction("I love Dad and Mom, they are the best!")
        await delay(3000)
    }

    if(ColorStatus == 1){
        dialogBoxFunction("HaHa ! I finally kill all the people in the photo")
        await delay(3500)
    }

    if(ColorStatus == 0){
        dialogBoxFunction("This is the photo about my parent's wedding")
        await delay(3000)
    }


    isControlingCharacter = 1
    dialogBox.hide()

}


async function parent_smallBedDialogBox(){

    isControlingCharacter = 0
    dialogBox.show()

    if(ColorStatus == 2){
        dialogBoxFunction("My sister slept here and I enjoy to play with her!")
        await delay(3500)
        dialogBoxFunction("She is my favorite!")
        await delay(2000)
    }

    if(ColorStatus == 1){
        dialogBoxFunction("Hmm.. This bed, I hate her. She stole the love....")
        await delay(3500)
    }

    if(ColorStatus == 0){
        dialogBoxFunction("This is my sister's bed")
        await delay(2250)
    }


    isControlingCharacter = 1
    dialogBox.hide()

}

async function parent_bigBedDialogBox(){

    isControlingCharacter = 0
    dialogBox.show()

    if(ColorStatus == 2){
        dialogBoxFunction("I love my parents! I used to slept with them when I was a kid")
        await delay(4000)
        dialogBoxFunction("I love them!!!")
        await delay(2000)
    }

    if(ColorStatus == 1){
        dialogBoxFunction("Hmm.. This bed, I should kill it's owner...")
        await delay(3000)
    }

    if(ColorStatus == 0){
        dialogBoxFunction("This is my parent's bed")
        await delay(2250)
    }


    isControlingCharacter = 1
    dialogBox.hide()

}

async function parent_closetDialogBox(){

    isControlingCharacter = 0
    dialogBox.show()

    if(ColorStatus == 2){
        dialogBoxFunction("We used to play hide and seek together...")
        await delay(3000)
        dialogBoxFunction("My favorite hidding spot was this closet...")
        await delay(3000)
    }

    if(ColorStatus == 1){
        dialogBoxFunction("This closet looks great to hide corpse...")
        await delay(3000)
    }

    if(ColorStatus == 0){
        dialogBoxFunction("This is a closet")
        await delay(2000)
    }


    isControlingCharacter = 1
    dialogBox.hide()

}


async function parent_dollDialogBox(){

    isControlingCharacter = 0
    if(UnlockedStatus == 1){
        UnlockYellow()
    }
    else{
        if(ColorStatus == 1){
            dialogBox.show()
            dialogBoxFunction("I hate toys, since they only bought for sister...")
            await delay(3000)
            dialogBox.hide()
        }
        if(ColorStatus == 0){
            dialogBox.show()
            dialogBoxFunction("Toys.... Sister's favorite toys...")
            await delay(2250)
            dialogBox.hide()
        }
        if(ColorStatus == 2){
            dialogBox.show()
            dialogBoxFunction("I used to play toys with my sister OuO")
            await delay(3000)
            dialogBox.hide()
        }
    }




    isControlingCharacter = 1

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
    BGM()
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