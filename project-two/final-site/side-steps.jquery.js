
//https://codepen.io/juliogcampos/pen/BzdjwY

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_form_steps
//https://stackoverflow.com/questions/14408891/getelementbyid-multiple-ids

//  button.innerHTML = "Click me: " + count;
//var nextstep = document.getElementById("next-step"),
//var previousstep = document.getElementById("previous-step"),
//https://javascript.info/searching-elements-dom
//var steps = document.querySelectorAll(".previous-step", ".next-step")
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_queryselectorall_class

$(document).ready(function(){
    
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselectorall_class
var x = document.querySelectorAll(".buttons");
    
var countnext = 0;
var countplay  = 0;

var previousstep = x[0];
var player = x[1];
var nextstep = x[2];

//https://www.w3schools.com/jquery/eff_delay.asp
    
player.onclick = function(){
    $(".rotate-lright").animate({
        top: '50px',
    });

    $(".rotate-fleft").animate({
        top: '50px',
    });
    
    $(".rotate-lright").animate({
        top: '20px',
    });

    $(".rotate-fleft").animate({
        top: '20px',
    });
    
    //add source here
    $(".rotate-lleft").delay(1000).animate({
        top: '-75px',
    });

    $(".rotate-fright").delay(1000).animate({
        top: '-75px',
    });
  
    $(".rotate-lleft").animate({
        top: '-40px',
    });

    $(".rotate-fright").animate({
        top: '-40px',
    });
    
}



nextstep.onclick = function() {
  countnext += 1;

  if (countnext == 1){
    $(".rotate-lright").animate({
        top: '50px',
    });

    $(".rotate-fleft").animate({
        top: '50px',
    });
  }
 if (countnext == 2){
    $(".rotate-lright").animate({
        top: '20px',
    });

    $(".rotate-fleft").animate({
        top: '20px',
    });
  }

  if (countnext == 3){
    $(".rotate-lleft").animate({
        top: '-75px',
    });

    $(".rotate-fright").animate({
        top: '-75px',
    });
  }
  if (countnext == 4){
    $(".rotate-lleft").animate({
        top: '-40px',
    });

    $(".rotate-fright").animate({
        top: '-40px',
    });
      
    countnext=0;
  }

  nextstep.innerHTML = "click me " + countnext;
}

previousstep.onclick = function() {
    
    if(countnext==0){
        $(".rotate-lleft").animate({
            top: '-75px',
        });

        $(".rotate-fright").animate({
            top: '-75px',
        });
          
        countnext=3;
    }
    
    if(countnext==1){
        $(".rotate-lright").animate({
            top: '20px',
        });

        $(".rotate-fleft").animate({
            top: '20px',
        });
        
        countnext=0;
        
    }
    
    if(countnext==2){
        $(".rotate-lright").animate({
            top: '50px',
        });

        $(".rotate-fleft").animate({
            top: '50px',
        });
        
        countnext=1;
        
    }
    
    if(countnext==3){
        $(".rotate-lleft").animate({
            top: '-40px',
        });

        $(".rotate-fright").animate({
            top: '-40px',
        });
        
        countnext=2;
        
    }
    
    if(countnext==4){
        $(".rotate-lleft").animate({
            top: '-75px',
        });

        $(".rotate-fright").animate({
            top: '-75px',
        });
        
        countnext=3;
        
    }


    previousstep.innerHTML = "click me " + countnext;
}

});