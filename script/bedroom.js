let bedroom_Bed,bedroom_pcDesk,bedroom_date,bedroom_bookshelf
let bedroom_chair, bedroom_closet, bedroom_door
ClosetTouchTime = 0
haveDiary  = 0
haveBedRoomKey = 0
// 目前持有的所有內容


function hideBedRoom(){
    bedroom_Bed.hide()
    bedroom_pcDesk.hide()
    bedroom_date.hide()
    bedroom_bookshelf.hide()
    bedroom_chair.hide()
    bedroom_closet.hide()
    bedroom_door.hide()
    safeBox.hide()
}

function showBedRoom(){
    bedroom_Bed.show()
    bedroom_pcDesk.show()
    bedroom_date.show()
    bedroom_bookshelf.show()
    bedroom_chair.show()
    bedroom_closet.show()
    bedroom_door.show()
    safeBox.show()

}

function start_SceneBedroom() {
    ScreenNow = 1
    background.hide()
    MoveBorder = ["bedroom_Bed","bedroom_pcDesk","safeBox","bedroom_date","bedroom_bookshelf","bedroom_chair"
                ,"bedroom_closet","bedroom_door"]; // 各個物件
    PressEBorder = [0,1,2,3,4,6,7]
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

    bedroom_pcDesk = createImg("image/bedroom_pcdesk.png","bed")
    bedroom_pcDesk.style("position:absolute;top:15%;left:45%;width:15%;height:15%;");
    bedroom_pcDesk.attribute("id","bedroom_pcDesk")
    bedroom_pcDesk.show()

    bedroom_date = createImg("image/bedroom_date.png","bed")
    bedroom_date.style("position:absolute;top:82%;left:55%;width:5%;height:3%;");
    bedroom_date.attribute("id","bedroom_date")
    bedroom_date.show()

    bedroom_bookshelf = createImg("image/bedroom_bookshelf.png","bed")
    bedroom_bookshelf.style("position:absolute;top:15%;left:65%;width:20%;height:15%;");
    bedroom_bookshelf.attribute("id","bedroom_bookshelf")
    bedroom_bookshelf.show()

    bedroom_chair = createImg("image/bedroom_chair.png","bed")
    bedroom_chair.style("position:absolute;top:32%;left:50%;width:5%;height:5%;");
    bedroom_chair.attribute("id","bedroom_chair")
    bedroom_chair.show()

    bedroom_closet = createImg("image/bedroom_closet.png","bed")
    bedroom_closet.style("position:absolute;top:75%;left:15%;width:20%;height:10%;");
    bedroom_closet.attribute("id","bedroom_closet")
    bedroom_closet.show()

    bedroom_door = createImg("image/bedroom_door.png","bed")
    bedroom_door.style("position:absolute;top:55%;left:82%;width:3%;height:20%;");
    bedroom_door.attribute("id","bedroom_door")
    bedroom_door.show()
  
    inventoryButton.show();
    colorButton.show();
  }


async function bedroom_DateDialogBox(){
    
    isControlingCharacter = 0
    dialogBox.show()

    if(ColorStatus == 0){
        if(haveDiary == 1){
            dialogBoxFunction("2024/05/17")
            await delay(1500)
            dialogBoxFunction("It's the day for family vacation.")
            await delay(2750)
            dialogBoxFunction("All the doors are locked, spare key are placed under the bed.")
            await delay(4000)
            haveDiary = 2
            dialogBox.hide()
            isControlingCharacter = 1
        }
        else{
            dialogBoxFunction("Today is 2024/05/19.")
            await delay(2000)
            dialogBox.hide()
            isControlingCharacter = 1
        }
    }
    else if(ColorStatus == 1){
        dialogBoxFunction("I hate birthday...")
        await delay(2000)
        dialogBoxFunction("Dad and Mom never celebrate my birthday...")
        await delay(3500)
        dialogBoxFunction("However, they enjoy celebrate 'her' birthday,")
        await delay(3000)
        dialogBoxFunction("Like.... Go on a vacation...")
        await delay(2500)


        dialogBox.hide()
        isControlingCharacter = 1
    }

    else if(ColorStatus == 2){
        dialogBoxFunction("I love birthday...")
        await delay(2000)
        dialogBoxFunction("Dad and Mom and Sister always celebrate my birthday...")
        await delay(4000)
        dialogBoxFunction("We sang the birthday song, ate the birthday cake...")
        await delay(4000)
        dialogBoxFunction("It's the best thing ever!")
        await delay(2500)


        dialogBox.hide()
        isControlingCharacter = 1
    }

    
    

}


