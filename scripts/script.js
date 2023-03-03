let sidebarShow = true;
let sidebarBlock = document.getElementsByClassName("sidebar")[0];
let sMenuLiList =  document.querySelector(".s-menu").getElementsByTagName("p");
let sSettingLiList =  document.querySelector(".s-setting").getElementsByTagName("p");
let marginOff = document.getElementsByClassName("fa-customize");
let x = document.getElementsByClassName("s-logo-info")[0];

function minimizeMenu(){
    if(sidebarShow){
        sidebarShow = false;
        sidebarBlock.style.width = "64px";
        for(let li of sMenuLiList){
            li.style.display = "none";
        }
        for(let li of sSettingLiList){
            li.style.display = "none";
        }
        for(let li of marginOff){
            li.style.marginRight = "0px";
        }
        x.style.display = "none";
    }
    else{
        sidebarShow = true;
        sidebarBlock.style.width = "300px";
        for(let li of sMenuLiList){
            li.style.display = "flex";
        }
        for(let li of sSettingLiList){
            li.style.display = "flex";
        }
        for(let li of marginOff){
            li.style.marginRight = "16px";
        }
        x.style.display = "flex";
    }
}
