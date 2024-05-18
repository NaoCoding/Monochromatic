let mouseFlashLight // 滑鼠手電筒
let background // 背景
let main_menu_startGameBtn // 開始遊戲按鈕
let main_menu_GitHubBtn // 開始畫面Github Repo Btn
let main_menu_titleLabel // 開始畫面遊戲名稱圖片
let story_tellLabel 
let start_Game_BGM
let mainCharacter // 主角
let dialogBox // 對話框

isMainScreen = 1
isControlingCharacter = 0 // 偵測是否正在可控制腳色的畫面
MoveBorder  = [0,100,0,100]   // 可移動的邊界( % 為單位), x_left , x_right , y_left , y_right



// function main_menu() 主畫面
// function setup() p5.js 開始設定

function start_Scene1(){


}

async function startGame(){ // 開始遊戲後的過場動畫

    document.getElementById("start_Game_BGM").volume = 0.5
    document.getElementById("start_Game_BGM").play()
    await delay(1000);
    fadeOutAnimation(75)
    await delay(1500);

    background.attribute("src","image/black_background.png")
    main_menu_startGameBtn.hide()
    main_menu_titleLabel.hide()
    main_menu_GitHubBtn.hide()

    fadeInAnimation(75)
    await delay(2250);


    story_tellLabel.show()
    story_tellFunction("\"Color is everything, black and white is more.\" - Dominic Rouse")
    await delay(6000);
    //story_tellFunction("\"In color, photography is reality; in black and white, it is art.\" - Eddie Adams")
    //await delay(7500);
    story_tellLabel.hide()
    fadeOutAnimation(75)
    await delay(1500);

    background.attribute("src","image/white_background.png")

    fadeInAnimation(75)
    await delay(2250);
    
    isControlingCharacter = 1
    dialogBox.show()
    dialogBoxFunction("Who am I ?? Where is this place ??")
    await delay("3000")

    fadeOutAnimation(75)
    await delay(1500);

    dialogBox.hide()
    mainCharacter.show()
    mouseFlashLight.show()
    start_Scene1()


    fadeInAnimation(75)
    await delay(2250);
    document.getElementById("start_Game_BGM").pause();


    

}

function main_menu(){ // 主畫面

    background = createImg("image/main_menu_backGround01.png","background")
    background.attribute("id","backgroundBG")
    background.style("position","absolute")
    background.style("top","0px")
    background.style("left","0px")
    background.style("width","100%")
    background.style("height","100%")
    background.style("zIndex","-1")
    background.show()

    mouseFlashLight = createElement("div")
    mouseFlashLight.attribute("id","mouseFlashLight")
    mouseFlashLight.hide()
    document.body.style.cursor = "auto";

    main_menu_startGameBtn = createImg("image/main_menu_startGameBtn.png","main_menu_startGameBtn")
    main_menu_startGameBtn.style("position","absolute")
    
    main_menu_startGameBtn.style("top","45%")
    main_menu_startGameBtn.style("left","10%")
    main_menu_startGameBtn.style("width","28%")
    main_menu_startGameBtn.style("height","10%")
    main_menu_startGameBtn.style("borderRadius","5%")
    main_menu_startGameBtn.style("borderColor","rgb(0,0,0)")
    main_menu_startGameBtn.style("borderWidth","2px")
    main_menu_startGameBtn.style("borderStyle","solid")
    main_menu_startGameBtn.attribute("onclick","isMainScreen=0;startGame();")
    main_menu_startGameBtn.show()

    main_menu_GitHubBtn = createImg("image/main_menu_GitHubBtn.png","main_menu_GitHubBtn")
    main_menu_GitHubBtn.style("position","absolute")
    
    main_menu_GitHubBtn.style("top","60%")
    main_menu_GitHubBtn.style("left","10%")
    main_menu_GitHubBtn.style("width","28%")
    main_menu_GitHubBtn.style("height","10%")
    main_menu_GitHubBtn.style("borderRadius","5%")
    main_menu_GitHubBtn.style("borderColor","rgb(0,0,0)")
    main_menu_GitHubBtn.style("borderWidth","2px")
    main_menu_GitHubBtn.style("borderStyle","solid")
    main_menu_GitHubBtn.attribute("onclick","document.location.href=\"https://github.com/NaoCoding/Monochromatic\"")
    main_menu_GitHubBtn.show()

    main_menu_titleLabel = createImg("image/main_menu_TitleLabel.png","main_menu_TitleLabel")
    main_menu_titleLabel.style("position","absolute")
    
    main_menu_titleLabel.style("top","10%")
    main_menu_titleLabel.style("left","5%")
    main_menu_titleLabel.style("width","40%")
    main_menu_titleLabel.style("height","22%")
    main_menu_titleLabel.show()

    story_tellLabel = createElement("h2")
    story_tellLabel.style("top","50%")
    story_tellLabel.style("left","50%")
    story_tellLabel.style("width","50%")
    story_tellLabel.style("height","10%")
    story_tellLabel.style("transform","translate(-50%,-50%)")
    story_tellLabel.style("position","absolute")
    story_tellLabel.style("color","rgb(255,255,255)")
    story_tellLabel.style("textAlign","center")
    story_tellLabel.style("fontFamily","cursive")
    story_tellLabel.style("fontSize","36px")

    story_tellLabel.hide()

}

function preload(){

    

}

function setup(){ // p5.js 開始設定
    
    
    main_menu()
    start_GameBGMSetup()
    CharacterSetup()
    dialogBoxSetup()

}