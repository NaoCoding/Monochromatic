// 切換道具紀錄背包視窗的顯示與隱藏
function toggleInventory() {
  if (showInventory) {
    inventoryWindow.hide();
  } else {
    inventoryWindow.show();
  }
  showInventory = !showInventory;
}
// 切換顏色的按鈕外觀
function ColorChangedButton(button) {
  button.style("zIndex:5")
  button.style("padding: 10px 20px; font-size:16px");
  button.style("color", "white");
  button.style("background", "linear-gradient(135deg, #42a5f5, #478ed1)");
  button.style("border: none; border-radius: 20px");
  button.style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)");
  button.style("cursor: pointer");
  button.style("transition", "all 0.3s");
  button.mouseOver(() => {
    button.style("background", "linear-gradient(135deg, #478ed1, #42a5f5)");
    button.style("box-shadow", "0 6px 12px rgba(0, 0, 0, 0.3)");
  });
  button.mouseOut(() => {
    button.style("background", "linear-gradient(135deg, #42a5f5, #478ed1)");
    button.style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)");
  });
}
// 背包的外觀
function InventoryButton_Style(button) {
  button.style("padding: 10px 20px; font-size:16px");
  button.style("color", "white");
  button.style(
    "background",
    `url('image/inventory.png') no-repeat center center`
  );
  button.style("background-size", "contain");
  button.style("width: 80px; height: 80px");
  //   button.style("background", "linear-gradient(135deg, #42a5f5, #478ed1)");
  button.style("border: none; border-radius: 20px");
  button.style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)");
  button.style("cursor: pointer");
  button.style("transition", "all 0.3s");
  button.mouseOver(() => {
    button.style("box-shadow", "0 6px 12px rgba(0, 0, 0, 0.3)");
  });
  button.mouseOut(() => {
    button.style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)");
  });
  button.style("zIndex:5")
}
// 點擊到切換顏色的按鈕時會觸發
function triggerColorChanged() {
  console.log("trigger color changed");
}

// 背包界面
function InventoryInterface() {
  // 創建道具紀錄背包視窗
  inventoryWindow = createDiv("");
  inventoryWindow.style("position", "absolute");
  inventoryWindow.style("top: 10%; left: 25%");
  inventoryWindow.style("width: 50%; height: 80%");
  inventoryWindow.style("background-color: rgba(255, 255, 255, 0.97)");
  inventoryWindow.style("border: 1px solid black");
  inventoryWindow.style("zIndex:10")
  inventoryWindow.hide(); // 初始狀態隱藏
}

function colorAndInventSetup() {
  colorButton = createButton("切換顏色");
  colorButton.style("position", "absolute");
  colorButton.style("top: 5%; left: 3%");
  colorButton.mousePressed(triggerColorChanged);
  colorButton.hide()
  ColorChangedButton(colorButton);

  // 創建道具紀錄背包按鈕
  inventoryButton = createButton("");
  inventoryButton.style("position", "absolute");
  inventoryButton.style("top: 5%; right: 3%");
  InventoryButton_Style(inventoryButton);
  inventoryButton.mousePressed(toggleInventory);
  inventoryButton.hide()

  InventoryInterface();
}
