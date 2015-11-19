$(document).ready(function(){
  console.log("This is ready to go!");

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
    var $block = $('<section class="block"></div>');
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
  var $area = $width * $height;
  // get the quantity of block input in the system
  var $blockNumber = $('input#gridnumber').val();
  // calculate the area
  var $blockArea = $area / $blockNumber;
  var $blockDimensions = Math.sqrt($blockArea);

  // assign the new height and width
  $('.block').width($blockDimensions + "px");
  $('.block').height($blockDimensions + "px");

  // determining size of block based on area

}