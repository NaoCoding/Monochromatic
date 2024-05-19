function start_GameBGMSetup(){
    start_Game_BGM = createElement("Audio")
    start_Game_BGM.attribute("src","audio/start_menu.mp3")
    start_Game_BGM.attribute("id","start_Game_BGM")
}

let pressESound,typingSound,BtnFailed_Sound,cChangeSound,openDoorSound,bgm

function BtnSuccess_SoundSetup(){
    BtnSuccess_Sound = createElement("Audio")
    BtnSuccess_Sound.attribute("src","audio/button_Success.mp3")
    BtnSuccess_Sound.attribute("id","BtnSuccess_Sound")

    BtnFailed_Sound = createElement("Audio")
    BtnFailed_Sound.attribute("src","audio/button_Failed.mp3")
    BtnFailed_Sound.attribute("id","BtnFailed_Sound")

    openDoorSound = createElement("Audio")
    openDoorSound.attribute("src","audio/open_Door.mp3")
    openDoorSound.attribute("id","openDoorSound")

    cChangeSound = createElement("Audio")
    cChangeSound.attribute("src","audio/colorChange.mp3")
    cChangeSound.attribute("id","cChangeSound")

    pressESound = createElement("Audio")
    pressESound.attribute("src","audio/pressESound.mp3")
    pressESound.attribute("id","pressESound")
    

    typingSound = createElement("Audio")
    typingSound.attribute("src","audio/typingSound.mp3")
    typingSound.attribute("id","typingSound")

    bgm = createElement("Audio")
    bgm.attribute("src","audio/scared_sound.mp3")
    bgm.attribute("id","bgm")
    document.getElementById("bgm").loop = "True"
}



async function BGM(){

    if(ColorStatus == 0){
        bgm.attribute("src","audio/normal_sound.mp3")
        document.getElementById("bgm").volume = 0.5
        document.getElementById("bgm").currentTime = 0
        document.getElementById("bgm").play();
        document.getElementById("bgm").loop = "True"
    }
    
    if(ColorStatus == 1){
        bgm.attribute("src","audio/scared_sound.mp3")
        document.getElementById("bgm").volume = 0.5
        document.getElementById("bgm").currentTime = 10
        document.getElementById("bgm").play();
        document.getElementById("bgm").loop = "True"
    }
    if(ColorStatus == 2){
        bgm.attribute("src","audio/happy_sound.mp3")
        document.getElementById("bgm").volume = 0.5
        document.getElementById("bgm").currentTime = 0
        document.getElementById("bgm").play();
        document.getElementById("bgm").loop = "True"
    }
}


