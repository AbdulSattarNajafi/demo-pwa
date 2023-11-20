'use strict';

const videoWrapper = document.getElementById('video-wrapper');
const container = document.getElementById('home-wrapper');

document.addEventListener('keydown', showContent);
videoWrapper.addEventListener('click', showContent);
videoWrapper.addEventListener('contextmenu', showContent);

function showContent(e) {
    e.preventDefault();

    videoWrapper.style.display = 'none';
    container.style.display = 'flex';
}
