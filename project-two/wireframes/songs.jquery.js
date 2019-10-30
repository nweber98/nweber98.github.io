//https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src','http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');

    $('#luis-enrique').click(function() {
        audioElement.play();
        $("#luis-enrique").toggleClass("hidden");
    });
});