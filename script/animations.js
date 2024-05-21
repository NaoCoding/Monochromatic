var flash_now = ["FlashLightWhite", "FlashLightRed", "FlashLightYellow"];
var flash_idx = 0;

function skipableWait(wait = 1000, keys = [" "]) {
    return new Promise((resolve) => {
        const timer = setTimeout(resolve, wait);

        function skip(e) {
            if (keys.includes(e.key.toLowerCase())) {
                clearTimeout(timer);
                document.removeEventListener("keydown", skip);
                resolve();
            }
        }

        document.addEventListener("keydown", skip);
    });
}

async function story_tellFunction(target, wait = 5000) {
    // Typing effect
    await new Promise((resolve) => {
        story_tellLabel.html("", 0);
        let t = 0;

        const q = setInterval(() => {
            if (target.length == t) {
                clearInterval(q);
                resolve();
            } else {
                story_tellLabel.html(target[t], 1);
            }
            t += 1;
        }, 50);

        function skip(e) {
            if (e.key == " ") {
                document.removeEventListener("keydown", skip);
                clearInterval(q);
                story_tellLabel.html(target, 0);
                resolve();
            }
        }

        document.addEventListener("keydown", skip);
    });

    await skipableWait(wait);
}

async function dialogBoxFunction(target, wait = 3000) {
    // Typing effect
    await new Promise((resolve) => {
        document.getElementById("typingSound").play();
        dialogBox.html("&emsp;", 0);
        let t = 0;
        const q = setInterval(() => {
            if (target.length == t) {
                clearInterval(q);
                document.getElementById("typingSound").pause();
                document.getElementById("typingSound").currentTime = 0;
                resolve();
            } else {
                dialogBox.html(target[t], 1);
            }
            t += 1;
        }, 50);

        function skip(e) {
            if (e.key == " ") {
                document.removeEventListener("keydown", skip);
                clearInterval(q);
                document.getElementById("typingSound").pause();
                document.getElementById("typingSound").currentTime = 0;
                dialogBox.html("&emsp;" + target, 0);
                resolve();
            }
        }

        document.addEventListener("keydown", skip);
    });

    await skipableWait(wait);
}

function FlashLightWhite_getXY() {
    var c = document.getElementById("mainCharacter");
    document.getElementById(flash_now[flash_idx]).style.setProperty("--Xpos", parseFloat(c.style.left) + parseFloat(c.style.width) / 2 + "%");
    document.getElementById(flash_now[flash_idx]).style.setProperty("--Ypos", parseFloat(c.style.top) + parseFloat(c.style.height) / 2 + "%");
}

async function fadeOutAnimation(ms) {
    var t = 1;
    document.body.style.opacity = 1;
    var q = setInterval(() => {
        if (t <= 0.1) {
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
        if (t >= 1) {
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
            background.attribute("src", "image/main_menu_backGround0" + now.toString() + ".png");
        }
    }, 500);
}

function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n);
    });
}

start_menu_BackGroundAnimation();

async function colordisplay() {
    var cct = ["", "red/", "yellow/"];

    var q = setInterval(() => {
        if (ScreenNow >= 1) {
            colorButton.style("background", `url('image/colorChanged` + UnlockedStatus.toString() + `.png') no-repeat center center white`);
            colorButton.style("background-size", "contain");

            if (ColorStatus < 3) {
                document.getElementById(flash_now[flash_idx]).style.display = "none";
                flash_idx = ColorStatus;
                document.getElementById(flash_now[flash_idx]).style.display = "block";
            }
            FlashLightWhite_getXY();
            if (ColorStatus == 2) RoomWall.style("borderColor", "rgb(255,255,0)");
            if (ColorStatus == 1) RoomWall.style("borderColor", "rgb(255,0,0)");
            if (ColorStatus == 0) RoomWall.style("borderColor", "rgb(0,0,0)");
        }
        if (ScreenNow == 3 && ColorStatus < 3) {
            parent_bigBed.attribute("src", "image/" + cct[ColorStatus] + "parent_bigBed.png");
            parent_smallBed.attribute("src", "image/" + cct[ColorStatus] + "parent_smallBed.png");
            parent_doll.attribute("src", "image/" + cct[ColorStatus] + "parent_doll.png");
            parent_photo_label.attribute("src", "image/" + cct[ColorStatus] + "parent_photo_label.png");
            parent_door.attribute("src", "image/" + cct[ColorStatus] + "livingroom_door2outside.png");
            parent_closet.attribute("src", "image/" + cct[ColorStatus] + "bedroom_closet.png");
        }

        if (ScreenNow == 2 && ColorStatus < 3) {
            if (ColorStatus == 1) livingroom_footPrint.show();
            else livingroom_footPrint.hide();
            livingroom_bigTable.attribute("src", "image/" + cct[ColorStatus] + "livingroom_bigTable.png");
            livingroom_door2bed.attribute("src", "image/" + cct[ColorStatus] + "livingroom_door2bed.png");
            livingroom_door2parent.attribute("src", "image/" + cct[ColorStatus] + "livingroom_door2parent.png");
            livingroom_door2outside.attribute("src", "image/" + cct[ColorStatus] + "livingroom_door2outside.png");
            livingroom_flower.attribute("src", "image/" + cct[ColorStatus] + "livingroom_flower.png");
            livingroom_knife.attribute("src", "image/" + cct[ColorStatus] + "livingroom_knife.png");
            livingroom_photo.attribute("src", "image/" + cct[ColorStatus] + "livingroom_photo_label.png");
            livingroom_tv.attribute("src", "image/" + cct[ColorStatus] + "livingroom_tv.png");
        }
        if (ScreenNow == 1 && ColorStatus < 3) {
            bedroom_Bed.attribute("src", "image/" + cct[ColorStatus] + "bedroom_bed.png");
            bedroom_pcDesk.attribute("src", "image/" + cct[ColorStatus] + "bedroom_pcdesk.png");
            bedroom_date.attribute("src", "image/" + cct[ColorStatus] + "bedroom_date.png");
            bedroom_bookshelf.attribute("src", "image/" + cct[ColorStatus] + "bedroom_bookshelf.png");
            bedroom_chair.attribute("src", "image/" + cct[ColorStatus] + "bedroom_chair.png");
            bedroom_closet.attribute("src", "image/" + cct[ColorStatus] + "bedroom_closet.png");
            bedroom_door.attribute("src", "image/" + cct[ColorStatus] + "bedroom_door.png");
            safeBox.attribute("src", "image/" + cct[ColorStatus] + "bedroom_safebox.png");
        }
    }, 100);
}

colordisplay();
