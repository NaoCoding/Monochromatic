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
        var left = parseFloat(c.style.left)
        var top = parseFloat(c.style.top)
        var width = parseFloat(c.style.width)
        var height = parseFloat(c.style.height)
        if(e.which == 65){
            c.style.left = (parseFloat(c.style.left) - (moveSpeed * windowHeight / windowWidth)).toString() + "%"
            for(var i=0;i<MoveBorder.length;i++){
                rect2 = document.getElementById(MoveBorder[i]).getBoundingClientRect()
                if(!(
                    c.getBoundingClientRect().top > rect2.bottom ||
                    c.getBoundingClientRect().right < rect2.left ||
                    c.getBoundingClientRect().bottom < rect2.top ||
                    c.getBoundingClientRect().left > rect2.right
                  )){
                    if(PressEBorder.find((ele) => ele == i) != undefined) PressEtoInteractShow()
                    c.style.left = (parseFloat(c.style.left) + (moveSpeed * windowHeight / windowWidth)).toString() + "%"
                    return;
                  }
            }
            if(left - (moveSpeed * windowHeight / windowWidth) >= WallBorder[0] &&
                    left + width - (moveSpeed * windowHeight / windowWidth) <= WallBorder[1] &&
                    top >= WallBorder[2] &&
                    top + height <= WallBorder[3]){
                        
                    }
            else c.style.left = (parseFloat(c.style.left) + (moveSpeed * windowHeight / windowWidth)).toString() + "%"
            
        }

        if(e.which == 68){
            c.style.left = (parseFloat(c.style.left) + (moveSpeed * windowHeight / windowWidth)).toString() + "%"
            for(var i=0;i<MoveBorder.length;i++){
                rect2 = document.getElementById(MoveBorder[i]).getBoundingClientRect()
                if(!(
                    c.getBoundingClientRect().top > rect2.bottom ||
                    c.getBoundingClientRect().right < rect2.left ||
                    c.getBoundingClientRect().bottom < rect2.top ||
                    c.getBoundingClientRect().left > rect2.right
                  )){
                    if(PressEBorder.find((ele) => ele == i) != undefined) PressEtoInteractShow()
                    c.style.left = (parseFloat(c.style.left) - (moveSpeed * windowHeight / windowWidth)).toString() + "%"
                  return;}
            }
            if(left + (moveSpeed * windowHeight / windowWidth) >= WallBorder[0] &&
                    left + width + (moveSpeed * windowHeight / windowWidth) <= WallBorder[1] &&
                    top >= WallBorder[2] &&
                    top + height <= WallBorder[3]){
                        
                    }
            else c.style.left = (parseFloat(c.style.left) - (moveSpeed * windowHeight / windowWidth)).toString() + "%"
            
        }

        if(e.which == 87){
            c.style.top = (parseFloat(c.style.top) - moveSpeed).toString() + "%"
            for(var i=0;i<MoveBorder.length;i++){
                rect2 = document.getElementById(MoveBorder[i]).getBoundingClientRect()
                if(!(
                    c.getBoundingClientRect().top > rect2.bottom ||
                    c.getBoundingClientRect().right < rect2.left ||
                    c.getBoundingClientRect().bottom < rect2.top ||
                    c.getBoundingClientRect().left > rect2.right
                  )){
                    if(PressEBorder.find((ele) => ele == i) != undefined) PressEtoInteractShow()
                    c.style.top = (parseFloat(c.style.top) + moveSpeed).toString() + "%"
                    return ;
                  }
            }
            
            if(left  >= WallBorder[0] &&
                left + width  <= WallBorder[1] &&
                top - moveSpeed >= WallBorder[2] &&
                top + height - moveSpeed <= WallBorder[3])
            {}
            else c.style.top = (parseFloat(c.style.top) + moveSpeed).toString() + "%"
            
        }

        if(e.which == 83){
            c.style.top = (parseFloat(c.style.top) + moveSpeed).toString() + "%"
            for(var i=0;i<MoveBorder.length;i++){
                rect2 = document.getElementById(MoveBorder[i]).getBoundingClientRect()
                if(!(
                    c.getBoundingClientRect().top > rect2.bottom ||
                    c.getBoundingClientRect().right < rect2.left ||
                    c.getBoundingClientRect().bottom < rect2.top ||
                    c.getBoundingClientRect().left > rect2.right
                  )){
                    if(PressEBorder.find((ele) => ele == i) != undefined) PressEtoInteractShow()
                    c.style.top = (parseFloat(c.style.top) - moveSpeed).toString() + "%"
                    return ;
                  }
            }
            if(left  >= WallBorder[0] &&
                left + width  <= WallBorder[1] &&
                top + moveSpeed >= WallBorder[2] &&
                top + height + moveSpeed <= WallBorder[3]){}
            else c.style.top = (parseFloat(c.style.top) - moveSpeed).toString() + "%"
            
        }
        PressE2Interact_Label.hide()
    }

}



document.onkeydown = CharacterBtnDetection