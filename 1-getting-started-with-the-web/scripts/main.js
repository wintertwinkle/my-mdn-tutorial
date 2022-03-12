let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-logo.jpg') {
        myImage.setAttribute("src", "images/firefox-logo-2.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox-logo.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

let changeInputButton = document.querySelector("#input-change-button");
let myInput = document.querySelector("#input3")

changeInputButton.onclick = function() {
    let disable = myInput.disabled;
    if(disable) {
        myInput.disabled = false;
    } else {
        myInput.setAttribute('disabled', '');
    }
}