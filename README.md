parallax
========

simple jquery parallax plugin

sets up parallax scrolling movement 
for objects passed in as parameters
make sure jquery is loaded first

@param {
     'className' : {string},
     'speed'     : {number}
}
 
 
example call to setup parallax on two divs:
 
setupParallax(
	{
		'className'	: 'bigImage',
		'speed'		: .7
	},
	{
		'className'	: 'bigText',
		'speed'		: .2
	}
);