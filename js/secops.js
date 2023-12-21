'use strict';

const sceneBadge = document.getElementById('scene-badge');

const imagePlayer = document.getElementById('image-player');
const videoPlayer = document.getElementById('video-player');
const firstButton = document.getElementById('first-btn');
const prevBtns = document.querySelectorAll('.play-prev-btn');
const playPauseButton = document.getElementById('play-pause-btn');
const nextBtns = document.querySelectorAll('.play-next-btn');
const lastButton = document.getElementById('last-btn');

const currentTimeDisplay = document.getElementById('time-display');
const videoDuration = document.getElementById('video-duration');
const timelineContainer = document.querySelector('.timeline-container');
const controlsContainer = document.querySelector('.controls__time');

const recordedDemoBtn = document.getElementById('record-demo-btn');
const recordedDemo = document.querySelector('.recoded-demo');
const recordedDemoVideo = document.querySelector('.recoded-demo-video');
const recordedDemoCloseBtn = document.querySelector('.recoded-demo-close-btn');

const videos = [
    'scene-1.mp4',
    'scene.png',
    'scene-2.mp4',
    'scene-3.mp4',
    'scene-4.mp4',
    'scene-5.mp4',
    'scene-6.mp4',
];

let currentVideoIndex = 0;
updateVideoPlayerSrc();

// =========== Buttons Event Listeners
firstButton.addEventListener('click', playFirstVideo);
prevBtns.forEach((btn) => btn.addEventListener('click', playPrevVideo));
playPauseButton.addEventListener('click', () => {
    playPause();
    playPauseButton.blur();
});
nextBtns.forEach((btn) => btn.addEventListener('click', playNextVideo));
lastButton.addEventListener('click', playLastVideo);

// =========== Video Player Event Listeners
videoPlayer.addEventListener('dblclick', () => {
    openFullscreen();
    if (videoPlayer.paused) {
        playPauseButton.classList.add('paused');
    } else {
        playPauseButton.classList.remove('paused');
    }
});
videoPlayer.addEventListener('loadedmetadata', (e) => {
    formatDuration(videoPlayer.duration, videoDuration);
});
videoPlayer.addEventListener('timeupdate', () => {
    // When video ends pause
    if (videoPlayer.currentTime === videoPlayer.duration) {
        pause();
    }
    const percent = videoPlayer.currentTime / videoPlayer.duration;
    timelineContainer.style.setProperty('--progress-position', percent);
    formatDuration(videoPlayer.currentTime, currentTimeDisplay);
});

// =========== Timeline Event Listeners
timelineContainer.addEventListener('mousemove', handleTimelineUpdate);
timelineContainer.addEventListener('mousedown', toggleScrubbing);

// =========== Key & Mouse Event Listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') playPause();
});
document.addEventListener('mouseup', (e) => {
    if (isScrubbing) toggleScrubbing(e);
});
document.addEventListener('mousemove', (e) => {
    if (isScrubbing) handleTimelineUpdate(e);
});

// =========== Recorded Demo Event Listeners
recordedDemoBtn.addEventListener('click', () => {
    // Pause the Scene
    pause();
    recordedDemo.classList.add('show');
});
recordedDemoCloseBtn.addEventListener('click', () => {
    recordedDemo.classList.remove('show');
    recordedDemoVideo.pause();

    // If the recorded demo should be set to start
    // recordedDemoVideo.currentTime = 0;
});

