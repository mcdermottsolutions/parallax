/**
 * sets up parallax scrolling movement 
 * for objects passed in as parameters
 * make sure jquery is loaded first
 *
 * @param {
 *      'className' : {string},
 *      'speed'     : {number}
 * }
 *
 *
 * example call to setup parallax on two divs:
 *
 * setupParallax(
 *	  {
 *		'className'	: 'bigImage',
 *		'speed'		: .7
 *	  },
 *	  {
 *		'className'	: 'bigText',
 *		'speed'		: .2
 *	  }
 * );
 *
 */
function setupParallax() {
	
	// get how many objects were passed in as parameters
	parallaxItems = arguments.length;
	console.log(parallaxItems);

	// if there are any parameters
	if (parallaxItems > 0) {

		// loop through each object and setup each parallax item
		for (var i=1;i<=parallaxItems;i++) {

			// zero based array
			var parallaxItem = arguments[i-1];

			// using closure to keep argument index scope context
			(function(){

				// get element to parallax and its speed
				var elem = $('.' + parallaxItem.className);
				var speed = parallaxItem.speed;

				// get starting background image css constants
				var elemBackgroundStart = elem.css('backgroundPosition').split(' ');
				var elemXStart = elemBackgroundStart[0];
				var elemYStart = elemBackgroundStart[1].split('px')[0];

				// set scroll event. everytime user scrolls, calculate
				// and set the new position for the parallax item
				$(document).scroll(function(){

					setParallaxPosition(elem,speed,elemXStart,elemYStart);

				});

			})(parallaxItem);

		}

	}

	// calculate and set the parallax element's next position
	function setParallaxPosition(elem,speed,elemXStart,elemYStart) {

		// get scroll position in pixels
		var scrollTop = $(window).scrollTop();

		// calculate the next y position (the parallax movement)
		var yNext = (scrollTop * speed) + parseInt(elemYStart);

		// put starting x together with next y (we're not moving x)
		var posNext = elemXStart + ' ' + yNext + 'px';

		// move the element
		elem.css('backgroundPosition',posNext)
	
	}

}

});