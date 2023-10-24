'use strict';

let elId;
let popup = document.getElementById('popup');
let buttonActive = false;
let searchLink = '';
let closestPopup;
let closestButton;
let tooltipSubSearchVoice = document.getElementById('tooltips-sub-search-voice');
let tooltipSubSearchImage = document.getElementById('tooltips-sub-search-image');
let tooltipsSubSearch = document.getElementById('tooltips-sub-search');
let tooltipsPointer = document.getElementById('tooltipsPointer');
let tooltipFocusMicro = false;
let tooltipFocusImage = false;

let root = document.querySelector(':root');
let darkThemeButton = document.querySelector('#DarkTheme');
let darkTextContent = document.getElementById('DarkTextContent');
let darkTheme = false;
let logo = document.getElementById('logo');
darkThemeButton.addEventListener( 'click', () => {
    event.preventDefault();
    root.classList.toggle('dark');
    if ( darkTheme === false ) {
        darkTheme = true;
        darkTextContent.innerHTML = 'Dark theme: On';
        logo.innerHTML = "<img class='main__logo' src='img/googlelogo_light_color_272x92dp.png' alt='Google'>";
        inputSearch.style.backgroundColor = '#202124';
        bgSearch.style.backgroundColor = '#202124';

    } else {
        darkTheme = false;
        darkTextContent.innerHTML = 'Dark theme: Off';
        logo.innerHTML = "<img class='main__logo' src='img/googlelogo_color_272x92dp.png' alt='Google'>";
        inputSearch.style.backgroundColor = '#fff';
        bgSearch.style.backgroundColor = '#fff';
        bgSearch.style.border = ' 1px var(--search) solid';
    }
})

let googeAppsTooltip = document.getElementById('googeAppsTooltip');

function tooltiMicroOn() {
    tooltipFocusMicro = true
    setTimeout( function() {
        if ( tooltipFocusMicro === true) {
            tooltipsPointer.style.right = '69px';
            tooltipsSubSearch.style.display = 'flex';
            tooltipSubSearchVoice.style.display = 'flex';
        }
    },500)
}

function tooltiMicroOff() {
    tooltipFocusMicro = false
    tooltipsSubSearch.style.display = 'none';
    tooltipSubSearchVoice.style.display = 'none';
}

function tooltiImageOn() {
    tooltipFocusImage = true;
    setTimeout( function() {
        if ( tooltipFocusImage === true) {
            tooltipsPointer.style.right = '26px';
            tooltipsSubSearch.style.display = 'flex';
            tooltipSubSearchImage.style.display = 'flex';
        }
    },500)
}

function tooltiImageOff() {
    tooltipFocusImage = false;
    tooltipsSubSearch.style.display = 'none';
    tooltipSubSearchImage.style.display = 'none';
}


document.getElementById('search')
    .addEventListener('keyup', function(event) {
        event.preventDefault();
        if ( event.keyCode === 13 ) {
            goLink();
        }
    })
function goLink() {
    let search = document.getElementById('search').value;
    searchLink = ''
    if ( search != false ) {
        for ( let i in search ) {
            if ( search[i] === ' ' ) {
                searchLink = searchLink + '+';
            }
            else {
                searchLink = searchLink + search[i];
            }
        }
        window.location.href = `https://www.google.com/search?q=${searchLink}`;
    }
}

document.addEventListener( 'click', function(event) { /* google apps */
    if ( buttonActive === true ) {
        closestPopup = event.target.closest( '#popup' );
        closestButton = event.target.closest( '#button-apps' );
        if ( closestPopup === null && closestButton === null ) {
            popup.style.display = 'none';
            googleApps_activ = false;
            document.getElementById('button-apps')
                .style.backgroundColor = '#f0f0f000';
            buttonActive = false;
        }
    }
})

function mouseOn(el, text, id, height) {
    elId = document.getElementById(id);
    if (height == 2) {
        elId.innerHTML = text;
        elId.style.width = "75px";
        elId.style.height = "34px";
        elId.style.textAlign = "center";
        el.style.height = "100px";
        el.style.marginBottom = "-20px";
    }
    else if (height == 3) {
        elId.innerHTML = text;
        elId.style.width = "90px";
        elId.style.height = "54px";
        elId.style.textAlign = "center";
        el.style.height = "120px";
        el.style.marginBottom = "-40px";
    }
}

