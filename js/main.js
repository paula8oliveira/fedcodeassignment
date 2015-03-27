
$(document).ready(function(){
	var nav = $('.header-content');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 56) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
    $('.menu, .slideout-menu ul').onePageNav();
    
     $('.slideout-menu-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.slideout-menu');
    	var slideoutMenuWidth = $('.slideout-menu').width();
    	
    	// toggle open class
    	slideoutMenu.toggleClass("open");
    	
    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	left: "0px"
	    	});	
    	} else {
	    	slideoutMenu.animate({
		    	left: -slideoutMenuWidth
	    	}, 250);	
    	}
    });

    
});