
// multiple sliders

$('.slider').each(function(){
var slickInduvidual = $(this);
slickInduvidual.slick({
nextArrow: slickInduvidual.next().find('.right'),
prevArrow: slickInduvidual.next().find('.left')
});
})

console.log('try');


$(document).ready(function () {
    var x = document.getElementsByClassName('over')[0];

    $(x).on('mouseover', function () {
        console.log(x);
        var min = 0, max = 98;
        function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }
        
        $(x).css('left', randomInteger(min, max) + '%');
        $(x).css('top', randomInteger(min, max) + '%');
        console.log(randomInteger(min, max));
    });


});