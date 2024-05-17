let mouseFlashLight_xpos = 0;
let mouseFlashLight_ypos = 0;

const mouseFlashLight_TouchDevice = () =>{
    try{
        document.createEvent("TouchEvent")
        return true;
    }
    catch (e){
        return false;
    }
}

function mouseFlashLight_getXY(e){
    mouseFlashLight_xpos = !mouseFlashLight_TouchDevice() ? e.pageX : e.touches[0].pageX;
    mouseFlashLight_ypos = !mouseFlashLight_TouchDevice() ? e.pageY : e.touches[0].pageY;
    document.getElementById("mouseFlashLight").style.setProperty("--Xpos",mouseFlashLight_xpos + "px")
    document.getElementById("mouseFlashLight").style.setProperty("--Ypos",mouseFlashLight_ypos + "px")
}

document.addEventListener("mousemove",mouseFlashLight_getXY);
document.addEventListener("touchmove",mouseFlashLight_getXY);
