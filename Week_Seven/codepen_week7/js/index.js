
function nameoffunction (){//declares the function
  $('#textbox-3').on('click', function() {//promotes input
    $(this).css('background', getRandomColor());//indicates what is going to change
    $(this).css('height', '150px');
    $(this).append('this needs some practice');
      });
  
   $('#textbox-2').hover(function() {//promotes input
    $(this).css('background', getRandomColor());//indicates what is going to change
    $(this).css('height', '150px');
    $(this).append('hi');
      });
  
  
 };
nameoffunction();

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}