$(document).ready(function(){
  console.log("This is ready to go!");

  // Create and resize the blocks
  createBlocks();
  resizeBlocks();

  // Create the blocks on enter
  $('#gridnumber').keypress(function(e){
    if(e.keyCode==13){
      createBlocks();
      resizeBlocks();
    }
  });

});

function createBlocks(){
  var $gridSize = $('input#gridnumber').val();

  // first clear all of the blocks
  $('.block').remove().fadeOut();

  // then loop through the input number
  // and generate that number of blocks
  for (var i = 0; i < $gridSize; i++){
    var $block = $('<div class="block"></div>');
    $('.block-wrapper').append($block).fadeIn();
  }

  console.log($gridSize);
}

function resizeBlocks(){
  // get grid area
  // the area is the same for the number of blocks of a specific size
  // consider decreasing the size by the number of blocks
  // i.e. (500 blocks = specific area & block size) - block size/unit increase

  // gathering up all of the quantities
  // start by finding width and height of 'grid'
  var $width = $('.grid').width();
  var $height = $('.grid').height();
  // then find the area of 'grid'
  var $area = $width * $width;
  // get the quantity of block input in the system
  var $blockNumber = $('input#gridnumber').val();
  // calculate the area
  var $blockArea = $area / $blockNumber;
  // get the width and height, floor the %, then subtrack 1 to fit visually
  var $blockDimensions = Math.floor(Math.sqrt($blockArea) - 1);

  // assign the new height and width
  $('.block').width($blockDimensions + "px");
  $('.block').height($blockDimensions + "px");

  // Change the color on Hover
  changeColor()
}

function createBlocksResize(){
// Runs both functions in one function 
// this is for the "create" button
  createBlocks();
  resizeBlocks();
}

function changeColor(){
  // Change the color on hover to blue if the blue radio button is selected
  if($('#radio-blue').is(':checked')){
    $('.block').hover( function(){
      $(this).addClass('blue');
    });
  } else if($('#radio-variable').is(':checked')){
    $('.block').hover(function(){
      $(this).addClass('variable');
    });
  } else if($('#radio-surprise').is(':checked')){
    $('.block').hover(function(){
      $(this).addClass('surprise');
    });
  } else{
    $('.block').hover(function(){
      $(this).addClass('blue');
    });
  }
}