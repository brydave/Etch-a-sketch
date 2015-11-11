$(document).ready(function(){
  console.log("This is ready to go!");

  $('#gridnumber').keypress(function(e){
    if(e.keyCode==13)
      createBlocks();
  });

})

function createBlocks(){
  var $gridSize = $('input#gridnumber').val();

  for (var i = 0; i < $gridSize; i++){
    var $block = $('<div class="block"></div>');
    $('.grid').append($block);
  }

  console.log($gridSize);
}