function CharacterSetup(){

    mainCharacter = createImg("image/mainCharacter.png","mainCharacter")
    mainCharacter.style("position:absolute")
    mainCharacter.style("top:50%;left:50%")
    mainCharacter.style("width:7%;height:14%;background:transparent")
    mainCharacter.attribute("id","mainCharacter")
    mainCharacter.hide()

}

function CharacterBtnDetection(e){

    var c = document.getElementById("mainCharacter")
    var moveSpeed = 1

    if(isControlingCharacter == 1){
        mouseFlashLight_getXY();
        if(e.which == 65){
            if(parseFloat(c.style.left) >= MoveBorder[0] + (moveSpeed * windowHeight / windowWidth) ){
                c.style.left = (parseFloat(c.style.left) - (moveSpeed * windowHeight / windowWidth)).toString() + "%"
            }
        }

        if(e.which == 68){
            if(parseFloat(c.style.left) + parseFloat(c.style.width) <= MoveBorder[1] - (moveSpeed * windowHeight / windowWidth)){
                c.style.left = (parseFloat(c.style.left) + (moveSpeed * windowHeight / windowWidth)).toString() + "%"
            }
        }

        if(e.which == 87){
            if(parseFloat(c.style.top) >= MoveBorder[2] + moveSpeed){
                c.style.top = (parseFloat(c.style.top) - moveSpeed).toString() + "%"
            }
        }

        if(e.which == 83){
            if(parseFloat(c.style.top) + parseFloat(c.style.height) <= MoveBorder[3] - moveSpeed){
                c.style.top = (parseFloat(c.style.top) + moveSpeed).toString() + "%"
            }
        }
    }

}



document.onkeydown = CharacterBtnDetection