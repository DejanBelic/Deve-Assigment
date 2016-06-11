
var images=new Array('resources/img/header.png','resources/img/header3.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.background-header')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(4000,function(){
        setTimeout(doSlideshow,4000);
    });
}

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}


















$(document).ready(function($){

	var offset = 300,
		offset_opacity = 1200,
		//Duration Of The Scrolling Animation
		scroll_top_duration = 700,
		//Grab Back To The Top Link
		$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//Smooth Scrool To Top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
