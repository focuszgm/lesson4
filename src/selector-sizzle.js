define( [
	"./core",
	"../external/sizzle/dist/sizzle"
], function( jQuery, Sizzle ) {

<<<<<<< HEAD
"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
=======
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
>>>>>>> refs/remotes/origin/1.12-stable
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
<<<<<<< HEAD
jQuery.escapeSelector = Sizzle.escape;
=======
>>>>>>> refs/remotes/origin/1.12-stable

} );
