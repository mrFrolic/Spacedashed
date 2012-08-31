var ProcessingInit = function() {
	function resizeWindow() {
		var canvas = Processing.getInstanceById('canvas');
		canvas.resize($(window).width(), $(window).height());
	}


	$(window).resize(resizeWindow);
	resizeWindow();
}