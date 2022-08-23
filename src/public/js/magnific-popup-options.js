// $(function() {
  // MagnificPopup
	var magnifPopup = function() {
		console.log($('.image-popup'))
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};
	var magnifVideo = function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps, .popup-iframe').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        // mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false,
		callbacks:{
			elementParse: function(item) {
				// Function will fire for each target element
				// "item.el" is a target DOM element (if present)
				// $(item.el).data('cosa','');
				// $(item).attr('data-datos','');
				// console.log(item);
			  },
			change: function(item) {
				// console.log(item.src);
				var groupBTN = `<div class="btn-group btn-group-justified" role="group" aria-label="Justified button group" style="position:absolute">
				<a href="${item.src}" class="btn btn-primary btn-lg" role="button" target="_blank" rel="noopener noreferrer">Ver en responsive</a>				
				<a href="#" class="mfp-close-btn-in  btn btn-dark btn-lg agreg_Car" role="button">Cotizar</a>
			  </div>`
				var spine ='<div class="loading" style="top:0;left:0;margin:0;position:absolute; height:100%;width:100%"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
				// this.content.append('<div class="loading" style="top:0;left:0;margin:0;position:absolute; height:100%;width:100%">');
				this.content.append(spine);
				this.content.append(groupBTN);
				// console.log()
				this.content.find('iframe.mfp-iframe').attr('data-cosa','');
				this.content.find('iframe.mfp-iframe').on('load',function(){
					
					// $(this).attr('data-datos','');
					// $(this).data('cosa','');
					$(this).siblings('div.loading').fadeOut("500");
					// console.log(this);
				}); // Direct reference to your popup element
			  
				$(document).on('click','.agreg_Car',function(ev){
					ev.preventDefault();
					// $('.mfp-close').click();
					// $.magnificPopup.close();
					$('#myModal').modal('toggle')
					$('.ir').on("click", function(){
						$('#myModal').modal('hide');
						$.magnificPopup.close();
						setTimeout(function(){
							window.scrollTo(0, $('#contact').offset().top+200);
							$("input#name").focus()
						  
						},1000)
						
					})

					console.log(ev.target)
					ev.stopImmediatePropagation()
				})
			
			
			}
		}
    });
	};

	


	// Call the functions 
	magnifPopup();
	magnifVideo();

// });