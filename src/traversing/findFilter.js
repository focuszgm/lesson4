define( [
	"../core",
	"../var/indexOf",
	"./var/rneedsContext",
	"../selector"
], function( jQuery, indexOf, rneedsContext ) {

<<<<<<< HEAD
"use strict";

=======
>>>>>>> refs/remotes/origin/1.12-stable
var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
<<<<<<< HEAD
=======
			/* jshint -W018 */
>>>>>>> refs/remotes/origin/1.12-stable
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
<<<<<<< HEAD
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
=======
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
>>>>>>> refs/remotes/origin/1.12-stable
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
<<<<<<< HEAD
		var i, ret,
			len = this.length,
			self = this;
=======
		var i,
			ret = [],
			self = this,
			len = self.length;
>>>>>>> refs/remotes/origin/1.12-stable

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

<<<<<<< HEAD
		ret = this.pushStack( [] );

=======
>>>>>>> refs/remotes/origin/1.12-stable
		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

<<<<<<< HEAD
		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
=======
		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
>>>>>>> refs/remotes/origin/1.12-stable
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );

} );
