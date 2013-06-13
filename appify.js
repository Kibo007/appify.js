/*!
 *  author:  Bojan Dragojevich
 *  url:     http://dragojevich.com/
 *  source:  https://github.com/Kibo007/appify.js
 *  version: 0.1 (2013-06-13)
 */

;(function ( $ ) {
	$.fn.appify = function() {

		var linksWrap = $(this);

		// check if website is in full screen mode
		if(("standalone" in window.navigator) && window.navigator.standalone) {

			// listen for click inside links wrap
			linksWrap.on('click', 'a', function() {
				var $this = $(this);

				// check target attribute of clicked link if
				// is _blank open link in safari if not stay in
				// standalone full screen mode.
				if($this.attr('target') !== '_blank') {
					// add link href attribute to address bar
					window.location = $this.attr('href');
					return false;
				}
			});
		}
	}
}( jQuery ));

