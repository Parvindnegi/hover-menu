$(document).ready(function(){
	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
		margin: 20,
		dots: true,
		nav: true,
		loop: true,
		nav:true,
		navText : ["","<img src='img/arrow-icon.png' alt='Previous' title='Previous'>"],
			responsive: {
			    0: {
			        items:1
			    	}
				}
			});
	});
    $('.asideNavCls, .accordion, .panel').hover(
       function(){ $(this).toggleClass('active') }
    )
});
