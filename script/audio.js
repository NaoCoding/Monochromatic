function start_GameBGMSetup(){
    start_Game_BGM = createElement("Audio")
    start_Game_BGM.attribute("src","audio/start_menu.mp3")
    start_Game_BGM.attribute("id","start_Game_BGM")
}

let pressESound,typingSound,BtnFailed_Sound,cChangeSound,openDoorSound,abgm,bbgm,cbgm

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

    abgm = createElement("Audio")
    abgm.attribute("src","audio/normal_sound.mp3")
    abgm.attribute("id","abgm")

    bbgm = createElement("Audio")
    bbgm.attribute("src","audio/scared_sound.mp3")
    bbgm.attribute("id","bbgm")

    cbgm = createElement("Audio")
    cbgm.attribute("src","audio/happy_sound.mp3")
    cbgm.attribute("id","cbgm")

    //document.getElementById("bgm").loop = "True"
}



async function BGM(){
    document.getElementById("abgm").pause()
    document.getElementById("abgm").currentTime = 0
    document.getElementById("bbgm").pause()
    document.getElementById("bbgm").currentTime = 0
    document.getElementById("cbgm").pause()
    document.getElementById("cbgm").currentTime = 0
    await delay(500)
    
    if(ColorStatus == 0){
    
        document.getElementById("abgm").volume = 0.5
        document.getElementById("abgm").currentTime = 0
        document.getElementById("abgm").play();
        document.getElementById("abgm").loop = "True"
    }
    
    if(ColorStatus == 1){

        document.getElementById("bbgm").volume = 0.5
        document.getElementById("bbgm").currentTime = 10
        document.getElementById("bbgm").play();
        document.getElementById("bbgm").loop = "True"
    }
    if(ColorStatus == 2){

        document.getElementById("cbgm").volume = 0.5
        document.getElementById("cbgm").currentTime = 0
        document.getElementById("cbgm").play();
        document.getElementById("cbgm").loop = "True"
    }
}


