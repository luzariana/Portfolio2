var themeButton = document.getElementById('themeButtonContainer');

var body = document.querySelector('body');

themeButton.onclick = function () {
    themeButton.classList.toggle('active');
    body.classList.toggle('active');
}