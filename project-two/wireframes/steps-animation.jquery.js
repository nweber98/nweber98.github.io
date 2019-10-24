
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
  nextstep.innerHTML = "click me " + countnext;
}

previousstep.onclick = function() {
  countprevious += 1;
  previousstep.innerHTML = "click me " + countprevious;
}

});