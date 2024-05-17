let mouseFlashLight // 滑鼠手電筒
let background // 背景

// function main_menu() 主畫面
// function setup() p5.js 開始設定


function main_menu(){ // 主畫面

    background = createImg("image/bg.jpg","background")
    background.style("position","absolute")
    background.style("top","0px")
    background.style("left","0px")
    background.style("width","100%")
    background.style("height","100%")
    background.attribute("onclick","console.log(1)")
    background.show()

    mouseFlashLight = createElement("div")
    mouseFlashLight.attribute("id","mouseFlashLight")

}


function setup(){ // p5.js 開始設定

    main_menu()

}