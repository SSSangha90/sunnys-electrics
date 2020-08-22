$(document).ready(function(){
    
    /*---for the sticky navigation---*/
    $('.js--section-services').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
  offset: '60px;'
});
    
    /*---scroll on buttons---*/
    $('.js--scroll-to-enquiries').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });
    
    $('.js--scroll-to-services').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000);
    });
	
	    /*--nav scroll--*/
$(function(){
    $("a[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
         location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
    });
});
	
/*-----animation on scroll ---*/
	
	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	})
	
	/* mobile nav with menu icon--*/
	
	var nav = $('.js--main-nav');
	var icon = $('.js--nav-icon i');
	
	$('.js--nav-icon').click(function(){
		
		nav.slideToggle(200);
		
		if (icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		}else{
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});
	
	/*returning to normal in full screen*/
	
	$(window).resize(function(){

		if ($(window).width() > 767){
			nav.css("display", "block");
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			nav.css("display", "none");
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});

	var map = new GMaps({
	  div: '.map',
	  lat: 51.5305152,
	  lng: -0.46,
		zoom: 12
});

	map.addMarker({
  lat: 51.5240205,
  lng: -0.5319798,
  title: 'Iver',
  infoWindow: {
  content: '<p>Iver, Bucks</p>'
}
});
	
$('#copyrightYear').html(new Date().getFullYear());
	
});
    

