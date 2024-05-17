let mouseFlashLight // 滑鼠手電筒
let background // 背景
let main_menu_startGameBtn // 開始遊戲按鈕
let main_menu_GitHubBtn // 開始畫面Github Repo Btn
let main_menu_titleLabel // 開始畫面遊戲名稱圖片

isMainScreen = 1

// function main_menu() 主畫面
// function setup() p5.js 開始設定

async function startGame(){

    await delay(1);

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

}


function setup(){ // p5.js 開始設定

    main_menu()

}