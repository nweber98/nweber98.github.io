//https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked

$(document).ready(function() {
    
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src','http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');

    $('#luis-enrique').click(function() {
        audioElement.play();
    });
     });
$(document).ready(function() {
    $('#music-button').click(function(){
        $('#celia-cruz').addClass('invisible');
    });
    //https://jordanagk.github.io/experiments/assets/fadein-out.jquery.js
});
    
///
//$('#celia-cruz').click(function() {
//        audioElement.play();
//    });
//    
//    $('#el-gran-varon').click(function() {
//        audioElement.play();
//    });
//    
//    $('#marc-anthony').click(function() {
//        audioElement.play();
//    });
//    
//    $('#opus').click(function() {
//        audioElement.play();
//    });
//    
//    $('#willie-colon').click(function() {
//        audioElement.play();
//    });
//});
//