// =============== Functions
function updateVideoPlayerSrc() {
    const currentVideo = videos[currentVideoIndex];
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];

    // Enable & Disable buttons
    enableDisablePrevBtns(currentVideoIndex);
    enableDisableNextBtns(currentVideoIndex);

    // Checking to Display Video / Image
    if (currentVideo.endsWith('.mp4')) {
        imagePlayer.style.display = 'none';
        controlsContainer.style.visibility = 'visible';
        videoPlayer.style.display = 'block';
        playPauseButton.disabled = false;

        videoPlayer.src = `./../assets/videos/secops/${currentVideo}`;
        videoPlayer.load();
        setTimeout(() => videoPlayer.play(), 500);
    } else if (imageExtensions.some((ext) => currentVideo.endsWith(ext))) {
        videoPlayer.style.display = 'none';
        controlsContainer.style.visibility = 'hidden';
        imagePlayer.style.display = 'block';
        playPauseButton.disabled = true;

        imagePlayer.src = `./../assets/videos/secops/${currentVideo}`;
    }
    sceneBadge.textContent = `Scene ${currentVideoIndex + 1} of ${videos.length}`;
}

function playNextVideo() {
    if (currentVideoIndex === videos.length - 1) return;
    currentVideoIndex++;
    updateVideoPlayerSrc();
}

function playPrevVideo() {
    if (currentVideoIndex === 0) return;
    currentVideoIndex--;
    updateVideoPlayerSrc();
}

function playLastVideo() {
    if (currentVideoIndex === videos.length - 1) return;
    currentVideoIndex = videos.length - 1;
    updateVideoPlayerSrc();
}

function playFirstVideo() {
    if (currentVideoIndex === 0) return;
    currentVideoIndex = 0;
    updateVideoPlayerSrc();
}

function playPause() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseButton.classList.remove('paused');
    } else {
        videoPlayer.pause();
        playPauseButton.classList.add('paused');
    }
}

function pause() {
    videoPlayer.pause();
    playPauseButton.classList.add('paused');
}

function formatDuration(time, element) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    element.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function enableDisablePrevBtns(currentIndex) {
    if (currentIndex === 0) {
        prevBtns.forEach((btn) => btn.classList.add('disabled'));
        firstButton.classList.add('disabled');
    } else {
        prevBtns.forEach((btn) => btn.classList.remove('disabled'));
        firstButton.classList.remove('disabled');
    }
}

function enableDisableNextBtns(currentIndex) {
    if (currentIndex === videos.length - 1) {
        nextBtns.forEach((btn) => btn.classList.add('disabled'));
        lastButton.classList.add('disabled');
    } else {
        nextBtns.forEach((btn) => btn.classList.remove('disabled'));
        lastButton.classList.remove('disabled');
    }
}

// =========== Timeline Functions
let isScrubbing = false;
let wasPaused;
function toggleScrubbing(e) {
    const rect = timelineContainer.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;

    isScrubbing = (e.buttons & 1) === 1;

    if (isScrubbing) {
        wasPaused = videoPlayer.paused;
        videoPlayer.pause();
    } else {
        videoPlayer.currentTime = percent * videoPlayer.duration;
        if (!wasPaused) videoPlayer.play();
    }

    handleTimelineUpdate(e);
}

function handleTimelineUpdate(e) {
    const rect = timelineContainer.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;

    timelineContainer.style.setProperty('--preview-position', percent);

    if (isScrubbing) {
        e.preventDefault();
        timelineContainer.style.setProperty('--progress-position', percent);
    }
}

// Open fullscreen
function openFullscreen() {
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
        /* Safari */
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
        /* IE11 */
        videoPlayer.msRequestFullscreen();
    }
}

// Update Video Container Height
// const header = document.querySelector('.header');
// const controls = document.querySelector('.controls');
// const light = document.querySelector('.product-light');
// const menu = document.querySelector('.menu');
// const videoContainer = document.querySelector('.products__frame-video');
// const paddingMargin = 30;
// updateContainerHeight();

// window.addEventListener('resize', updateContainerHeight);

// function updateContainerHeight() {
//     const screenHeight = window.innerHeight - paddingMargin;
//     const headerControlsHeight =
//         header.clientHeight + controls.clientHeight + light.clientHeight + menu.clientHeight;
//     const height = Math.abs(screenHeight - headerControlsHeight);

//     videoContainer.style.height = `${height}px`;
// }
