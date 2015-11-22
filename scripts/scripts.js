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

  // Reset color when clear is pushed
  $('button#clear').on("click", function(){
    clearAll();
  });

  // fix the toggle selections found here: http://jsfiddle.net/davidelrizzo/DYJkG/
  $(".toggle-btn:not('.noscript') input[type=radio]").addClass("visuallyhidden");
  $(".toggle-btn:not('.noscript') input[type=radio]").change(function() {
      if( $(this).attr("name") ) {
          $(this).parent().addClass("success").siblings().removeClass("success")
      } else {
          $(this).parent().toggleClass("success");
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

function clearAll(){
  // Clear all of the classes by resetting the class attribute
  $('.block').attr('class', 'block');
}

function changeColor(){
  // by default add the class blue on hover
  $('.block').hover(function(){
    $(this).addClass('blue');
  });
    // change to blue on hover
    $('input#radio-blue').click(function(){
      $('.block').hover(function(){
        // resets state of block
        $(this).attr('class', 'block');
        // add blue class on hover
        $(this).addClass('blue');
      });
    });

    // Hover a random color
    $('input#radio-variable').click(function(){
      $('.block').hover(function(){
        // reset classes
        $(this).attr('class', 'block');
        // set the color values in an array
        var colors = ['red', 'blue', 'light', 'lightblue', 'lightestblue'];
        // select a random color
        var ranNum = Math.floor(Math.random() * colors.length);
        // add the random class number
        $(this).addClass(colors[ranNum]);        
      });
    });

    // change to opacity on hover
    $('input#radio-surprise').click(function(){
      $('.block').hover(function(){
        // resets state of block
        $(this).attr('class', 'block');
        // Add class for fade-out
        $(this).addClass('fade-out');
      });
    });
}

