<<<<<<< HEAD
/* ExcludeStart */

// This file is included in a different way from all the others
// so the "use strict" pragma is not needed.
/* eslint strict: "off" */

/* ExcludeEnd */

=======
>>>>>>> refs/remotes/origin/1.12-stable
var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

<<<<<<< HEAD
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
=======
// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
>>>>>>> refs/remotes/origin/1.12-stable
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}