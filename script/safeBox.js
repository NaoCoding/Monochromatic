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
// 請輸入 top 和 left 和 width 和 height 和色碼和三個秒數。
async function ProgressBar_generator(
  _top,
  _left,
  _width,
  _height,
  _color,
  sec1,
  sec2,
  sec3
) {
  // 遊戲進度
  let progressContainer = createDiv("");
  progressContainer.style("position", "absolute");
  progressContainer.style(
    "top:" + _top.toString() + "%" + "; left: " + _left.toString() + "%"
  );
  progressContainer.style(
    "width:" + _width.toString() + "%" + ";height: " + _height.toString() + "%"
  );
  progressContainer.style("display: flex; align-items: center");
  progressContainer.style("zIndex:100");

  // 進度條
  let progressBarContainer = createDiv("");
  progressBarContainer.parent(progressContainer);
  progressBarContainer.style(
    "width:" + _width.toString() + "%" + ";height: " + _height.toString() + "%"
  );
  progressBarContainer.style("background-color", "#ddd");
  progressBarContainer.style("border-radius", "10px");
  progressBarContainer.style("zIndex:100");

  let progressBar = createDiv("");
  progressBar.parent(progressBarContainer);
  progressBar.style("width: 0%; height: 100%"); // 這邊是改進度的地方呦，提醒我自己是把參數傳過來這邊，不然找步道 QQ
  progressBar.style("background-color", "#" + _color.toString());
  progressBar.style("border-radius", "10px");
  let sec = sec1 + sec2 + sec3;
  console.log(sec.toString())
  progressBar.style("transition", "width 4s");
  progressBar.style("zIndex:100");

  setTimeout(() => {
    updateProgressBar(progressBar, 50);
  }, sec1);

  // 在2秒後將進度條設置為75%
  setTimeout(() => {
    updateProgressBar(progressBar, 75);
  }, sec2);

  // 在3秒後將進度條設置為100%
  setTimeout(() => {
    updateProgressBar(progressBar, 100);
  }, sec3);
  await delay(sec);
  progressBar.hide();
  progressBarContainer.hide();
  progressContainer.hide();
}

async function bedroom_safeBoxTrigger() {
  isControlingCharacter = 0;
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
    if (touchSafeBox == 0) touchSafeBox = 1;
    dialogBox.show();
    if (touchSafeBox != 2) {
      dialogBoxFunction("Sorry you don't have the password! Go find the password!");
      await delay(4000);
      dialogBox.hide();
    } else {
      dialogBoxFunction("Let me check your password for a few second....");
      await delay(4000);
      dialogBox.hide();

      await ProgressBar_generator(50, 36, 40, 15, 808081, 1000, 2000, 3000);

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
  isControlingCharacter = 1;
}
