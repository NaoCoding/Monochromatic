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

  safeBox = createImg("image/bedroom_safebox.png", "safeBox");
  safeBox.style("position:absolute;bottom:15%;left:38%;width:10%;height:10%;");
  safeBox.attribute("id", "safeBox");
  safeBox.show();
}

function updateProgressBar(progressBar, percentage) {
  progressBar.style("width", `${percentage}%`);
}

async function safeBoxTrigger() {
  dialogBox.show();
  dialogBoxFunction(
    "Are you looking for some secret? Press Y for yes, N for no."
  );

  window.resolvePromise = () => {};
  window.addEventListener("keydown", handleKeyDown);
  await delay(3000);

  const userConfirmed = await waitForUserInput();
  //   dialogBox.hide();

  if (userConfirmed) {
    console.log("User pressed Y");
    if (touchSafeBox == 0) touchSafeBox = 2;
    dialogBox.show();
    if (touchSafeBox != 2) {
      dialogBoxFunction("Sorry you don't have the key! Go find the key!");
      await delay(4000);
      dialogBox.hide();
    } else {
      dialogBoxFunction("Let me check your key for a few second....");
      await delay(4000);
      dialogBox.hide();
      // 遊戲進度
      let progressContainer = createDiv("");
      progressContainer.style("position", "absolute");
      progressContainer.style("top: 50%; left: 36%");
      progressContainer.style("width: 40%; height: 15%");
      progressContainer.style("display: flex; align-items: center");

      // 進度條
      let progressBarContainer = createDiv("");
      progressBarContainer.parent(progressContainer);
      progressBarContainer.style("width: 40%; height: 15%");
      progressBarContainer.style("background-color", "#ddd");
      progressBarContainer.style("border-radius", "10px");

      let progressBar = createDiv("");
      progressBar.parent(progressBarContainer);
      progressBar.style("width: 0%; height: 100%"); // 這邊是改進度的地方呦，提醒我自己是把參數傳過來這邊，不然找步道 QQ
      progressBar.style("background-color", "#4caf50");
      progressBar.style("border-radius", "10px");
      progressBar.style("transition", "width 4s");

      setTimeout(() => {
        updateProgressBar(progressBar, 50);
      }, 1000);

      // 在2秒後將進度條設置為75%
      setTimeout(() => {
        updateProgressBar(progressBar, 75);
      }, 2000);

      // 在3秒後將進度條設置為100%
      setTimeout(() => {
        updateProgressBar(progressBar, 100);
      }, 3000);
      await delay(7000);
      progressBar.hide();
      progressBarContainer.hide();
      progressContainer.hide();

      dialogBox.show();
      dialogBoxFunction("The safe box was successfully opened!");
      await delay(3000);
      dialogBoxFunction("This is the key for you. Go ahead!");
      await delay(3000);
      dialogBox.hide();
    }
  } else {
    console.log("User did not press Y");
    dialogBox.show();
    dialogBoxFunction("Good luck and goodbye!");
    await delay(3000);
    dialogBox.hide();
    if (touchSafeBox == 0) touchSafeBox = 0;
  }
}
