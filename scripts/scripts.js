$(document).ready(function(){
  // Create and resize the blocks
  createBlocksResize();

  // Create the blocks on enter
  $('#gridnumber').keypress(function(e){
    if(e.keyCode==13){
      createBlocks();
      resizeBlocks();
    }
  });

  // Change the color on Hover
  changeColor();

  // Variable Color for second option
  console.log(randomColors());
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

}

function createBlocksResize(){
// Runs both functions in one function 
// this is for the "create" button
  createBlocks();
  resizeBlocks();
}

function changeColor(){

  $('.block').hover(function(){
    $(this).addClass('blue');
  })

  $('#selection input').on('change', function() {
    var selection = $('input[name=option]:checked', '#selection').val();
    console.log(selection);

    // Change class based on selection
    if(selection === 'blue'){
      $('.block').hover(function(){
        $(this).addClass('blue');
        $(this).removeClass('variable');
        $(this).removeClass('surprise');
      })
    } else if(selection === 'variable'){
      $('.block').hover(function(){
        $(this).addClass('variable');
        $(this).removeClass('blue');
        $(this).removeClass('surprise');
      })
    } else if(selection === 'surprise'){
      $('.block').hover(function(){
        $(this).addClass('surprise');
        $(this).removeClass('blue');
        $(this).removeClass('variable');
      })
    } else{
      $('.block').hover(function(){
        $(this).addClass('blue');
      })
    };
  });
}

function randomColors(){
  // set the color values in an array
  var colors = ['#c60740', '#030f40;', '#02737f', '#69b7bf', '#FFFFFF'];
  // set min and max
  var min = 1;
  var max = 6;
  // generate a random number between 0 and 5
  var ranNum = function generateNum(){
    return (Math.floor(Math.random() * (max - min) + min)) - 1;
  }

  


}


