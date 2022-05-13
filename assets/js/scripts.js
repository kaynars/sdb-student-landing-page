

$(document).ready(function(){
	
	$('[data-fancybox]').fancybox({
		onInit : function( instance ) {
			instance.$refs.bg.css('background', 'rgba(80, 163, 130, 0.9)');
		}
	});
	$(".header__megamenu-btn").click(function(){
		$(this).toggleClass("active");
		$(".megamenu").toggleClass("active");
		$("body").toggleClass("lock");
	});
	$(".megamenu a").click(function(){
		$(".header__megamenu-btn").removeClass("active");
		$(".megamenu").removeClass("active");
		$("body").removeClass("lock");
	});
	
	$('.owl-1').owlCarousel({
		margin:0,
		loop:true,
		autoWidth:true,
		items:3,
		dots:false,
		stagePadding:0,
		autoHeight:true,
		responsive : {
			0 : {
				autoWidth:false,
				autoHeight:false,
				items:1,
			},			
			769 : {
				autoWidth:true,
			}
			
		}
		
	});
	$('.owl-2').owlCarousel({
		margin:65,
		loop:true,
		items:2.5,
		dots:false,
		responsive : {
			0 : {
				margin:20,
				items:1.5,
			},			
			769 : {
				margin:40,
				items:2.5,
			},						
			1600 : {
				margin:65,
				items:2.5,
			}
			
			
		}
	});
	
	$('[data-fancybox]').fancybox({
		youtube : {
			controls : 0,
			showinfo : 0
		},
		vimeo : {
			color : 'f00'
		}
	});
	
	
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			
			// Store hash
			var hash = this.hash;
			
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function(){
				
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

