// Simple implementation for complex numbers
var complex = function(reel,imag) {
	that = {};
	that.get_reel = function () {
		return reel;
	};
	that.get_imag = function () {
		return imag;
	};
	return that;
};