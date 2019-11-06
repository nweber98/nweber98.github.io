//https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked
//https://www.w3schools.com/jsref/dom_obj_audio.asp
$(document).ready(function() {
    
    var audioOne = document.createElement('audio');
    audioOne.setAttribute('src','assets/yo-no-se-manana.m4a');

    $('#luis-enrique').click(function() {
        $('#luis-enrique').addClass('invisible');
        $('#showme-one').addClass('visible');
    });
    
    $('#play-one').click(function() {
        audioOne.play();
    });

    $('#pause-one').click(function() {
        audioOne.pause();
    });
    
    $('#stop-one').click(function() {
        audioOne.pause();
        audioOne.currentTime = 0;
    });
    
     });

$(document).ready(function() {
    var audioTwo = document.createElement('audio');
    audioTwo.setAttribute('src','assets/yo-no-se-manana.m4a');
    //https://jordanagk.github.io/experiments/assets/fadein-out.jquery.js
    
    $('#celia-cruz').click(function(){
        $('#celia-cruz').addClass('invisible');
        $('#showme-two').addClass('visible');
    });
    
    $('#play-two').click(function() {
        audioTwo.play();
    });

    $('#pause-two').click(function() {
        audioTwo.pause();
    });
    
    $('#stop-two').click(function() {
        audioTwo.pause();
        audioTwo.currentTime = 0;
    });
    
});

$(document).ready(function() {
    var audioThree = document.createElement('audio');
    audioThree.setAttribute('src','assets/yo-no-se-manana.m4a');
    //https://jordanagk.github.io/experiments/assets/fadein-out.jquery.js
    
    $('#el-gran-varon').click(function(){
        $('#el-gran-varon').addClass('invisible');
        $('#showme-three').addClass('visible');
    });
    
    $('#play-three').click(function() {
        audioThree.play();
    });

    $('#pause-three').click(function() {
        audioThree.pause();
    });
    
    $('#stop-three').click(function() {
        audioThree.pause();
        audioThree.currentTime = 0;
    });
    
});

$(document).ready(function() {
    var audioFour = document.createElement('audio');
    audioFour.setAttribute('src','assets/yo-no-se-manana.m4a');
    //https://jordanagk.github.io/experiments/assets/fadein-out.jquery.js
    
    $('#marc-anthony').click(function(){
        $('#marc-anthony').addClass('invisible');
        $('#showme-four').addClass('visible');
    });
    
    $('#play-four').click(function() {
        audioFour.play();
    });

    $('#pause-four').click(function() {
        audioFour.pause();
    });
    
    $('#stop-four').click(function() {
        audioFour.pause();
        audioFour.currentTime = 0;
    });
    
});

$(document).ready(function() {
    var audioFive = document.createElement('audio');
    audioFive.setAttribute('src','assets/yo-no-se-manana.m4a');
    //https://jordanagk.github.io/experiments/assets/fadein-out.jquery.js
    
    $('#opus').click(function(){
        $('#opus').addClass('invisible');
        $('#showme-five').addClass('visible');
    });
    
    $('#play-five').click(function() {
        audioFive.play();
    });

    $('#pause-five').click(function() {
        audioFive.pause();
    });
    
    $('#stop-five').click(function() {
        audioFive.pause();
        audioFive.currentTime = 0;
    });
    
});

$(document).ready(function() {
    var audioSix = document.createElement('audio');
    audioSix.setAttribute('src','assets/yo-no-se-manana.m4a');
    //https://jordanagk.github.io/experiments/assets/fadein-out.jquery.js
    
    $('#willie-colon').click(function(){
        $('#willie-colon').addClass('invisible');
        $('#showme-six').addClass('visible');
    });
    
    $('#play-six').click(function() {
        audioSix.play();
    });

    $('#pause-six').click(function() {
        audioSix.pause();
    });
    
    $('#stop-six').click(function() {
        audioSix.pause();
        audioSix.currentTime = 0;
    });
    
});
