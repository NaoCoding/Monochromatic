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
}

canInteract = -1;
