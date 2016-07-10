define( [
	"../core"
], function( jQuery ) {

<<<<<<< HEAD
"use strict";

=======
>>>>>>> refs/remotes/origin/1.12-stable
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
<<<<<<< HEAD
		len = elems.length,
=======
		length = elems.length,
>>>>>>> refs/remotes/origin/1.12-stable
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
<<<<<<< HEAD
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
=======
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
>>>>>>> refs/remotes/origin/1.12-stable
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
<<<<<<< HEAD
			len ? fn( elems[ 0 ], key ) : emptyGet;
=======
			length ? fn( elems[ 0 ], key ) : emptyGet;
>>>>>>> refs/remotes/origin/1.12-stable
};

return access;

} );
