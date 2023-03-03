let sidebarShow = true;
let darkMode = true;
let sidebarBlock = document.getElementsByClassName("sidebar")[0];
/*Begin - Array variables*/
let sMenuLiList = document.querySelector(".s-menu").getElementsByTagName("p");
let sSettingLiList = document.querySelector(".s-setting").getElementsByTagName("p");
let marginControl = document.getElementsByClassName("fa-customize");
/*Ended - Array variables*/
let logoInfo = document.getElementsByClassName("s-logo-info")[0];
let logoMargin = document.getElementById("sidebar-logo");
let rootNodeStyle = document.querySelector(":root");


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

function darkLightMode(e) {
    if (!darkMode) {
        darkMode = true;
        document.getElementById("darkmodeClasses").classList.remove("fa-sun")
        document.getElementById("darkmodeClasses").classList.add("fa-moon")
        document.getElementById("darkmode").innerHTML = "Dark mode";
        rootNodeStyle.style.setProperty("--bgColor", "#E4E9F7");
        rootNodeStyle.style.setProperty("--bgSidebarColor", "#FFFFFF");
        rootNodeStyle.style.setProperty("--bgSidebarMinimizerColor", "#9A3BB1");
        rootNodeStyle.style.setProperty("--txtColor", "#3A3C3C");
    }
    else {
        darkMode = false;
        document.getElementById("darkmodeClasses").classList.remove("fa-moon")
        document.getElementById("darkmodeClasses").classList.add("fa-sun")
        document.getElementById("darkmode").innerHTML = "Light mode";
        rootNodeStyle.style.setProperty("--bgColor", "#18191A");
        rootNodeStyle.style.setProperty("--bgSidebarColor", "#242526");
        rootNodeStyle.style.setProperty("--bgSidebarMinimizerColor", "#3A3C3C");
        rootNodeStyle.style.setProperty("--txtColor", "#d2dae2");
    }
}

darkLightMode();