function waitForUserInput() {
  return new Promise((resolve) => {
    window.resolvePromise = resolve;
  });
}

function handleKeyDown(event) {
  if (event.key === "y" || event.key === "Y") {
    window.resolvePromise(true);
  } else if (event.key === "n" || event.key === "N") {
    window.resolvePromise(false);
  }
}

function safeBoxSetup() {
  MoveBorder.push("safeBox"); // 各個物件

  safeBox = createImg("image/safeBox_img.png", "safeBox");
  safeBox.style("position:absolute;top:15%;left:38%;width:12%;height:15%;");
  safeBox.attribute("id", "safeBox");
  safeBox.show();

  //   inventoryButton.show();
  //   colorButton.show();
}

async function safeBoxTrigger() {
  dialogBox.show();
  dialogBoxFunction("Are you looking for some secret?");

  window.resolvePromise = () => {};
  window.addEventListener("keydown", handleKeyDown);
  await delay(3000); // 等待 3 秒

  const userConfirmed = await waitForUserInput();
  dialogBox.hide();

  if (userConfirmed) {
    console.log("User pressed Y");
    touchSafeBox = 1;
  } else {
    console.log("User did not press Y");
    dialogBoxFunction("Good luck and goodbye!");
    await delay(3000);
    disalogBox.hide();
    touchSafeBox = 0;
  }
}
