
$(document).ready(function(){
	var nav = $('.header-content');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 56) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
    $('.menu').onePageNav();
});