$(() => {
// resize main so footer is always on the bottom
adjustMainHeight();
window.addEventListener('resize', adjustMainHeight);

function adjustMainHeight() {
    const footerHeight = document.querySelector('footer').offsetHeight;
    const main = document.querySelector('main');
    main.style.minHeight = `calc(100vh - ${footerHeight}px)`;
// displays body after adjusting the main size to prevent flickering
    const body = document.querySelector('body');
    body.style.visibility = 'visible';
}

const $a = $('a').hover(function (){  
    $(this).css({'text-decoration':'underline'})
    
    }, function() {
        $(this).css({'text-decoration':'none'})
    });

});