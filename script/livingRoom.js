let livingroom_bigTable,livingroom_door2bed
let livingroom_door2outside,livingroom_door2parent
let livingroom_flower,livingroom_knife
let livingroom_photo,livingroom_sova,livingroom_tv
let livingroom_footPrint
let photoLabel

ColorStatus = 0
UnlockedStatus = 0
isParentDoorUnlock = 0
var photoAppear = 1

haveTV = 0

function showLivingRoom(){
    livingroom_bigTable.show()
    livingroom_tv.show()
    livingroom_sova.show()
    livingroom_photo.show()
    livingroom_knife.show()
    livingroom_flower.show()
    livingroom_door2parent.show()
    livingroom_door2bed.show()
    livingroom_door2outside.show()
}

function hideLivingRoom(){
    livingroom_footPrint.hide()
    livingroom_bigTable.hide()
    livingroom_tv.hide()
    livingroom_sova.hide()
    livingroom_photo.hide()
    livingroom_knife.hide()
    livingroom_flower.hide()
    livingroom_door2parent.hide()
    livingroom_door2bed.hide()
    livingroom_door2outside.hide()
}

async function UnlockRed(){

    isControlingCharacter = 0
    

    ColorStatus = 1
    UnlockedStatus = 1
    flash_idx = 1
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
    FlashLightWhite.hide()
    FlashLightRed.show()
    fadeInAnimation(25);
    await delay(1000);
    FlashLightWhite.show()
    FlashLightRed.hide()
    fadeOutAnimation(25);
    await delay(1000);
    FlashLightWhite.hide()
    FlashLightRed.show()
    
    fadeInAnimation(25);
    await delay(1250);
    isControlingCharacter = 1
    dialogBox.show()
    BGM()
    dialogBoxFunction("The blood....")
    await delay(1500)
    dialogBoxFunction("I feel crazy!!!!")
    await delay(2000)
    dialogBoxFunction("Click the button to toggle Color of the world")
    await delay(3500)
    dialogBox.hide()
    
    

}


async function livingroom_sovaDialogBox(){

    if(UnlockedStatus == 0) UnlockRed()
    else{
        isControlingCharacter = 0
        dialogBox.show()

        if(ColorStatus == 1){
            dialogBoxFunction("There is a corpse and large quantity of bloods flowing...")
            await delay(3000)
        }

        if(ColorStatus == 2){
            dialogBoxFunction("We used to sit here and watch TV together, I love them")
            await delay(3000)   
        }

        if(ColorStatus == 0){
            if(haveTV == 0){
                dialogBoxFunction("You received a TV remote controler...")
                haveTV = 1
                controlerState = 1;
                await delay(3000)
            }
            else{
                dialogBoxFunction("TV remote controler... what should I watch?")
                await delay(3500)
            }
        }

        dialogBox.hide()
        isControlingCharacter = 1

    }

}


async function living_roomSovaAnimation(){
    
    var now = 1
    var q = setInterval(() => {
        now = now == 1 ? 2 : 1;
        if(ColorStatus == 1){
            livingroom_sova.attribute("src","image/red/livingroom_sova" + (now).toString() + ".png")
        }
        else if(ColorStatus == 2){
            livingroom_sova.attribute("src","image/yellow/livingroom_sova" + (now).toString() + ".png")
        }
        else{
            livingroom_sova.attribute("src","image/livingroom_sova" + (now).toString() + ".png")
        }
      }, 100);

}

async function livingroom_bigTableDialogBox(){

    isControlingCharacter = 0
        dialogBox.show()

        if(ColorStatus == 2){
            dialogBoxFunction("I love to play video games with my Dad!")
            await delay(3000)
        }

        if(ColorStatus == 1){
            dialogBoxFunction("I hate my sister, she steal the love from Mom and Dad!")
            await delay(3000)
        }

        if(ColorStatus == 0){
            dialogBoxFunction("We used to eat meals together at this table...")
            await delay(3000)
        }

        dialogBox.hide()
        isControlingCharacter = 1

}

async function livingroom_flowerDialogBox(){
    isControlingCharacter = 0
    dialogBox.show()

        if(ColorStatus == 2){
            dialogBoxFunction("This is my mom's favorite plants!")
            await delay(2500)
        }

        if(ColorStatus == 1){
            dialogBoxFunction("Leaves seems differents from I remembered...")
            await delay(3000)
        }

        if(ColorStatus == 0){
            dialogBoxFunction("Three plants, like the color, R, Y ,B")
            await delay(3000)
        }

        dialogBox.hide()



    isControlingCharacter = 1
}


