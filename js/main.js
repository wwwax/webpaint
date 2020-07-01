$(document).ready(function() {
	$('.menu-burger').click(function(event) {
		$('.menu-burger').toggleClass('active');
		$('.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
