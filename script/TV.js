sisterBirthday = 0;

async function livingroom_TVdialogBox() {
  let tvWindow = createDiv("");
  tvWindow.style("position", "absolute");
  tvWindow.style("top: 10%; left: 25%");
  tvWindow.style("width: 50%; height: 60%");
  tvWindow.style("background-color: rgba(255, 255, 255, 0.97)");
  tvWindow.style("border: 1px solid black");
  tvWindow.style("zIndex:10");
  tvWindow.style("padding: 20px");

  let tvScreen = createDiv("");
  tvScreen.style(
    "width: 75%; height: 85%; background-color: black; border: 1px solid black; position: relative; float: right;"
  );
  tvScreen.parent(tvWindow);

  let channelDisplay = createDiv("0");
  channelDisplay.style(
    "position: absolute; top: 10px; right: 10px; font-size: 20px; color: white;"
  );
  channelDisplay.parent(tvScreen);

  let keypad = createDiv("");
  keypad.style(
    "width: 20%; display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 10px; margin-top: 20px; float: left;"
  );
  keypad.parent(tvWindow);

  let currentChannel = "";

  async function updateScreen() {
    if (currentChannel === "213") {
      tvScreen.style("background-color", "blue");
      sisterBirthday = 1;
    } else {
      tvScreen.style("background-color", "black");
      dialogBox.show();
      // dialogBoxFunction("Happy birthday to you. Happy birthday to you.");
      dialogBoxFunction("This little flower is so cute");
      await delay(3000);
      // dialogBoxFunction("Today is ......");
      dialogBoxFunction("Mom loves growing these lovely plants.");
      await delay(3500);
      // dialogBoxFunction("This little flower is so cute");
      // await delay(2000);
      dialogBox.hide();
      currentChannel = "";
      channelDisplay.html("0");
    }
  }

  function buttonPressed(value) {
    if (currentChannel.length < 3) {
      currentChannel += value;
      channelDisplay.html(currentChannel);
      if (currentChannel.length === 3) {
        updateScreen();
      }
    }
  }

  for (let i = 1; i <= 9; i++) {
    let button = createButton(i);
    button.style(
      "width: 100%; padding: 10px; font-size: 16px; border: 1px solid black; border-radius: 5px; cursor: pointer;"
    );
    button.mousePressed(() => buttonPressed(i));
    button.parent(keypad);
  }

  let closeButton = createButton("Close");
  closeButton.style(
    "margin-top: 20px; padding: 10px; font-size: 16px; border: 1px solid black; border-radius: 5px; cursor: pointer;"
  );
  closeButton.mousePressed(() => tvWindow.hide());
  closeButton.parent(tvWindow);

  tvWindow.show();
}
