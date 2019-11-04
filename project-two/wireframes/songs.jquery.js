//https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked

$(document).ready(function() {
    
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src','assets/yo-no-se-manana.m4a');

    $('#luis-enrique').click(function() {
        $('#luis-enrique').addClass('invisible');
        $('#showme').addClass('visible');
    });
    
    $('#play-one').click(function() {
        audioElement.play();
    });

    $('#pause-one').click(function() {
        audioElement.pause();
    });
    
    $('#stop-one').click(function() {
        audioElement.pause();
        audioElement.currentTime = 0;
    });
    
     });

$(document).ready(function() {
    $('#celia-cruz').click(function(){
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