async function livingroom_photoDialogBox(){

    isControlingCharacter = 0
    photoAppear = 1
    photoLabel.style("zIndex:10000")
    photoLabel.attribute("onclick","photoAppear = 0")
    if(ColorStatus == 2)photoLabel.attribute("src","image/yellow/livingroom_photo.png")
    else if(ColorStatus == 1)photoLabel.attribute("src","image/red/livingroom_photo.png")
    else if(ColorStatus == 0)photoLabel.attribute("src","image/livingroom_photo.png")
    var q =  setInterval(() => {
        if(photoAppear == 0){
            clearInterval(q);
            photoLabel.hide()
            photoLabel.removeAttribute("onclick")
            
        }
        else photoLabel.show()
    },50)
    while(photoAppear == 1){
        await delay(100)
    } 
    if(ColorStatus == 2){
        dialogBox.show()
        dialogBoxFunction("I love my family....")
        await delay(2250)
        dialogBoxFunction("They treat me well and I love them...")
        await delay(3000)
        dialogBox.hide()
    }
    if(ColorStatus == 1){
        dialogBox.show()
        dialogBoxFunction("I finally fulfill my dream, killed them...")
        await delay(3000)
        dialogBoxFunction("Wait.... What!? I killed them !?")
        await delay(3000)
        dialogBox.hide()
    }
    else if(ColorStatus == 0){
        dialogBox.show()
        dialogBoxFunction("This is my family. However, it was a terrible memory.")
        await delay(3500)
        dialogBoxFunction("When I heard dad said 'Let us take the picture'...")
        await delay(3250)
        dialogBoxFunction("They took the picture without waiting me....")
        await delay(3000)
        dialogBox.hide()
    }
    

    isControlingCharacter = 1

}

async function livingroom_door2outsideDialogBox(){
    
    isControlingCharacter = 0
        dialogBox.show()
        if(ColorStatus == 2){
            // 最後的密碼
            passwordDoorForBottomDialogBox();
        }

        if(ColorStatus == 1){
            dialogBoxFunction("The door is locked so no one will discover people's death...")
            await delay(3250)
        }

        if(ColorStatus == 0){
            dialogBoxFunction("The door is locked.")
            await delay(1500)
        }

        dialogBox.hide()
        isControlingCharacter = 1

}

async function livingroom_door2parentDialogBox(){

    isControlingCharacter = 0
        dialogBox.show()

        if(ColorStatus == 2){
            showParentRoom()
            ScreenNow = 3
            mainCharacter.style("top:60%;left:70%")
            FlashLightWhite_getXY()
            bedroomKeyState = 0;
            MoveBorder = ["parent_bigBed","parent_smallBed","parent_doll","parent_photo_label"
                    ,"parent_closet","parent_door"]
            PressEBorder = [0,1,2,3,4,5]

            hideLivingRoom()
        }

        if(ColorStatus == 1){
            

            isControlingCharacter = 0
            dialogBox.show()

        if (isParentDoorUnlock == 0){
            passwordDoorDialogBox();
        }

        else if(isParentDoorUnlock == 1){
            isParentDoorUnlock = 2
            dialogBoxFunction("You opened the door")
            await delay(2000)
            fadeOutAnimation(75);
            await delay(1500);
            hideLivingRoom()
            start_SceneParentRoom()

            fadeInAnimation(75);
            await delay(1000);
            
        }
        else{
            showParentRoom()
            ScreenNow = 3
            mainCharacter.style("top:60%;left:70%")
            FlashLightWhite_getXY()
            bedroomKeyState = 0;
            MoveBorder = ["parent_bigBed","parent_smallBed","parent_doll","parent_photo_label"
                    ,"parent_closet","parent_door"]
            PressEBorder = [0,1,2,3,4,5]

            hideLivingRoom()
        }




        dialogBox.hide()
        isControlingCharacter = 1

        }

        if(ColorStatus == 0){
            if (isParentDoorUnlock == 0){
                dialogBoxFunction("The door is locked.")
                await delay(1500)
            }
            else if(isParentDoorUnlock == 1){
                document.getElementById("pressESound").pause();
                document.getElementById("openDoorSound").volume = 0.5
                document.getElementById("openDoorSound").play();
                isParentDoorUnlock = 2
                dialogBoxFunction("You opened the door")
                await delay(2000)
                fadeOutAnimation(75);
                await delay(1500);
                hideLivingRoom()
                start_SceneParentRoom()
    
                fadeInAnimation(75);
                await delay(1000);
                
            }
            else{
                showParentRoom()
                document.getElementById("pressESound").pause();
                document.getElementById("openDoorSound").volume = 0.5
                document.getElementById("openDoorSound").play();
                ScreenNow = 3
                mainCharacter.style("top:60%;left:70%")
                FlashLightWhite_getXY()
                bedroomKeyState = 0;
                MoveBorder = ["parent_bigBed","parent_smallBed","parent_doll","parent_photo_label"
                        ,"parent_closet","parent_door"]
                PressEBorder = [0,1,2,3,4,5]
    
                hideLivingRoom()
            }
            
        }

        dialogBox.hide()
        isControlingCharacter = 1

}

