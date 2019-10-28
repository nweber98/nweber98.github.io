
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
var countprevious = 0;

var previousstep = x[0];
var nextstep = x[2];

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
  
  
  nextstep.innerHTML = "click me " + countnext;
}

previousstep.onclick = function() {
  countprevious += 1;
    
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

  previousstep.innerHTML = "click me " + countnext;
}

});