function mouseOff(text, id) {
    elId = document.getElementById(id);
    elId.innerHTML = text;
}

let googleApps_activ = false
function googleApps(el) {
    if (googleApps_activ == true ) {
        popup.style.display = 'none'; 
        googleApps_activ = false;
        if ( darkTheme === false ) {
            el.style.backgroundColor = '#f0f0f0';
        } else {
            el.style.backgroundColor = '#2f3034';
        }
        buttonActive = false;
    }
    else {
        googleApps_activ = true;
        buttonActive = true;
        popup.style.display = 'flex';
        googeAppsTooltip.style.display = 'none';
        popup.scrollTop = 0;
        if ( darkTheme === false ) {
            el.style.backgroundColor = '#d9dadb';
        } else {
            el.style.backgroundColor = '#3b3c3f';
        }
    }
}

let googleAppsFocus = false

function googleAppsMouseOn(el) {
    if (buttonActive == false) {
        if ( darkTheme === false ) {
            el.style.backgroundColor = '#f0f0f0';
        } else {
            el.style.backgroundColor = '#2f3034';

        }
    }
    googleAppsFocus = true
    setTimeout( function() {
        if ( googleAppsFocus === true && buttonActive == false) {
            googeAppsTooltip.style.display = 'flex';
        }
    },1000)
}
function googleAppsMouseOff(el) {
    googleAppsFocus = false;
    googeAppsTooltip.style.display = 'none';
    if (buttonActive == false) {
        el.style.backgroundColor = '#f0f0f000';
    }
}

let footerItemPopup = document.getElementById('footerItemPopup');
let settingsPopupActiv = false;
let footerPopupItem_arr = document.getElementsByClassName('footer__popup-item');
function settingsButton_Onclick () {
    if ( settingsPopupActiv === false ) {
        settingsPopupActiv = true;
        footerItemPopup.style.display = 'flex';
        footerPopupItem_arr[0].style.backgroundColor = 'var(--focus)';
    } else {
        settingsPopupActiv = false;
        footerItemPopup.style.display = 'none';
        footerPopupItem_0_Activ = true;
    }
}
let footerPopupItem_0_Activ = true
for ( let i = 0 ; i < footerPopupItem_arr.length ; i++ ) {
    footerPopupItem_arr[i].addEventListener( 'mouseover', () => {
        if ( footerPopupItem_0_Activ === true ) {
            footerPopupItem_0_Activ = false;
            footerPopupItem_arr[0].style.backgroundColor = 'var(--bgcMain)';
        }
        footerPopupItem_arr[i].style.backgroundColor = 'var(--focus)';
    })
    footerPopupItem_arr[i].addEventListener( 'mouseleave', () => {
        footerPopupItem_arr[i].style.backgroundColor = 'var(--bgcMain)';
    })
}
darkThemeButton.addEventListener( 'mouseover', () => {
    if ( footerPopupItem_0_Activ === true ) {
        footerPopupItem_0_Activ = false;
        footerPopupItem_arr[0].style.backgroundColor = 'var(--bgcMain)';
    }
})



document.addEventListener( 'click', function(event) { /* settings button */
    closestPopup = event.target.closest( '#footerItemPopup' );
    closestButton = event.target.closest( '#settingsButton' );
    if ( closestPopup === null && closestButton === null ) {
        footerItemPopup.style.display = 'none';
        footerPopupItem_0_Activ = true;
        settingsPopupActiv = false;
    }
})

let inputSearch = document.getElementById('search')
let bgSearch = document.getElementById('bgSearch')
function search_mouseOn () {
    if ( darkTheme === true ) {
        inputSearch.style.backgroundColor = 'var(--button)';
        bgSearch.style.backgroundColor = 'var(--button)';
        bgSearch.style.border = ' 1px var(--button) solid';
    }
}
function search_mouseOff () {
    if ( darkTheme === true ) {
        inputSearch.style.backgroundColor = '#202124';
        bgSearch.style.backgroundColor = '#202124';
        bgSearch.style.border = ' 1px var(--search) solid';
    }

}