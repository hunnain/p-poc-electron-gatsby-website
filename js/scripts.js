/* Template: Leno - Mobile App HTML Landing Page Template
   Original Author: Inovatik
   Created: Mar 2019
   Description: Custom JS file
*/


(function($) {
    "use strict";

	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});


	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    $(document).ready(function () {
        /* Rotating Text - Morphtext */
        $("#js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "fadeIn",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 2000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    });

    $(document).ready(function () {
        /* Image Slider - Magnific Popup */
        $('.popup-link').magnificPopup({
            removalDelay: 300,
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure ' + this.st.el.attr('data-effect'));
                },
                beforeClose: function() {
                    $('.mfp-figure').addClass('fadeOut');
                }
            },
            gallery:{
                enabled:true //enable gallery mode
            }
        });


        /* Video Lightbox - Magnific Popup */
        $('.popup-youtube, .popup-vimeo').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: function(url) {
                            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                            if ( !m || !m[1] ) return null;
                            return m[1];
                        },
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: function(url) {
                            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                            if ( !m || !m[5] ) return null;
                            return m[5];
                        },
                        src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    }
                }
            }
        });


        /* Lightbox - Magnific Popup */
        $('.popup-with-move-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        });
    });

  function formatStats(n){
    if(!n) return 0;

    var number = n/1000;
    if(number > 10){
      return number.toFixed(1)+"k";
    } else {
      return n;
    }
  }

  function updateCounters(){
    $('.counter-value').each(function() {
      var $this = $(this),
      countTo = $this.attr('data-count');
      $({
      countNum: $this.text()
      }).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing: 'swing',
        step: function() {
        $this.text(formatStats(Math.floor(this.countNum)));
        },
        complete: function() {
        $this.text(formatStats(this.countNum));
        }
      });
    });
  }

    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
        updateCounters();
			  a = 1;
			}
		}
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

  $.ajax({
    url: 'https://api.github.com/repos/lensapp/lens',
    success: function( data ){
      if(data.stargazers_count && data.forks){
        $( "#happy-users-count" ).attr( 'data-count', Math.round(data.stargazers_count * 5.98) );
        $( "#stargazers-count" ).attr( 'data-count', data.stargazers_count );
        $( "#forks-count" ).attr( 'data-count', data.forks );
        updateCounters();
      }
    },
  });

  /*
  function getDownloadsPerRelease(){
    var assets = {};
    $.ajax({
      url: 'https://api.github.com/repos/lensapp/lens/releases',
      success: function( data ){
        data.forEach(release => {
          if(!release.draft) {
            if(release.assets){
              release.assets.forEach( asset => {
                if(!assets[asset.name]){
                  assets[asset.name] = asset.download_count;
                } else {
                  assets[asset.name] = assets[asset.name] + asset.download_count;
                }
              });
            }
          }
        });
      },
    });
  }
  */

})(jQuery);
