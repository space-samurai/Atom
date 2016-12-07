var link = document.querySelector(".login");
var mapLink = document.querySelector(".btn-route");

var popup    = document.querySelector(".modal-content");
var map = document.querySelector(".modal-content-map");
var overlay = document.querySelector(".modal-overlay");

var popupClose = popup.querySelector(".modal-content-close");
var mapClose = map.querySelector(".modal-content-close");

var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var checkbox = popup.querySelector("[type=checkbox]");
var form = popup.querySelector("form");

var storageLogin = localStorage.getItem("login");
var storagePass = localStorage.getItem("password");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");

    if (storageLogin) {
        login.value = storageLogin;
        password.focus();
    } else if (storagePass) {
        password.value = storagePass;
    } else {
        login.focus();
    }
});

mapLink.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("modal-show");
    overlay.classList.add("overlay-show");
});

popupClose.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
    popup.classList.remove("modal-error");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            overlay.classList.remove("overlay-show");
        }
        else if (map.classList.contains("modal-show"))  {
            map.classList.remove("modal-show");
            overlay.classList.remove("overlay-show");
        }
    }
});


form.addEventListener("submit", function() {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
    } else if (checkbox.checked) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("password", password.value);
    } else {
        localStorage.setItem("login", login.value);
    }
});
