$(() => {

adjustMainHeight();
window.addEventListener('resize', adjustMainHeight);

function adjustMainHeight() {
    const footerHeight = document.querySelector('footer').offsetHeight;
    const main = document.querySelector('main');
    main.style.minHeight = `calc(100vh - ${footerHeight}px)`;

    const body = document.querySelector('body');
    body.style.visibility = 'visible';
}

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

const $resume = $('img').hover(function (){
    if (window.innerWidth >= 691)  
        $(this).css({'cursor':'pointer'})
    
}, function() {
    $(this).css({'cursor':'default'})

});



});