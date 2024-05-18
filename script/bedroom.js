let bedroom_Bed,bedroom_pcDesk,bedroom_date,bedroom_bookshelf
let bedroom_chair
function start_SceneBedroom() {
    MoveBorder = ["bedroom_Bed","bedroom_pcDesk","safeBox","bedroom_date","bedroom_bookshelf","bedroom_chair"]; // 各個物件
    PressEBorder = [0,1,2,3,4]
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
    bedroom_chair.style("position:absolute;top:35%;left:50%;width:5%;height:5%;");
    bedroom_chair.attribute("id","bedroom_chair")
    bedroom_chair.show()


  
    inventoryButton.show();
    colorButton.show();
  }

async function pcDeskDialogBox(){
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

async function BedDialogBox(){
    isControlingCharacter = 0
    dialogBox.show()

    
    dialogBoxFunction("This is where I slept!?")
    await delay(2000)
    dialogBoxFunction("I can't remember anything!")
    await delay(2750)
    dialogBoxFunction("The room seems weird and horrible....")
    await delay(3500)
    dialogBoxFunction("I must get out the room as fast as possible...")
    await delay(4000)
    dialogBox.hide()
    isControlingCharacter = 1
}