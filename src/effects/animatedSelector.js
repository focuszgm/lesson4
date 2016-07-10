define( [
	"../core",
	"../selector",
	"../effects"
], function( jQuery ) {

<<<<<<< HEAD
"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
=======
jQuery.expr.filters.animated = function( elem ) {
>>>>>>> refs/remotes/origin/1.12-stable
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

} );
