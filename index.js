const displayColor = document.querySelector('.displayColor');
const displayImg = document.querySelector('.displayImg');
const color = document.querySelectorAll('.div');

function openColor() {
    displayColor.style.display = 'block';
    displayImg.style.display = 'none';
}

function openImg() {
    displayColor.style.display = 'none';
    displayImg.style.display = 'block';
}

function onclickColor() {
    for (let i = 0; i < color.length; i++) {
        color[i].onclick = function () {
            document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
        }
    }
}

function onclickImg() {
    for (let i = 0; i < color.length; i++) {
        color[i].onclick = function () {
            document.body.style.backgroundImage = getComputedStyle(this).backgroundImage;
        }
    }
}