function PressE2Interact_LabelSetup(){
    PressE2Interact_Label = createImg("image/pressE2.png","pressE")
    PressE2Interact_Label.style("position:absolute;:width:10%;height:3%;background:transparent;")
    PressE2Interact_Label.hide()
}

function PressEtoInteractShow(){
    PressE2Interact_Label.show()
    var c = document.getElementById("mainCharacter")
    PressE2Interact_Label.style("top",(parseFloat(c.style.top) - 5).toString() + "%")
    PressE2Interact_Label.style("left",((parseFloat(c.style.left))).toString() + "%")
}