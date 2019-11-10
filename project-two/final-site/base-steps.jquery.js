
//https://codepen.io/juliogcampos/pen/BzdjwY

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_form_steps
//https://stackoverflow.com/questions/14408891/getelementbyid-multiple-ids

//https://javascript.info/searching-elements-dom

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
    
    $(".rotate-lleft").animate({
        left: '255px',
    });

    $(".rotate-fright").animate({
        left: '445px',
    });
    
    $(".rotate-lleft").animate({
        left: '185px',
    });

    $(".rotate-fright").animate({
        left: '375px',
    });
    
    $(".rotate-lleft").animate({
        left: '115px',
    });

    $(".rotate-fright").animate({
        left: '305px',
    });
    
    $(".rotate-lleft").animate({
        left: '185px',
    });

    $(".rotate-fright").animate({
        left: '375px',
    });
        countplay +=1;

    $(".rotate-lright").delay(2000).animate({
        left: '255px',
    });

    $(".rotate-fleft").delay(2000).animate({
        left: '445px',
    });
    
    $(".rotate-lright").animate({
        left: '185px',
    });

    $(".rotate-fleft").animate({
        left: '375px',
    }); 
    
    $(".rotate-lright").animate({
        left: '115px',
    });

    $(".rotate-fleft").animate({
        left: '305px',
    });
    
    $(".rotate-lright").animate({
        left: '185px',
    });

    $(".rotate-fleft").animate({
        left: '375px',
    }); 
    
    
    
}



nextstep.onclick = function() {
  countnext += 1;

  if (countnext == 1){
    $(".rotate-lleft").animate({
        left: '255px',
    });

    $(".rotate-fright").animate({
        left: '445px',
    });
  }
 if (countnext == 2){
    $(".rotate-lleft").animate({
        left: '185px',
    });

    $(".rotate-fright").animate({
        left: '375px',
    });
  }

  if (countnext == 3){
    $(".rotate-lleft").animate({
        left: '115px',
    });

    $(".rotate-fright").animate({
        left: '305px',
    });
  }
  if (countnext == 4){
    $(".rotate-lleft").animate({
        left: '185px',
    });

    $(".rotate-fright").animate({
        left: '375px',
    });
  }

    if (countnext == 5){
    $(".rotate-lright").animate({
        left: '115px',
    });

    $(".rotate-fleft").animate({
        left: '305px',
    });
  }
    
   if (countnext == 6){
    $(".rotate-lright").animate({
        left: '185px',
    });

    $(".rotate-fleft").animate({
        left: '375px',
    });
  }

  if (countnext == 7){
    $(".rotate-lright").animate({
        left: '255px',
    });

    $(".rotate-fleft").animate({
        left: '445px',
    });
  }
  if (countnext == 8){
    $(".rotate-lright").animate({
        left: '185px',
    });

    $(".rotate-fleft").animate({
        left: '375px',
    });
      
    countnext = 0;
  }
  
}

previousstep.onclick = function() {
    
  if (countnext == 0){
        $(".rotate-lright").animate({
            left: '255px',
        });

        $(".rotate-fleft").animate({
            left: '445px',
        });
      
      countnext=7;
  }
    
  if (countnext == 1){
      $(".rotate-lleft").animate({
          left:'185px',
      });
      
      $(".rotate-fright").animate({
          left:'375px',
      });
    
    countnext=0;
  }

    if (countnext == 2){
        $(".rotate-lleft").animate({
            left: '255px',
        });

        $(".rotate-fright").animate({
            left: '445px',
        });
        
        countnext=1;
      }
     if (countnext == 3){
        $(".rotate-lleft").animate({
            left: '185px',
        });

        $(".rotate-fright").animate({
            left: '375px',
        });
        
        countnext=2;
      }

      if (countnext == 4){
        $(".rotate-lleft").animate({
            left: '115px',
        });

        $(".rotate-fright").animate({
            left: '305px',
        });
          
        countnext=3;
      }
      if (countnext == 5){

          $(".rotate-lright").animate({
            left:'185px',
          });
      
          $(".rotate-fleft").animate({
              left:'375px',
          });
        countnext=4;
      }

        if (countnext == 6){
        $(".rotate-lright").animate({
            left: '115px',
        });

        $(".rotate-fleft").animate({
            left: '305px',
        });
            
        countnext=5;
      }

       if (countnext == 7){
        $(".rotate-lright").animate({
            left: '185px',
        });

        $(".rotate-fleft").animate({
            left: '375px',
        });
        
        countnext=6;
      }
}

});

//I used code from the following websites and forums to develop my jQuery

//Campos, Júlio. “Click Counter with Javascript.” Code Pen, codepen.io/juliogcampos/pen/BzdjwY.

//“JQuery Delay() Method.” JQuery Effect Delay() Method, www.w3schools.com/jquery/eff_delay.asp.

//“Searching: GetElement*, QuerySelector*.” The Modern Javascript Tutorial, 17 Oct. 2019, javascript.info/searching-elements-dom.

//“GetElementByID - Multiple IDs.” Stack Overflow, 1 Apr. 1963, stackoverflow.com/questions/14408891/getelementbyid-multiple-ids.

//“Tryit Editor v3.6 queryselectorall_class.” Tryit Editor v3.6, www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselectorall_class.

//“Tryit Editor v3.6: Element QuerySelector All_Class.” Tryit Editor v3.6, www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_queryselectorall_class.

//“Tryit Editor v3.6: Form Steps.” Tryit Editor v3.6, www.w3schools.com/howto/tryit.asp?filename=tryhow_js_form_steps.