async function livingroom_door2bedDialogBox(){

    BGM()
    document.getElementById("pressESound").pause();
    document.getElementById("openDoorSound").volume = 0.5
    document.getElementById("openDoorSound").play();
    showBedRoom()
    hideLivingRoom()
    mainCharacter.style("top:58%;left:73%")
    MoveBorder = ["bedroom_Bed","bedroom_pcDesk","safeBox","bedroom_date","bedroom_bookshelf","bedroom_chair"
                ,"bedroom_closet","bedroom_door"]; // 各個物件
    PressEBorder = [0,1,2,3,4,6,7]
    FlashLightWhite_getXY()
    ScreenNow = 1

}


function start_SceneLivingRoom(){
    
    ScreenNow = 2
    mainCharacter.style("top:55%;left:20%")
    FlashLightWhite_getXY()

    MoveBorder = ["livingroom_bigTable","livingroom_door2bed","livingroom_door2outside","livingroom_door2parent"
                    ,"livingroom_flower","livingroom_knife","livingroom_photo","livingroom_sova",
                    "livingroom_tv"]
    PressEBorder = [0,1,2,3,5,6,7,8]
    WallBorder = [15,85,15,85]

    livingroom_bigTable = createImg("image/livingroom_bigTable.png","bed")
    livingroom_bigTable.style("position:absolute;top:35%;left:53%;width:17%;height:25%;");
    livingroom_bigTable.attribute("id","livingroom_bigTable")
    livingroom_bigTable.show()

    livingroom_door2bed = createImg("image/livingroom_door2bed.png","bed")
    livingroom_door2bed.style("position:absolute;top:59%;left:15%;width:3%;height:20%;");
    livingroom_door2bed.attribute("id","livingroom_door2bed")
    livingroom_door2bed.show()

    livingroom_door2outside = createImg("image/livingroom_door2outside.png","bed")
    livingroom_door2outside.style("position:absolute;top:81%;left:69%;width:11%;height:4%;");
    livingroom_door2outside.attribute("id","livingroom_door2outside")
    livingroom_door2outside.show()

    livingroom_door2parent = createImg("image/livingroom_door2parent.png","bed")
    livingroom_door2parent.style("position:absolute;top:15%;left:69%;width:11%;height:4%;");
    livingroom_door2parent.attribute("id","livingroom_door2parent")
    livingroom_door2parent.show()

    livingroom_flower = createImg("image/livingroom_flower.png","bed")
    livingroom_flower.style("position:absolute;top:79%;left:45%;width:12%;height:6%;");
    livingroom_flower.attribute("id","livingroom_flower")
    livingroom_flower.show()

    livingroom_knife = createImg("image/livingroom_knife.png","bed")
    livingroom_knife.style("position:absolute;top:30%;left:28%;width:10%;height:18%;");
    livingroom_knife.attribute("id","livingroom_knife")
    livingroom_knife.show()

    livingroom_photo = createImg("image/livingroom_photo_label.png","bed")
    livingroom_photo.style("position:absolute;top:50%;left:82%;width:3%;height:12%;");
    livingroom_photo.attribute("id","livingroom_photo")
    livingroom_photo.show()

    livingroom_sova = createImg("image/livingroom_sova.png","bed")
    livingroom_sova.style("position:absolute;top:25%;left:40%;width:7%;height:28%;");
    livingroom_sova.attribute("id","livingroom_sova")
    livingroom_sova.show()

    livingroom_footPrint = createImg("image/red/footprint.png","bed")
    livingroom_footPrint.style("position:absolute;top:25%;left:70%;width:8%;height:15%;");
    livingroom_footPrint.style("zIndex:0")
    livingroom_footPrint.attribute("id","livingroom_footPrint")
    livingroom_footPrint.hide()


    livingroom_tv = createImg("image/livingroom_tv.png","bed")
    livingroom_tv.style("position:absolute;top:30%;left:15%;width:4%;height:18%;");
    livingroom_tv.attribute("id","livingroom_tv")
    livingroom_tv.show()


    photoLabel = createImg("image/livingroom_tv.png","bed")
    photoLabel.style("position:absolute;top:0%;left:0%;width:100%;height:100%;");
    photoLabel.attribute("id","livingroom_tv")
    photoLabel.hide()
    



    living_roomSovaAnimation()
}