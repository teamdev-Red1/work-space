const CONFIG = {
    mainPage:document.getElementById("main-page"),
    drawButton:document.querySelector(".draw-button")
}
class display{
    static none(ele){
        ele.classList.remove("d-block");
        ele.classList.add("d-none");
    }
    static block(ele){
        ele.classList.remove("d-none");
        ele.classList.add("d-block");
    }
}

CONFIG.drawButton.addEventListener("click",function(){
    display.none(CONFIG.mainPage);
})