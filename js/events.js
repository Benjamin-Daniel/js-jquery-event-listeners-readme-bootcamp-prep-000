//define functions here

$(document).ready(function(){

// call functions here

});


function getIt() {
  $("p").on("click", function() {
    alert("Hey");
  })
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty");
  })
}
function pressIt() {
  $("input#typing").on("keydown", function(key) {
    if(key.which == 71) {
      alert("you have pressed G");
    }
  })
}