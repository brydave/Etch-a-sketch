$(document).ready(function(){
  console.log("This is ready to go!");

  $('#gridnumber').keypress(function(e){
    if(e.keyCode==13)
      createBlocks();
  });

})

function createBlocks(){
  var $gridSize = $('input#gridnumber').val();

  // first clear all of the blocks
  $('.block').remove();

  // then loop through the input number
  // and generate that number of blocks
  for (var i = 0; i < $gridSize; i++){
    var $block = $('<div class="block"></div>');
    $('.grid').append($block);
  }

  // this is a test
  if ($('.grid').has('.block')) {
    console.log("It has a block");
  } else {
    console.log("nope it doesn't have blocks");
  }

  console.log($gridSize);
}