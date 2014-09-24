(function($) {

	$('a').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('changeColor');
	})

})(jQuery);