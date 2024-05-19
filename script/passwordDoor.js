async function passwordDoorDialogBox() {
  let doorWindow = createDiv("");
  doorWindow.style("position", "absolute");
  doorWindow.style("top: 10%; left: 25%");
  doorWindow.style("width: 50%; height: 80%");
  doorWindow.style("background-color: rgba(255, 255, 255, 0.97)");
  doorWindow.style("border: 1px solid black");
  doorWindow.style("zIndex: 10");
  doorWindow.style("padding: 20px");

  let inputDisplay = createDiv("");
  inputDisplay.style(
    "width: 100%; height: 20%; background-color: white; border: 1px solid black; display: flex; align-items: center; justify-content: center; font-size: 24px;"
  );
  inputDisplay.parent(doorWindow);

  let keypad = createDiv("");
  keypad.style(
    "display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 10px; margin-top: 20px;"
  );
  keypad.parent(doorWindow);

  let currentInput = "";

  function updateDisplay() {
    inputDisplay.html(currentInput);
  }

  async function checkPassword() {
    if (currentInput === "0517") {
      isParentDoorUnlock = 1;
      dialogBox.show();
      dialogBoxFunction("Unlocked!");
      await delay(3000);
      dialogBox.hide();
      doorWindow.hide();
    } else {
      dialogBox.show();
      dialogBoxFunction("Incorrect password, please try again.");
      await delay(3000);
      dialogBox.hide();
      currentInput = "";
      updateDisplay();
    }
  }

  function buttonPressed(value) {
    if (currentInput.length < 4) {
      currentInput += value;
      updateDisplay();
      if (currentInput.length === 4) {
        checkPassword();
      }
    }
  }

  for (let i = 1; i <= 9; i++) {
    let button = createButton(i);
    button.style(
      "width: 100%; padding: 20px; font-size: 20px; border: 1px solid black; border-radius: 5px; cursor: pointer; background-color: #e0e0e0; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); transition: background-color 0.3s, box-shadow 0.3s;"
    );
    button.mouseOver(() => {
      button.style("background-color", "#d0d0d0");
      button.style("box-shadow", "3px 3px 7px rgba(0, 0, 0, 0.3)");
    });
    button.mouseOut(() => {
      button.style("background-color", "#e0e0e0");
      button.style("box-shadow", "2px 2px 5px rgba(0, 0, 0, 0.2)");
    });
    button.mousePressed(() => buttonPressed(i));
    button.parent(keypad);
  }

  let zeroButton = createButton(0);
  zeroButton.style(
    "width: 100%; padding: 20px; font-size: 20px; border: 1px solid black; border-radius: 5px; cursor: pointer; background-color: #e0e0e0; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); transition: background-color 0.3s, box-shadow 0.3s;"
  );
  zeroButton.mouseOver(() => {
    zeroButton.style("background-color", "#d0d0d0");
    zeroButton.style("box-shadow", "3px 3px 7px rgba(0, 0, 0, 0.3)");
  });
  zeroButton.mouseOut(() => {
    zeroButton.style("background-color", "#e0e0e0");
    zeroButton.style("box-shadow", "2px 2px 5px rgba(0, 0, 0, 0.2)");
  });
  zeroButton.mousePressed(() => buttonPressed(0));
  zeroButton.parent(keypad);

  let closeButton = createButton("Close");
  closeButton.style(
    "margin-top: 20px; padding: 10px; font-size: 16px; border: 1px solid black; border-radius: 5px; cursor: pointer; background-color: #f0f0f0; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); transition: background-color 0.3s, box-shadow 0.3s;"
  );
  closeButton.mouseOver(() => {
    closeButton.style("background-color", "#e0e0e0");
    closeButton.style("box-shadow", "3px 3px 7px rgba(0, 0, 0, 0.3)");
  });
  closeButton.mouseOut(() => {
    closeButton.style("background-color", "#f0f0f0");
    closeButton.style("box-shadow", "2px 2px 5px rgba(0, 0, 0, 0.2)");
  });
  closeButton.mousePressed(() => doorWindow.hide());
  closeButton.parent(doorWindow);

  doorWindow.show();
}
