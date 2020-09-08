/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(document).ready(function() {
	$(".tree-care").hide()
});

var showTreeCare = document.getElementById("history");
showTreeCare.onclick = function() {
	$(".tree-care").toggle();
	if($(".tree-care").is(":visible")) {
		showTreeCare.innerHTML = "Hide Tree Care"
	}
	else {
		showTreeCare.innerHTML = "Learn More About Tree Care"
	}
};

var hideTreeCare = document.getElementById("hide-tree-care");
hideTreeCare.onclick = function() {
	$(".tree-care").toggle();
	if($(".tree-care").is(":visible")) {
		showTreeCare.innerHTML = "Hide Tree Care"
	}
	else {
		showTreeCare.innerHTML = "Learn More About Tree Care"
	}
};

function increase() {
	var tree = document.getElementById("tree");
	var currWidth = tree.clientWidth;
	tree.style.width = (currWidth + 5) + "px";
};

function decrease() {
	var tree = document.getElementById("tree");
	var currWidth = tree.clientWidth;
	tree.style.width = (currWidth - 5) + "px";
};

function reset() {
	var tree = document.getElementById("tree");
	count = 5;
	virginiaPrice = 30;
	whitePrice = 32.50;
	document.getElementById("size-counter").innerHTML = "Tree Size: " + count + " Feet";
	document.getElementById("virginia-counter").innerHTML = "<b>Virginia Pine</b> - $" + virginiaPrice.toFixed(2) + " |"
	document.getElementById("white-counter").innerHTML = "<b>White Pine</b> - $" + whitePrice.toFixed(2); 
	tree.style.width = "100px"
};

var plusButton = document.getElementById("plus-button"),
	count = 5;
	virginiaPrice = 30;
	whitePrice = 32.50;
	tallPrice = 0
plusButton.onclick = function() {
	count += 1;
	virginiaPrice = (count * 6.00);
	whitePrice = (count * 6.50);
	tallPrice = (count * 7.50)
	if(count < 10){
		document.getElementById("size-counter").innerHTML = "Tree Size: " + count + " Feet";
		document.getElementById("virginia-counter").innerHTML = "<b>Virginia Pine</b> - $" + virginiaPrice.toFixed(2) + " |"
		document.getElementById("white-counter").innerHTML = "<b>White Pine</b> - $" + whitePrice.toFixed(2);
		increase()
	}
	if(count >= 10){
		document.getElementById("size-counter").innerHTML = "Tree Size: " + count + " Feet";
		document.getElementById("virginia-counter").innerHTML = "<b>Virginia Pine</b> - $" + tallPrice.toFixed(2) + " |"
		document.getElementById("white-counter").innerHTML = "<b>White Pine</b> - $" + tallPrice.toFixed(2); 
		increase()
	}
	if(count >= 20) {
		count = 20;
		virginiaPrice = 150;
		whitePrice = 150;
		tallPrice = 150;
		document.getElementById("size-counter").innerHTML = "Tree Size: " + count + " Feet";
		document.getElementById("virginia-counter").innerHTML = "<b>Virginia Pine</b> - $" + tallPrice.toFixed(2) + " |"
		document.getElementById("white-counter").innerHTML = "<b>White Pine</b> - $" + tallPrice.toFixed(2);
		document.getElementById("tree").style.width = "175px";
	}
};

var minusButton = document.getElementById("minus-button")
minusButton.onclick = function() {
	count -= 1;
	virginiaPrice = (count * 6.00);
	whitePrice = (count * 6.50);
	tallPrice = (count * 7.50)
	if(count > 0 && count < 10){
		document.getElementById("size-counter").innerHTML = "Tree Size: " + count + " Feet";
		document.getElementById("virginia-counter").innerHTML = "<b>Virginia Pine</b> - $" + virginiaPrice.toFixed(2) + " |"
		document.getElementById("white-counter").innerHTML = "<b>White Pine</b> - $" + whitePrice.toFixed(2);
		decrease()
	}
	if(count >= 10) {
		document.getElementById("size-counter").innerHTML = "Tree Size: " + count + " Feet";
		document.getElementById("virginia-counter").innerHTML = "<b>Virginia Pine</b> - $" + tallPrice.toFixed(2) + " |"
		document.getElementById("white-counter").innerHTML = "<b>White Pine</b> - $" + tallPrice.toFixed(2);
		decrease()
	}
	if(count <= 1) {
		count = 1;
		virginiaPrice = 6;
		whitePrice = 6.5;
		document.getElementById("size-counter").innerHTML = "Tree Size: " + count + " Feet";
		document.getElementById("virginia-counter").innerHTML = "<b>Virginia Pine</b> - $" + virginiaPrice.toFixed(2) + " |"
		document.getElementById("white-counter").innerHTML = "<b>White Pine</b> - $" + whitePrice.toFixed(2);
	}
};

var resetButton = document.getElementById("reset-button")
resetButton.onclick = function() {
	reset()
};



(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);