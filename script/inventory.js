let closetKeyState = 0,
    diaryState = 0,
    bedroomKeyState = 0,
    computerKeyState = 0,
    safeBoxKeyState = 0,
    controlerState = 0;
inventoryItemBag = [
    ["closet_key.png", 0],
    ["diary.png", 0],
    ["door_key.png", 0],
    ["ToComputer.png", 0],
    ["password_paper.png", 0],
    ["controler.png", 0],
];

function update_inventory() {
    if (closetKeyState == 1) {
        inventoryItemBag[0][1] = 1;
    } else {
        inventoryItemBag[0][1] = 0;
    }
    if (diaryState == 1) {
        inventoryItemBag[1][1] = 1;
    } else {
        inventoryItemBag[1][1] = 0;
    }
    if (bedroomKeyState == 1) {
        inventoryItemBag[2][1] = 1;
    } else {
        inventoryItemBag[2][1] = 0;
    }
    if (computerKeyState == 1) {
        inventoryItemBag[3][1] = 1;
    } else {
        inventoryItemBag[3][1] = 0;
    }
    if (safeBoxKeyState == 1) {
        inventoryItemBag[4][1] = 1;
    } else {
        inventoryItemBag[4][1] = 0;
    }
    if (controlerState == 1) {
        inventoryItemBag[5][1] = 1;
    } else {
        inventoryItemBag[5][1] = 0;
    }
}
function inventoryCheck(start) {
    for (let i = start; i < inventoryItemBag.length; i++) {
        if (inventoryItemBag[i][1] == 1) {
            return [inventoryItemBag[i][0], i];
        }
    }
    return [null, null];
}

async function handleItemClick(itemId) {
    switch (itemId) {
        case 0:
            if (isControlingCharacter == 1) {
                isControlingCharacter = 0;
                console.log("Closet Key clicked");
                dialogBox.show();
                await dialogBoxFunction("Wow! A special Key.");
                dialogBox.hide();
                isControlingCharacter = 1;
            }
            break;
        case 1:
            if (isControlingCharacter == 1) {
                isControlingCharacter = 0;
                console.log("Diary clicked");
                dialogBox.show();
                await dialogBoxFunction("I am tired. My life is meaningless.");
                await dialogBoxFunction("Today We went on a vacation, but what day is today?");
                await dialogBoxFunction("Oh no. My brain can't remember what day it was!!!!");
                dialogBox.hide();
                isControlingCharacter = 1;
            }
            break;
        case 2:
            if (isControlingCharacter == 1) {
                isControlingCharacter = 0;
                console.log("Bedroom Key clicked");
                dialogBox.show();
                await dialogBoxFunction("Now is time to get out of the roooooom.");
                dialogBox.hide();
                isControlingCharacter = 1;
            }
            break;
        case 3:
            if (isControlingCharacter == 1) {
                isControlingCharacter = 0;
                console.log("Password Paper clicked");
                dialogBox.show();
                await dialogBoxFunction("Password: 87299403");
                dialogBox.hide();
                isControlingCharacter = 1;
            }
            break;
        case 4:
            if (isControlingCharacter == 1) {
                isControlingCharacter = 0;
                console.log("To Safe Box clicked");
                dialogBox.show();
                await dialogBoxFunction("Maybe somewhere need this key.");
                dialogBox.hide();
                isControlingCharacter = 1;
            }
            break;
        case 5:
            if (isControlingCharacter == 1) {
                isControlingCharacter = 0;
                console.log("Controller Clicked");
                dialogBox.show();
                await dialogBoxFunction("There may be some important information on the TV.");
                dialogBox.hide();
                isControlingCharacter = 1;
            }
            break;
        default:
            console.log("Unknown item clicked");
            break;
    }
}

// 背包界面
async function InventoryInterface() {
    // 創建道具紀錄背包視窗
    inventoryWindow = createDiv("");
    inventoryWindow.style("position", "absolute");
    inventoryWindow.style("top: 10%; left: 25%");
    inventoryWindow.style("width: 50%; height: 80%");
    inventoryWindow.style("background-color: rgba(255, 255, 255, 0.97)");
    inventoryWindow.style("border: 1px solid black");
    inventoryWindow.style("zIndex:10");

    title = createDiv("背包");
    title.parent(inventoryWindow);
    title.style("font-size: 24px; text-align: center; margin: 2% 0");
    // 關閉按鈕
    close = createDiv("X  ");
    close.parent(inventoryWindow);
    close.style("cursor: pointer");
    close.style("position", "absolute");
    close.style("top: 2%; right: 10px");
    close.mousePressed(toggleInventory);

    // 人物資訊
    charInfo = createDiv("");
    charInfo.parent(inventoryWindow);
    charInfo.style("position", "absolute");
    //   charInfo.style("left: 45%");
    //   charName.style("display: flex; align-items: center; justify-content: center");
    charInfo.style("width: 45%; height: 90%");
    //   charInfo.style("border: 1px solid black");

    // 人物照片
    charer = createDiv("");
    charer.parent(charInfo);
    charer.style("position", "absolute");
    charer.style("top: 5px; left: 12%");
    charer.style("width: 70%; height: 45%");
    charer.style("border: 1px solid black");

    // 人物名字
    charName = createDiv("Wlick");
    charName.parent(charInfo);
    charName.style("position", "absolute");
    charName.style("display: flex; align-items: center; justify-content: center");
    charName.style("top: 48%; left: 27%");
    charName.style("width: 35%; height: 10%");
    charName.style("border: 1px solid black");

    colorCollect = createDiv("");
    collector = createDiv("");
    collector.parent(inventoryWindow);
    collector.style("position", "absolute");
    collector.style("top: 10%; right: 5%");
    collector.style("width: 50%; height: 70%");
    collector.style("border: 1px solid black");

    collect = createDiv("");
    collect.parent(collector);
    collect.style("display: grid; grid-template-columns: repeat(3, 1fr)");
    collect.style("grid-gap: 10px");
    collect.style("padding: 20px");
    collect.style("row-gap: 3em");

    let start = 0;
    for (let i = 0; i < 15; i++) {
        let item = createDiv("");
        item.style("width: 50px; height: 50px");
        item.style("background-color: lightgrey; border: 1px solid black; border-radius: 10px");
        item.style("display: flex; align-items: center; justify-content: center");
        item.style("cursor: pointer");
        val = inventoryCheck(start);
        if (val[0] != null) {
            console.log(val[0]);
            let img = createImg(`image/${val[0]}`, `${val[0]}`);
            img.parent(item);
            img.style("width: 100%; height: 100%; object-fit: cover; border-radius: 10px");
            item.attribute("data-item-id", val[1]);
        }
        if (val[0] != null) {
            start = val[1] + 1;
        }

        // 添加點擊事件
        item.mousePressed(() => {
            // isControlingCharacter = 1;
            let itemId = parseInt(item.attribute("data-item-id"));
            handleItemClick(itemId);
        });

        // 添加懸停事件
        item.mouseOver(() => {
            item.style("background-color", "#e0e0e0");
        });

        item.mouseOut(() => {
            item.style("background-color", "lightgrey");
        });

        collect.child(item);
    }

    inventoryWindow.hide(); // 初始狀態隱藏
}
