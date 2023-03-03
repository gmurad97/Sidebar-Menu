let sidebarShow = true;
let sidebarBlock = document.getElementsByClassName("sidebar")[0];
/*Begin - Array variables*/
let sMenuLiList = document.querySelector(".s-menu").getElementsByTagName("p");
let sSettingLiList = document.querySelector(".s-setting").getElementsByTagName("p");
let marginControl = document.getElementsByClassName("fa-customize");
/*Ended - Array variables*/
let logoInfo = document.getElementsByClassName("s-logo-info")[0];
let logoMargin = document.getElementById("sidebar-logo");


function minimizeMenu(e) {
    if (sidebarShow) {
        sidebarShow = false;
        sidebarBlock.style.width = "64px";
        logoMargin.style.marginRight = "0px";
        logoInfo.style.display = "none";
        for (let eLi of sMenuLiList) {
            eLi.style.display = "none";
        }
        for (let eLi of sSettingLiList) {
            eLi.style.display = "none";
        }
        for (let eLi of marginControl) {
            eLi.style.marginRight = "0px";
        }
        e.classList.remove("fa-chevron-left");
        e.classList.add("fa-chevron-right");
    }
    else {
        sidebarShow = true;
        sidebarBlock.style.width = "300px";
        logoMargin.style.marginRight = "16px";
        logoInfo.style.display = "flex";
        for (let eLi of sMenuLiList) {
            eLi.style.display = "flex";
        }
        for (let eLi of sSettingLiList) {
            eLi.style.display = "flex";
        }
        for (let eLi of marginControl) {
            eLi.style.marginRight = "16px";
        }
        e.classList.remove("fa-chevron-right");
        e.classList.add("fa-chevron-left");
    }
}