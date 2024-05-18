let bedroom_Bed,bedroom_pcDesk,bedroom_date,bedroom_bookshelf
let bedroom_chair, bedroom_closet, bedroom_door
ClosetTouchTime = 0
haveDiary  = 0
haveBedRoomKey = 0

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

function start_SceneBedroom() {
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

    if(haveDiary == 1){
        dialogBoxFunction("2024/05/21")
        await delay(1500)
        dialogBoxFunction("It's the day for family vacation")
        await delay(2750)
        dialogBoxFunction("All the doors are locked, spare key are placed under the bed")
        await delay(4000)
        haveDiary = 2
    }
    else{
        dialogBoxFunction("Today is 2024/05/21")
        await delay(2000)
    }

    dialogBox.hide()
    isControlingCharacter = 1

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
    else if(touchSafeBox >= 1){
        touchSafeBox = 2
        dialogBoxFunction("This is a computer")
        await delay(2000)
        dialogBoxFunction("Yes, it is a computer...")
        await delay(2500)
        dialogBoxFunction("Undoubtedly...")
        await delay(1000)
        dialogBoxFunction("You receive a safebox password!")
        await delay(3000)


    }
    


    dialogBox.hide()
    isControlingCharacter = 1

}

async function bedroom_DoorDialogBox(){

    isControlingCharacter = 0
    dialogBox.show()

    if(haveBedRoomKey == 1){
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
        dialogBoxFunction("The Door is Closed")
        await delay(2000)
    }
    else{
        start_SceneLivingRoom()
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
            dialogBoxFunction("You are a joke LOL")
            await delay(2000)
        }
        else{
            dialogBoxFunction("I don't have other jokes for you...")
            await delay(3000)
        }
    }
    else{
        haveDiary = 1
        
    }


    dialogBox.hide()
    isControlingCharacter = 1

}

async function bedroom_BookSheifDialogBox(){

    isControlingCharacter = 0
    dialogBox.show()

    
    dialogBoxFunction("I prefer red more than black and white")
    await delay(3000)

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
        haveBedRoomKey = 1
    }
    
    dialogBox.hide()
    isControlingCharacter = 1
}