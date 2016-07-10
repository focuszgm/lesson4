define( [
	"../core",
	"../event"
], function( jQuery ) {

<<<<<<< HEAD
"use strict";

=======
>>>>>>> refs/remotes/origin/1.12-stable
// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );

} );
