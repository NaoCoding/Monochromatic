function CharacterSetup() {
    mainCharacter = createImg("image/mainCharacterfront1.png", "mainCharacter");
    mainCharacter.style("position:absolute");
    mainCharacter.style("top:25%;left:30%");
    mainCharacter.style("zIndex:2");
    mainCharacter.style("width:7%;height:14%;background:transparent");
    mainCharacter.attribute("id", "mainCharacter");
    mainCharacter.hide();
}

let movedCount = 0;
const pressed = new Set();
let movingHandler = null;

function CharacterBtnDetection(e) {
    if (isControlingCharacter == 1) {
        FlashLightWhite_getXY();

        if (e.which == 69) {
            if (canInteract != -1) {
                document.getElementById("pressESound").volume = 0.2;
                document.getElementById("pressESound").play();
                InteractObject(canInteract);
            }
        }
        PressE2Interact_Label.hide();
        canInteract = -1;
    }
}

function moveCharacter() {
    const c = document.getElementById("mainCharacter");
    const moveSpeed = 0.1;

    if (isControlingCharacter == 1) {
        FlashLightWhite_getXY();
        const left = parseFloat(c.style.left);
        const top = parseFloat(c.style.top);
        const width = parseFloat(c.style.width);
        const height = parseFloat(c.style.height);

        if (pressed.has("a") && !pressed.has("d")) {
            movedCount += 1;
            c.src = "image/mainCharacterside" + moveAnimationArr[moveIDX] + ".png";
            moveIDX += 1;
            mainCharacter.style("transform:scaleX(1);");
            if (moveIDX > 19) moveIDX = 0;
            c.style.left = (parseFloat(c.style.left) - (moveSpeed * windowHeight) / windowWidth).toString() + "%";
            for (let i = 0; i < MoveBorder.length; i++) {
                rect2 = document.getElementById(MoveBorder[i]).getBoundingClientRect();
                if (
                    !(
                        c.getBoundingClientRect().top > rect2.bottom ||
                        c.getBoundingClientRect().right < rect2.left ||
                        c.getBoundingClientRect().bottom < rect2.top ||
                        c.getBoundingClientRect().left > rect2.right
                    )
                ) {
                    if (PressEBorder.find((ele) => ele == i) != undefined) {
                        PressEtoInteractShow();
                        canInteract = i;
                    }
                    c.style.left = (parseFloat(c.style.left) + (moveSpeed * windowHeight) / windowWidth).toString() + "%";
                    return;
                }
            }

            if (
                left - (moveSpeed * windowHeight) / windowWidth >= WallBorder[0] &&
                left + width - (moveSpeed * windowHeight) / windowWidth <= WallBorder[1] &&
                top >= WallBorder[2] &&
                top + height <= WallBorder[3]
            ) {
            } else c.style.left = (parseFloat(c.style.left) + (moveSpeed * windowHeight) / windowWidth).toString() + "%";
        }

        if (pressed.has("d") && !pressed.has("a")) {
            movedCount += 1;
            c.style.left = (parseFloat(c.style.left) + (moveSpeed * windowHeight) / windowWidth).toString() + "%";
            c.src = "image/mainCharacterside" + moveAnimationArr[moveIDX] + ".png";
            moveIDX += 1;
            mainCharacter.style("transform:scaleX(-1);");
            if (moveIDX > 19) moveIDX = 0;

            for (let i = 0; i < MoveBorder.length; i++) {
                rect2 = document.getElementById(MoveBorder[i]).getBoundingClientRect();
                if (
                    !(
                        c.getBoundingClientRect().top > rect2.bottom ||
                        c.getBoundingClientRect().right < rect2.left ||
                        c.getBoundingClientRect().bottom < rect2.top ||
                        c.getBoundingClientRect().left > rect2.right
                    )
                ) {
                    if (PressEBorder.find((ele) => ele == i) != undefined) {
                        PressEtoInteractShow();
                        canInteract = i;
                    }
                    c.style.left = (parseFloat(c.style.left) - (moveSpeed * windowHeight) / windowWidth).toString() + "%";
                    return;
                }
            }
            if (
                left + (moveSpeed * windowHeight) / windowWidth >= WallBorder[0] &&
                left + width + (moveSpeed * windowHeight) / windowWidth <= WallBorder[1] &&
                top >= WallBorder[2] &&
                top + height <= WallBorder[3]
            ) {
            } else c.style.left = (parseFloat(c.style.left) - (moveSpeed * windowHeight) / windowWidth).toString() + "%";
        }

        if (pressed.has("w") && !pressed.has("s")) {
            movedCount += 1;
            c.src = "image/mainCharacterback" + moveAnimationArr[moveIDX] + ".png";
            moveIDX += 1;
            if (moveIDX > 19) moveIDX = 0;
            c.style.top = (parseFloat(c.style.top) - moveSpeed).toString() + "%";
            for (let i = 0; i < MoveBorder.length; i++) {
                rect2 = document.getElementById(MoveBorder[i]).getBoundingClientRect();
                if (
                    !(
                        c.getBoundingClientRect().top > rect2.bottom ||
                        c.getBoundingClientRect().right < rect2.left ||
                        c.getBoundingClientRect().bottom < rect2.top ||
                        c.getBoundingClientRect().left > rect2.right
                    )
                ) {
                    if (PressEBorder.find((ele) => ele == i) != undefined) {
                        PressEtoInteractShow();
                        canInteract = i;
                    }
                    c.style.top = (parseFloat(c.style.top) + moveSpeed).toString() + "%";
                    return;
                }
            }

            if (left >= WallBorder[0] && left + width <= WallBorder[1] && top - moveSpeed >= WallBorder[2] && top + height - moveSpeed <= WallBorder[3]) {
            } else c.style.top = (parseFloat(c.style.top) + moveSpeed).toString() + "%";
        }

        if (pressed.has("s") && !pressed.has("w")) {
            movedCount += 1;
            c.src = "image/mainCharacterfront" + moveAnimationArr[moveIDX] + ".png";
            moveIDX += 1;
            if (moveIDX > 19) moveIDX = 0;
            c.style.top = (parseFloat(c.style.top) + moveSpeed).toString() + "%";
            for (let i = 0; i < MoveBorder.length; i++) {
                rect2 = document.getElementById(MoveBorder[i]).getBoundingClientRect();
                if (
                    !(
                        c.getBoundingClientRect().top > rect2.bottom ||
                        c.getBoundingClientRect().right < rect2.left ||
                        c.getBoundingClientRect().bottom < rect2.top ||
                        c.getBoundingClientRect().left > rect2.right
                    )
                ) {
                    if (PressEBorder.find((ele) => ele == i) != undefined) {
                        PressEtoInteractShow();
                        canInteract = i;
                    }
                    c.style.top = (parseFloat(c.style.top) - moveSpeed).toString() + "%";
                    return;
                }
            }
            if (left >= WallBorder[0] && left + width <= WallBorder[1] && top + moveSpeed >= WallBorder[2] && top + height + moveSpeed <= WallBorder[3]) {
            } else c.style.top = (parseFloat(c.style.top) - moveSpeed).toString() + "%";
        }
        if (movedCount >= 5) moveHint.hide();
    }
}

function enableMoving() {
    if (movingHandler) {
        return;
    }

    movingHandler = requestAnimationFrame(function move() {
        moveCharacter();
        movingHandler = requestAnimationFrame(move);
    });
}

function disableMoving() {
    if (movingHandler) {
        cancelAnimationFrame(movingHandler);
        movingHandler = null;
    }
}

moveAnimationArr = "11111222221111133333";
moveIDX = 0;

document.onkeydown = (e) => {
    const key = e.key.toLowerCase();
    pressed.add(key);
    CharacterBtnDetection(e);
};
document.onkeyup = (e) => {
    const key = e.key.toLowerCase();
    pressed.delete(key);
};
