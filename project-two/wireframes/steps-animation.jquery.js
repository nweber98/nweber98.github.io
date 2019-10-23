
//https://codepen.io/juliogcampos/pen/BzdjwY

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_form_steps
//

$(document).ready(function(){
    
var button = document.getElementById("next-step"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;

  if (count == 1){
    $(".rotate-lleft").animate({
        left: '255px',
    });

    $(".rotate-fright").animate({
        left: '445px',
    });
  }
    
   if (count == 2){
    $(".rotate-lleft").animate({
        left: '185px',
    });

    $(".rotate-fright").animate({
        left: '375px',
    });
  }

  if (count == 3){
    $(".rotate-lleft").animate({
        left: '115px',
    });

    $(".rotate-fright").animate({
        left: '305px',
    });
  }
  if (count == 4){
    $(".rotate-lleft").animate({
        left: '185px',
    });

    $(".rotate-fright").animate({
        left: '375px',
    });
  }

    if (count == 5){
    $(".rotate-lright").animate({
        left: '115px',
    });

    $(".rotate-fleft").animate({
        left: '305px',
    });
  }
    
   if (count == 6){
    $(".rotate-lright").animate({
        left: '185px',
    });

    $(".rotate-fleft").animate({
        left: '375px',
    });
  }

  if (count == 7){
    $(".rotate-lright").animate({
        left: '255px',
    });

    $(".rotate-fleft").animate({
        left: '445px',
    });
  }
  if (count == 8){
    $(".rotate-lright").animate({
        left: '185px',
    });

    $(".rotate-fleft").animate({
        left: '375px',
    });
      
    count = 0;
  }
};

});
