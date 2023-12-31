﻿window.initVideo = function () {
    var video = document.getElementById('myVideo');
    console.log(video)
    var supposedCurrentTime = 0;
    video.addEventListener('timeupdate', function () {
        if (!video.seeking) {
            supposedCurrentTime = video.currentTime;
        }
    });
    video.addEventListener('seeking', function () {
        var delta = video.currentTime - supposedCurrentTime;
        if (delta > 0.01) {
            console.log("Seeking is disabled");
            video.currentTime = supposedCurrentTime;
        }
    });
    video.addEventListener('ended', function () {
        document.getElementById('nextButton').style.display = 'block';
    });
    video.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);
}