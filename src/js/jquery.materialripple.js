/* jQuery MaterialRipple Plugin */
/* 2014 Dominik Biedebach */
/* modiffied by Dawid Czarnik */

import $ from 'jquery';

var scope = {}; // leaking globals is soo 2009.

function _ripl(options) {
	var defaults = {
		rippleClass: 'ripple-wrapper'
	}
	$.extend(defaults, options);

	$('body').on('animationend webkitAnimationEnd oAnimationEnd', '.' + defaults.rippleClass, function () {
    removeRippleElement(this);
});

	var addRippleElement = function(element, e) {
		$(element).append('<span class="added '+defaults.rippleClass+'"></span>');
		scope.newRippleElement = $(element).find('.added');
		scope.newRippleElement.removeClass('added');

		// get Mouse Position
		var mouseX = e.pageX;
		var mouseY = e.pageY;

		// for each ripple element, set sizes
		scope.elementWidth = $(element).outerWidth();
		scope.elementHeight = $(element).outerHeight();
		scope.d = Math.max(scope.elementWidth, scope.elementHeight);
		scope.newRippleElement.css({'width': scope.d, 'height': scope.d});

		var rippleX = e.clientX - $(element).offset().left - scope.d/2 + $(window).scrollLeft();
		var rippleY = e.clientY - $(element).offset().top - scope.d/2 + $(window).scrollTop();

		// Position the Ripple Element
		scope.newRippleElement.css('top', rippleY+'px').css('left', rippleX+'px').addClass('animated');
	}

	var removeRippleElement = function($element) {
		$element.remove();
	}

	// add Ripple-Wrapper to all Elements
	$(this).addClass('has-ripple');

	// Let it ripple on click
	$(this).bind('click', function(e){
		addRippleElement(this, e);
	});
}

export default function rippleEffect(selector, options) {
	var opt = options || {};
	var el = $(selector);
	_ripl.call(el, opt);
} 