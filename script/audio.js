function start_GameBGMSetup(){
    start_Game_BGM = createElement("Audio")
    start_Game_BGM.attribute("src","audio/start_menu.mp3")
    start_Game_BGM.attribute("id","start_Game_BGM")
}

function BtnSuccess_SoundSetup(){
    BtnSuccess_Sound = createElement("Audio")
    BtnSuccess_Sound.attribute("src","audio/button_Success.mp3")
    BtnSuccess_Sound.attribute("id","BtnSuccess_Sound")
}