async function bedroom_pcDeskDialogBox(){
    isControlingCharacter = 0
    dialogBox.show()

    if(touchSafeBox == 0){
        dialogBoxFunction("This is a computer")
        await delay(2000)
        dialogBoxFunction("Yes, it is a computer...")
        await delay(2500)
        dialogBoxFunction("Undoubtedly, it is a computer...")
        await delay(3000)
    }
    else if(touchSafeBox == 1){
        touchSafeBox = 2
        safeBoxKeyState = 1;
        computerKeyState = 0;
        dialogBoxFunction("This is a computer")
        await delay(2000)
        dialogBoxFunction("Yes, it is a computer...")
        await delay(2500)
        dialogBoxFunction("Undoubtedly...")
        await delay(1000)
        dialogBoxFunction("Wait for me, I will read the data from the database!")
        await delay(3500)
        await ProgressBar_generator(25, 45, 40, 15, 808081, 1000, 2000, 3000);
        dialogBoxFunction("You receive a safebox password!")
        await delay(3000)


    }
    else if(touchSafeBox == 2){
        dialogBoxFunction("This is a computer")
        await delay(2000)
        dialogBoxFunction("Yes, it is a computer...")
        await delay(2500)
        dialogBoxFunction("Undoubtedly, it is a computer...")
        await delay(3000)
    }
    


    dialogBox.hide()
    isControlingCharacter = 1

  inventoryButton.show();
  colorButton.show();
}

async function bedroom_DoorDialogBox(){

    isControlingCharacter = 0
    dialogBox.show()

    if(haveBedRoomKey == 1){
        document.getElementById("pressESound").pause();
        document.getElementById("openDoorSound").volume = 0.5
        document.getElementById("openDoorSound").play();
        haveBedRoomKey = 2
        dialogBoxFunction("You opened the door")
        await delay(2000)
        fadeOutAnimation(75);
        await delay(1500);
        hideBedRoom()
        start_SceneLivingRoom()

        fadeInAnimation(75);
        await delay(1000);
        
    }
    else if(haveBedRoomKey == 0){
        dialogBoxFunction("The Door is Locked")
        await delay(2000)
    }
    else{
        document.getElementById("pressESound").pause();
        document.getElementById("openDoorSound").volume = 0.5
        document.getElementById("openDoorSound").play();
        showLivingRoom()
        ScreenNow = 2
        mainCharacter.style("top:55%;left:20%")
        FlashLightWhite_getXY()
        bedroomKeyState = 0;
        MoveBorder = ["livingroom_bigTable","livingroom_door2bed","livingroom_door2outside","livingroom_door2parent"
                        ,"livingroom_flower","livingroom_knife","livingroom_photo","livingroom_sova",
                        "livingroom_tv"]
        PressEBorder = [0,1,2,3,4,5,6,7,8]

        hideBedRoom()
    }




    dialogBox.hide()
    isControlingCharacter = 1

}

async function bedroom_ClosetDialogBox(){

    isControlingCharacter = 0
    dialogBox.show()

    if(touchSafeBox < 2){
        ClosetTouchTime += 1
        if(ClosetTouchTime < 5){
            var s = ""
            for(var i=0;i<ClosetTouchTime;i++) s+= '!'
            dialogBoxFunction("Don't touch me" + s)
            await delay(1500 + ClosetTouchTime * 150)
        }
        else if(ClosetTouchTime == 5){
            dialogBoxFunction("I told you don't touch me, Idiot.")
            await delay(3000)
            dialogBoxFunction("Let me tell you a joke.")
            await delay(2000)
            dialogBoxFunction("You!")
            await delay(1000)
        }
        else{
            dialogBoxFunction("I don't have other jokes for you...")
            await delay(3000)
        }
    }
    else if(haveDiary == 0){
        haveDiary = 1
        diaryState = 1;
        closetKeyState = 0;
        
        dialogBoxFunction("Let me see what's in the closet....");
        await delay(3000);
        await ProgressBar_generator(55, 25, 40, 15, 808081, 1000, 2000, 3000);
        dialogBoxFunction("I think you may need this diary.");
        await delay(3000);
        dialogBoxFunction("Open your backpack, check the diary.");
        await delay(2500);
    }
    else{
        dialogBoxFunction("I don't think I have what you need...");
        await delay(3000);
    }


    dialogBox.hide()
    isControlingCharacter = 1

}

async function bedroom_BookSheifDialogBox(){

    isControlingCharacter = 0
    dialogBox.show()

    if(ColorStatus == 0){
        dialogBoxFunction("I prefer red more than black and white.")
        await delay(3000)
    }
    else if(ColorStatus == 1){
        dialogBoxFunction("I love Red! I am happy now !!!")
        await delay(2250)
    }
    else if(ColorStatus == 2){
        dialogBoxFunction("I think you are happy now, aren't you.")
        await delay(3000)
    }
    
   

    dialogBox.hide()
    isControlingCharacter = 1

}

async function bedroom_BedDialogBox(){
    isControlingCharacter = 0
    dialogBox.show()

    if(haveDiary != 2){
        dialogBoxFunction("This is where I slept!?")
        await delay(2000)
        dialogBoxFunction("I can't remember anything!")
        await delay(2750)
        dialogBoxFunction("The room seems weird and horrible....")
        await delay(3500)
        dialogBoxFunction("I must get out the room as fast as possible...")
        await delay(4000)
    }
    else{
        haveDiary = 3
        haveBedRoomKey = 1
        dialogBoxFunction("I remember there was something weird underneath me.");
        bedroomKeyState = 1;
        await delay(3500);
        dialogBoxFunction("Let me find it for you.");
        await delay(2500);
        await ProgressBar_generator(30, 15, 40, 15, 808081, 1000, 2000, 3000);
    }
    
    dialogBox.hide()
    isControlingCharacter = 1
}
