function PressE2Interact_LabelSetup() {
  PressE2Interact_Label = createImg("image/pressE2.png", "pressE");
  PressE2Interact_Label.style(
    "position:absolute;:width:10%;height:3%;background:transparent;"
  );
  PressE2Interact_Label.hide();
}

function PressEtoInteractShow() {
  PressE2Interact_Label.show();
  var c = document.getElementById("mainCharacter");
  PressE2Interact_Label.style(
    "top",
    (parseFloat(c.style.top) - 5).toString() + "%"
  );
  PressE2Interact_Label.style(
    "left",
    parseFloat(c.style.left).toString() + "%"
  );
}

function InteractObject(idx) {
  canInteract = -1;
  if (MoveBorder[idx] == "bedroom_Bed") bedroom_BedDialogBox();
  else if(MoveBorder[idx] == "bedroom_pcDesk") bedroom_pcDeskDialogBox();
  else if (MoveBorder[idx] == "safeBox") bedroom_safeBoxTrigger();
  else if(MoveBorder[idx] == "bedroom_closet") bedroom_ClosetDialogBox();
  else if(MoveBorder[idx] == "bedroom_date") bedroom_DateDialogBox();
  else if(MoveBorder[idx] == "bedroom_bookshelf") bedroom_BookSheifDialogBox()
  else if(MoveBorder[idx] == "bedroom_door") bedroom_DoorDialogBox()

  else if(MoveBorder[idx] == "livingroom_sova") livingroom_sovaDialogBox()
  else if(MoveBorder[idx] == "livingroom_door2bed")livingroom_door2bedDialogBox()

  else if(MoveBorder[idx] == "livingroom_bigTable")livingroom_bigTableDialogBox()
  else if(MoveBorder[idx] == "livingroom_door2outside")livingroom_door2outsideDialogBox()
  else if(MoveBorder[idx] == "livingroom_door2parent")livingroom_door2parentDialogBox()
  else if(MoveBorder[idx] == "livingroom_photo")livingroom_photoDialogBox()
  else if(MoveBorder[idx] == "livingroom_flower")livingroom_flowerDialogBox()

  else if(MoveBorder[idx] == "parent_door")parent_doorDialogBox()
  else if(MoveBorder[idx] == "parent_doll")parent_dollDialogBox()
  else if(MoveBorder[idx] == "parent_closet")parent_closetDialogBox()
  else if(MoveBorder[idx] == "parent_smallBed")parent_smallBedDialogBox()
  else if(MoveBorder[idx] == "parent_bigBed")parent_bigBedDialogBox()
  else if(MoveBorder[idx] == "livingroom_flower")livingroom_flowerDialogBox()
}

canInteract = -1;
