var flash_now = ["FlashLightWhite","FlashLightRed","FlashLightYellow"]
var flash_idx = 0;
async function story_tellFunction(target) {
  story_tellLabel.html("", 0);
  var t = 0;
  var q = setInterval(() => {
    if (target.length == t) {
      clearInterval(q);
    } else {
      story_tellLabel.html(target[t], 1);
    }
    t += 1;
  }, 50);
}
async function dialogBoxFunction(target) {
  document.getElementById("typingSound").play();
  dialogBox.html("&emsp;", 0);
  var t = 0;
  var q = setInterval(() => {
    if (target.length == t) {
      clearInterval(q);
    } else {
      dialogBox.html(target[t], 1);
    }
    t += 1;
  }, 50);
  while (target.length != t) {
    await delay(0.05);
  }
  document.getElementById("typingSound").pause();
  document.getElementById("typingSound").currentTime = 0;
}

function FlashLightWhite_getXY() {
  var c = document.getElementById("mainCharacter");
  document
    .getElementById(flash_now[flash_idx])
    .style.setProperty(
      "--Xpos",
      parseFloat(c.style.left) + parseFloat(c.style.width) / 2 + "%"
    );
  document
    .getElementById(flash_now[flash_idx])
    .style.setProperty(
      "--Ypos",
      parseFloat(c.style.top) + parseFloat(c.style.height) / 2 + "%"
    );
}

async function fadeOutAnimation(ms) {
  var t = 1;
  document.body.style.opacity = 1;
  var q = setInterval(() => {
    if (t <= 0.1){
        clearInterval(q);
        t = 0;
    }
    document.body.style.opacity = t;
    t -= t * 0.1;
  }, ms);
}

async function fadeInAnimation(ms) {
  var t = 0.1;
  var q = setInterval(() => {
    if (t >= 1){
        clearInterval(q);
    }
    document.body.style.opacity = t;
    t += t * 0.1;
  }, ms);
}

async function start_menu_BackGroundAnimation() {
  var now = 1;
  var q = setInterval(() => {
    if (isMainScreen == 0) {
      clearInterval(q);
      background.attribute("src", "image/main_menu_backGround02.png");
    }
    now = now == 1 ? 0 : 1;
    if (isMainScreen == 1) {
      background.attribute(
        "src",
        "image/main_menu_backGround0" + now.toString() + ".png"
      );
    }
  }, 500);
}

function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n);
  });
}

start_menu_BackGroundAnimation();

async function colordisplay(){

    var cct = ["","red/","yellow/"]

    var q = setInterval(() =>{
        
        if(ScreenNow >= 1){
            colorButton.style(
                "background",
                `url('image/colorChanged`+(UnlockedStatus ).toString()+`.png') no-repeat center center white`
              );
            colorButton.style("background-size", "contain");
            
            
            document.getElementById(flash_now[flash_idx]).style.display = "none";
            flash_idx = ColorStatus
            document.getElementById(flash_now[flash_idx]).style.display = "block";
            FlashLightWhite_getXY()
            if(ColorStatus == 2)RoomWall.style("borderColor","rgb(255,255,0)")
            if(ColorStatus == 1)RoomWall.style("borderColor","rgb(255,0,0)")
            if(ColorStatus == 0)RoomWall.style("borderColor","rgb(0,0,0)")
        }
        if(ScreenNow == 2){
            
            if(ColorStatus == 1) livingroom_footPrint.show()
            else livingroom_footPrint.hide()
            livingroom_bigTable.attribute("src","image/"+cct[ColorStatus]+"livingroom_bigTable.png")
            livingroom_door2bed.attribute("src","image/"+cct[ColorStatus]+"livingroom_door2bed.png")
            livingroom_door2parent.attribute("src","image/"+cct[ColorStatus]+"livingroom_door2parent.png")
            livingroom_door2outside.attribute("src","image/"+cct[ColorStatus]+"livingroom_door2outside.png")
            livingroom_flower.attribute("src","image/"+cct[ColorStatus]+"livingroom_flower.png")
            livingroom_knife.attribute("src","image/"+cct[ColorStatus]+"livingroom_knife.png")
            livingroom_photo.attribute("src","image/"+cct[ColorStatus]+"livingroom_photo_label.png")
            livingroom_tv.attribute("src","image/"+cct[ColorStatus]+"livingroom_tv.png")
        }
        if(ScreenNow == 1){
            bedroom_Bed.attribute("src","image/"+cct[ColorStatus]+"bedroom_bed.png")
            bedroom_pcDesk.attribute("src","image/"+cct[ColorStatus]+"bedroom_pcdesk.png")
            bedroom_date.attribute("src","image/"+cct[ColorStatus]+"bedroom_date.png")
            bedroom_bookshelf.attribute("src","image/"+cct[ColorStatus]+"bedroom_bookshelf.png")
            bedroom_chair.attribute("src","image/"+cct[ColorStatus]+"bedroom_chair.png")
            bedroom_closet.attribute("src","image/"+cct[ColorStatus]+"bedroom_closet.png")
            bedroom_door.attribute("src","image/"+cct[ColorStatus]+"bedroom_door.png")
            safeBox.attribute("src","image/"+cct[ColorStatus]+"bedroom_safebox.png")
        }
    },100)


}

colordisplay()
