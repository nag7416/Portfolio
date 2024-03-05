// $(document).ready(function(){
//     console.log('Window Height is: ' + $(window).height());
//     console.log('Document Height is: ' + $(document).height());
    
//     var previousScroll = 0;
//     $(window).scroll(function(){
//         var currentScroll = $(this).scrollTop();
//         if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
//             if (currentScroll > previousScroll){
//                 window.setTimeout(hideNav, 300);
//             } else {
//                 window.setTimeout(showNav, 300);
//             }
//             previousScroll = currentScroll;
//         }
//     });
    
//     function hideNav() {
//         $(".nav").removeClass("is-visible").addClass("is-hidden");
//     }
//     function showNav() {
//         $(".nav").removeClass("is-hidden").addClass("is-visible");
//     }
    
// });




$(document).ready(function(){
    $(window).on('load', function(){
        $('.loader').fadeOut("slow");
    })
})




$(document).ready(function(){
    $('nav .right .menu').click(function(){
        $('nav .right .menu').toggleClass('active');
        $('.menuoverlay').toggleClass('active');
    })
})







window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
var overlay = document.querySelector('.offline');
function updateStatus(event){
    if(navigator.onLine){
        console.log('Your connection is back');
        overlay.classList.remove('active');
    } else {
        console.log('You have lost your internet connection');
        overlay.classList.add('active');
    }
}