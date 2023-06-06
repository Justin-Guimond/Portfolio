$(() => {
const $a = $('a').hover(function (){  
        $(this).css({'text-decoration':'underline'})
        
    }, function() {
        $(this).css({'text-decoration':'none'})

});

$('.open').click(function(){
    $('.popupOverlay').addClass('active');
});
$('.close, .popupOverlay').click(function(){
    $('.popupOverlay').removeClass('active');
})


});
