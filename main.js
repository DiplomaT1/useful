
// multiple sliders

$('.slider').each(function(){
var slickInduvidual = $(this);
slickInduvidual.slick({
nextArrow: slickInduvidual.next().find('.right'),
prevArrow: slickInduvidual.next().find('.left')
});
})

console.log('try');