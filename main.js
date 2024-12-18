const CONFIG = {
    mainPage:document.getElementById("main-page"),
    drawButton:document.querySelector("#draw-btn"),
    member:document.querySelector("#member"),
    return:document.querySelector("#return-btn")
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

if(document.title == "おみくじ"){
    CONFIG.drawButton.addEventListener("click",function(){
    display.none(CONFIG.mainPage);
})
}

if(document.title == "開発者一覧"){
    CONFIG.return.addEventListener("click",function(){
        window.location.href ="index.html";
    })
}