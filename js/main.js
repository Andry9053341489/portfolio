new WOW().init();

var mySwiper = new Swiper('.swiper-container', {

	autoplay: {
		delay: 5000,
	},

	// If we need pagination
	pagination: {
		el: '.project-pagination',
		bulletClass: 'project-bullet',
		bulletActiveClass: 'project-bullet-active',
		clickable: true,
	},
});
