define( [
	"../ajax"
], function( jQuery ) {

<<<<<<< HEAD
"use strict";

=======
>>>>>>> refs/remotes/origin/1.12-stable
jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};

return jQuery._evalUrl;

} );
