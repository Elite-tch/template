/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	const lenis = new Lenis()
	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)
	/*
preloader
====start====
*/
	jQuery(window).on('load', function(){
		jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
	});

/*
Wow Animation
====Start====
*/
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});

	/*
Marquee
====start====
*/
	jQuery('.art-banner-bottom-scroller').marquee({
		gap: 20,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
/*
ScrollUp
====start====
*/
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	jQuery(window).on('load', function(){
		const boxes = gsap.utils.toArray('.txt_item_active');
		boxes.forEach(svg => {
			gsap.to(svg, {
				scrollTrigger: {
					trigger: svg,
					start: "top 100%",
					end: "bottom bottom",
					toggleClass: "active",
					duration: 3,
					delay:1,
					toggleActions: "play play play reverse",
					once: true,
				}
			});
		});
	});
	/*
Header Area
====start====
*/
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="far fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.log-header-section').addClass('sticky-on')
		} else {
			jQuery('.log-header-section').removeClass('sticky-on')
		}
	});
	$(function(o){
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
	});
	
	$(".cart_close_btn, .body-overlay").on("click", function() {
		$(".cart_sidebar").removeClass("active"), $(".body-overlay").removeClass("active")
	}), $(".header-cart-btn").on("click", function() {
		$(".cart_sidebar").addClass("active"), $(".body-overlay").addClass("active")
	})


	// search-popup-start
	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_box_active').addClass('active');
	});

	$('.overlay, .search_box_close').on('click', function() {
		$('.search_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$(document).on('keydown', function(event) {
		if (event.key === 'Escape') {
			$('.search_box_active').removeClass('active');
			$('.overlay').removeClass('active');
		}
	});


	// offcanvas-start
	$('.offcanvas_toggle').on('click', function() {
		$('.overlay, .offcanvas_box_active').addClass('active');
	});

	$('.overlay, .offcanvas_box_close').on('click', function() {
		$('.offcanvas_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$(document).on('keydown', function(event) {
		if (event.key === 'Escape') {
			$('.offcanvas_box_active').removeClass('active');
			$('.overlay').removeClass('active');
		}
	});


	
	jQuery(window).on('load',function(){
		var st = $(".banner-text-title");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			gsap.set(el, { perspective: 400 });


			if( $(el).hasClass('banner_title') ){
				gsap.set(el.split.words, {
					y: "50",
					opacity: 0,
					ease: "circ.out",
					ease: "Back.easeOut",
				});
			}

			el.anim = gsap.to(el.split.words, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				color: 'inherit',
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: .5, 
				stagger: 0.2,
				delay:1,
			});
		});
	});
	let splitTextLines = gsap.utils.toArray(".art-text p");
	splitTextLines.forEach(splitTextLine => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				duration: 2,
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
		});

		const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "lines" })
		tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, top: 20, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
	});
	var st = jQuery(".tx-split-text");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		gsap.set(el, { perspective: 1000 });
		if( jQuery(el).hasClass('split-in-right') ){
			gsap.set(el.split.words, {
				scale: 0,
				opacity: 0,
				y: 100,
				ease: "back.out(2)",
			});
		}
		el.anim = gsap.to(el.split.words, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			x: "0",
			y: "0",
			rotateX: "0",
			rotation: 0,
			rotationX: "0",
			color: 'inherit',
			webkitTextStroke: "0px white",
			scale: 1,
			opacity: 1,
			yPercent: 0,
			duration: 0.6, 
			stagger: 0.03,
		});
	});

	var slider = new Swiper('.iner-page-slide-active', {
		spaceBetween: 0,
		slidesPerView: 5,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		navigation: {
			nextEl: ".iner-page-slider-next",
			prevEl: ".iner-page-slider-prev",
		},
		pagination: {
			el: ".lg-iner-page-slider-pagi",
			clickable: true,
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 2,
				spaceBetween: 50,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	if(window.innerWidth> 1440){
		gsap.utils.toArray(".art-counter-title-2").forEach(function(container) {
			let image = container.querySelector(".counter-title-2");

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					scrub: true,
					pin: false,
					start: 'top 100%',
					end: "bottom center",
				},
				defaults: {
					ease: "linear",
					duration: 2
				}
			}); 
			tl.from(image, {
				yPercent: -400,
				ease: "none",
			}).to(image, {
				yPercent: 10,
				fontWeight: 400,
				fontSize: 45,
				maxWidth: 800,
				ease: "none",
			}); 
		});
	};
	jQuery('.art-marquee-1').marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.arl-btn-grp a, .main-navigation ul li a').on("click", function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top -0
				}, 1000);
				return false;
			}
		}
	});
	$('.counter').counterUp({
		delay: 15,
		time: 1500,
	});
})(jQuery);