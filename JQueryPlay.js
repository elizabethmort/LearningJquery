/**
 * Created by elizabeth on 9/29/14.
 */
//TogglePanel's JQuery/Javascript
$(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow')
    });
});



//Circle/Button's JQuery/JavaScript
function clickMe() {
    $('.circle').fadeOut(1000);
    $('.circle').fadeIn(1000);
};

$(function() {
    $('button').mouseenter( function() {
        $('button').fadeTo('fast',1);
    });
    $('button').mouseleave( function() {
        $('button').fadeTo('fast',.75);
    });
});

$(function() {
    $('.circle').click(function() {
        $(this).fadeOut(1000);
        $(this).fadeIn(1000);
    });
});