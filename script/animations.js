let mouseFlashLight_xpos = 0;
let mouseFlashLight_ypos = 0;

async function story_tellFunction(target){

    story_tellLabel.html("",0)
    var t = 0
    var q = setInterval(() => {
        if(target.length == t){
            clearInterval(q)
        }
        else{
            story_tellLabel.html(target[t],1)
        }
        t += 1
    }, 50);

}

async function dialogBoxFunction(target){

    dialogBox.html("",0)
    var t = 0
    var q = setInterval(() => {
        if(target.length == t){
            clearInterval(q)
        }
        else{
            dialogBox.html(target[t],1)
        }
        t += 1
    }, 50);

}

function mouseFlashLight_getXY(){
    var c = document.getElementById("mainCharacter")
    document.getElementById("mouseFlashLight").style.setProperty("--Xpos",(parseFloat(c.style.left) + parseFloat(c.style.width)/2) + "%")
    document.getElementById("mouseFlashLight").style.setProperty("--Ypos",(parseFloat(c.style.top) + parseFloat(c.style.height)/2) + "%")
}

async function fadeOutAnimation(ms){

    var t = 1
    document.body.style.opacity  = 1
    var q = setInterval(() =>{
        if(t <= 0.1) clearInterval(q);
        document.body.style.opacity = t
        t -= t * 0.1;
    },ms);

}

async function fadeInAnimation(ms){

    var t = 0.1
    var q = setInterval(() =>{
        if(t >= 1) clearInterval(q);
        document.body.style.opacity = t
        t += t * 0.1;
    },ms);

}

async function start_menu_BackGroundAnimation(){

    var now = 1
    var q = setInterval(() => {
        if(isMainScreen == 0){
            clearInterval(q);
            background.attribute("src","image/main_menu_backGround02.png");
        }
        now = now == 1 ? 0 : 1
        if(isMainScreen == 1){
            background.attribute("src","image/main_menu_backGround0" +(now).toString() + ".png")
        }
    }, 500);
    
    
}


function delay(n) {
	return new Promise(function(resolve) {
	  setTimeout(resolve, n);
	});
  }

start_menu_BackGroundAnimation();


