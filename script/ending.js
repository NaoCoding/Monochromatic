let ending_background1,ending_background2,option1Btn,option2Btn
var ccct = 0

async function ChangeBackground(){

    var t = 1
    ending_background2.show()
    var c = 0
    var q = setInterval(() => {
        document.getElementById("ending_background1").style.opacity = t
        document.getElementById("ending_background2").style.opacity = 1-t
        t -= 0.01
        if(t <= 0){
            clearInterval(q)
            c = 1
        }
    }, 25);

    while(c == 0){
        await delay(0.001)
    }

    await delay(1000)
    
    /*


    t = 1
    ending_background1.attribute("src","image/ending_background2.png")
    var c = 0
    var q = setInterval(() => {
        document.getElementById("ending_background1").style.opacity = 1-t
        document.getElementById("ending_background2").style.opacity = t
        t -= 0.01
        if(t <= 0){
            clearInterval(q)
            c = 1
        }
    }, 25);

    
    while(c == 0){
        await delay(0.001)
    }

    */


}

var changeMind = 0


async function start_sceneEnding(){
    ColorStatus = 3
    ScreenNow = 4
    BGM()

    hideLivingRoom()
    hideParentRoom()
    hideBedRoom()
    RoomWall.hide()
    mainCharacter.hide()
    colorButton.hide()
    inventoryButton.hide()
    background.attribute("src","image/black_background.png")


    FlashLightRed.hide()
    FlashLightWhite.hide()
    FlashLightYellow.hide()

    ending_background1 = createImg("image/black_background.png","ending")
    ending_background1.style("position:absolute;width:100%;height:100%;top:0%;left:0%")
    ending_background1.style("zIndex:1000000")
    ending_background1.attribute("id","ending_background1")

    ending_background2 = createImg("image/ending_background1.png","ending")
    ending_background2.style("position:absolute;width:100%;height:100%;top:0%;left:0%")
    ending_background2.style("zIndex:1000001")
    ending_background2.attribute("id","ending_background2")
    ending_background2.hide()

    dialogBox.show()
    dialogBox.style("zIndex:10000000")
    dialogBox.style("fontFamily:Arial;fontSize:36px;")
    dialogBoxFunction("Brother !!!")
    await delay(2500)
    dialogBox.style("fontFamily:cursive;fontSize:36px;")
    dialogBoxFunction("Emu !?")
    await delay(1500)
    dialogBox.style("fontFamily:Arial;fontSize:36px;")
    dialogBoxFunction("You have slept for two days... are you ok?")
    await delay(3500)
    dialogBox.style("fontFamily:cursive;fontSize:36px;")
    dialogBoxFunction("Wait.... I was sleeping... ?")
    await delay(2500)

    dialogBox.hide()

    ChangeBackground()
    await delay(3000)

    dialogBox.show()
    dialogBox.style("fontFamily:Arial;fontSize:36px;")
    dialogBoxFunction("I don't know why the home's door is locked...")
    await delay(4000)
    dialogBoxFunction("Luckily, Wlick you opened the door!")
    await delay(3250)
    dialogBox.style("fontFamily:cursive;fontSize:36px;")
    dialogBoxFunction("( You : I hate you.. Emu... )")
    await delay(3300)

    

    dialogBox.hide()

    option1Btn = createElement("h1")
    option1Btn.style("textAligh:center;position:absolute;")
    option1Btn.style("top:65%;left:10%;width:20%;height:10%;")
    option1Btn.style("zIndex:1000000000")
    option1Btn.html("Let her get into the room and kill her")
    option1Btn.attribute("onclick","ccct = 2")
    option1Btn.attribute("id","option1Btn")
    option1Btn.show()

    option2Btn = createElement("h1")
    option2Btn.style("textAligh:center;position:absolute;")
    option2Btn.style("top:65%;left:75%;width:20%;height:10%;")
    option2Btn.style("zIndex:1000000000")
    option2Btn.html("Tell her a lie and take her to the park")
    option2Btn.attribute("id","option2Btn")
    option2Btn.show()
    option2Btn.attribute("onclick","ccct = 1")


    while(ccct == 0){
        await delay(0.005)
    }

    option1Btn.hide()
    option2Btn.hide()
    ending_background2.attribute("src","image/ending_background3.png")
    ccct = 0

    dialogBox.show()
    dialogBox.style("fontFamily:Arial;fontSize:36px;")
    dialogBoxFunction("Wlick ~ I want to go home ~")
    await delay(3000)
    dialogBoxFunction("I still have homeworks to do ~")
    await delay(3500)
    
    option1Btn.show()
    option2Btn.show()
    dialogBox.hide()

    option1Btn.html("Just let her go in and kill her...")
    option2Btn.html("Try to make her to the park in order to hide the death of parents")


    while(ccct == 0){
        await delay(0.005)
    }
    

    option1Btn.hide()
    option2Btn.hide()
    ending_background2.attribute("src","image/ending_background4.png")
    ccct = 0

    dialogBox.show()
    dialogBox.style("fontFamily:Arial;fontSize:36px;")
    dialogBoxFunction("Why you keep asking me to go to the park?")
    await delay(3500)
    dialogBoxFunction("Are you lying to me?")
    await delay(2750)
    
    option1Btn.show()
    option2Btn.show()
    dialogBox.hide()

    option1Btn.html("Open the door and kill her while she discover the secret...")
    option2Btn.html("Try to make her to the park in order to hide the death of parents")


    while(ccct == 0){
        await delay(5)
    }

    option1Btn.hide()
    option2Btn.hide()
    var cc = 0
    t = 1
    var q = setInterval(() =>{
        document.getElementById("ending_background2").style.opacity = t
    
        t -= 0.01
        if(t <= 0){
            clearInterval(q)
            cc = 1
        }
    },25)

    while(cc == 0){
        await delay(5)
    }
    
    if(ccct == 1){

        cc = 0
        t = 1
        ending_background1.show()
        ending_background1.attribute("src","image/ending_background5.png")
        var q = setInterval(() =>{
            document.getElementById("ending_background1").style.opacity = 1-t
        
            t -= 0.01
            if(t <= 0){
                clearInterval(q)
                cc = 1
            }
        },25)

        while(cc == 0){
            await delay(5)
        }
        dialogBox.show()
        dialogBox.style("fontFamily:Arial;fontSize:36px;")
        dialogBoxFunction("Alright, let's go to the park!")
        await delay(3000)
        dialogBox.style("fontFamily:cursive;fontSize:36px;")
        dialogBoxFunction("I love you Emu...")
        await delay(3000)
        dialogBox.hide()

        ending_background2.show()
        ending_background2.attribute("src","image/ending_background6.png")
        cc = 0
        t = 1
        ending_background1.show()
        var q = setInterval(() =>{
            document.getElementById("ending_background1").style.opacity = t
            document.getElementById("ending_background2").style.opacity = 1-t
            t -= 0.01
            if(t <= 0){
                clearInterval(q)
                cc = 1
            }
        },25)

        while(cc == 0){
            await delay(5)
        }


        main_menu_startGameBtn.show()
        main_menu_GitHubBtn.show()
        main_menu_startGameBtn.attribute("onclick","")
        main_menu_GitHubBtn.attribute("onclick","")
        main_menu_GitHubBtn.style("zIndex:18390840394801840810")
        main_menu_startGameBtn.style("zIndex:18390840394801840810")


        cc = 0
        now = 6
        last = 0
        var q = setInterval(() =>{
            now = now == 6 ? 13 : 6
            ending_background2.attribute("src","image/ending_background" + (now).toString() + ".png")
            cc += 1
            if(cc == 10){
                setInterval(q);
                last = 1
            }


        },500
        )

        while(last == 0){
            await delay(5)
        }
        cc = 0
        t = 1
        ending_background1.attribute("src","image/black_background.png")
        ending_background1.show()
        var q = setInterval(() =>{
            document.getElementById("ending_background2").style.opacity = t
            document.getElementById("ending_background1").style.opacity = 1-t
            t -= 0.01
            if(t <= 0){
                clearInterval(q)
                cc = 1
            }
        },25)
        
        while(cc ==0){
            await delay(5)
        }
        story_tellLabel.show()
        main_menu_GitHubBtn.hide()
        main_menu_startGameBtn.hide()
        story_tellLabel.style("zIndex","278529375873298523957982375892735892")
        story_tellFunction(
            'I hope you can be happy everyday'
          );

        
        


    }
    else{
        cc = 0
        t = 1
        ending_background1.show()
        ending_background1.attribute("src","image/ending_background7.png")
        var q = setInterval(() =>{
            document.getElementById("ending_background1").style.opacity = 1-t
        
            t -= 0.01
            if(t <= 0){
                clearInterval(q)
                cc = 1
            }
        },25)

        while(cc == 0){
            await delay(5)
        }
        dialogBox.show()
        dialogBox.style("fontFamily:Arial;fontSize:36px;")
        dialogBoxFunction("Sorry Brother... I didn't know your feeling...")
        await delay(4000)
        dialogBox.style("fontFamily:cursive;fontSize:36px;")
        dialogBoxFunction("Sorry Emu... GoodBye...")
        await delay(4000)
        dialogBox.hide()

        ending_background1.attribute("src","image/ending_background8.png")
        await delay(1000)
        ending_background1.attribute("src","image/ending_background9.png")
        await delay(1000)
        ending_background1.attribute("src","image/ending_background10.png")
        await delay(1000)
        ending_background1.attribute("src","image/ending_background11.png")
        await delay(1000)

        dialogBox.show()
        dialogBox.style("fontFamily:cursive;fontSize:36px;")
        dialogBoxFunction("GoodBye... Emu. However, I still hate you...")
        await delay(4500)
        dialogBox.hide()


        ending_background2.show()
        ending_background2.attribute("src","image/ending_background12.png")
        cc = 0
        t = 1
        ending_background1.show()
        var q = setInterval(() =>{
            document.getElementById("ending_background1").style.opacity = t
            document.getElementById("ending_background2").style.opacity = 1-t
            t -= 0.01
            if(t <= 0){
                clearInterval(q)
                cc = 1
            }
        },25)

        while(cc == 0){
            await delay(5)
        }

        main_menu_startGameBtn.show()
        main_menu_GitHubBtn.show()
        main_menu_startGameBtn.attribute("onclick","")
        main_menu_GitHubBtn.attribute("onclick","")
        main_menu_GitHubBtn.style("zIndex:18390840394801840810")
        main_menu_startGameBtn.style("zIndex:18390840394801840810")

        cc = 0
        now = 12
        last = 0
        var q = setInterval(() =>{
            ending_background2.attribute("src","image/ending_background" + (now).toString() + ".png")
            cc += 1
            if(cc == 50){
                setInterval(q);
                last = 1
            }


        },100
        )

        while(last == 0){
            await delay(5)
        }
        cc = 0
        t = 1
        ending_background1.attribute("src","image/black_background.png")
        ending_background1.show()
        var q = setInterval(() =>{
            document.getElementById("ending_background2").style.opacity = t
            document.getElementById("ending_background1").style.opacity = 1-t
            t -= 0.01
            if(t <= 0){
                clearInterval(q)
                cc = 1
            }
        },25)
        
        while(cc ==0){
            await delay(5)
        }
        story_tellLabel.show()
        main_menu_GitHubBtn.hide()
        main_menu_startGameBtn.hide()
        story_tellLabel.style("zIndex","278529375873298523957982375892735892")
        story_tellFunction(
            'I hope you can be happy in your next life...');
    }

    


    


}