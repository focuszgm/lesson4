<<<<<<< HEAD
var fs = require( "fs" );
=======
>>>>>>> refs/remotes/origin/1.12-stable

module.exports = function( Release ) {

	var
<<<<<<< HEAD
		files = [
			"dist/jquery.js",
			"dist/jquery.min.js",
			"dist/jquery.min.map",
			"dist/jquery.slim.js",
			"dist/jquery.slim.min.js",
			"dist/jquery.slim.min.map",
			"src/core.js"
		],
=======
		files = [ "dist/jquery.js", "dist/jquery.min.js", "dist/jquery.min.map" ],
>>>>>>> refs/remotes/origin/1.12-stable
		cdn = require( "./release/cdn" ),
		dist = require( "./release/dist" ),
		ensureSizzle = require( "./release/ensure-sizzle" ),

		npmTags = Release.npmTags;

	Release.define( {
		npmPublish: true,
		issueTracker: "github",
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/1.12-stable
		/**
		 * Ensure the repo is in a proper state before release
		 * @param {Function} callback
		 */
		checkRepoState: function( callback ) {
			ensureSizzle( Release, callback );
		},
<<<<<<< HEAD

		/**
		 * Set the version in the src folder for distributing AMD
		 */
		_setSrcVersion: function() {
			var corePath = __dirname + "/../src/core.js",
				contents = fs.readFileSync( corePath, "utf8" );
			contents = contents.replace( /@VERSION/g, Release.newVersion );
			fs.writeFileSync( corePath, contents, "utf8" );
		},

=======
>>>>>>> refs/remotes/origin/1.12-stable
		/**
		 * Generates any release artifacts that should be included in the release.
		 * The callback must be invoked with an array of files that should be
		 * committed before creating the tag.
		 * @param {Function} callback
		 */
		generateArtifacts: function( callback ) {
			Release.exec( "grunt", "Grunt command failed" );
<<<<<<< HEAD
			Release.exec(
				"grunt custom:-ajax,-effects,-deprecated --filename=jquery.slim.js && " +
					"grunt remove_map_comment --filename=jquery.slim.js",
				"Grunt custom failed"
			);
			cdn.makeReleaseCopies( Release );
			Release._setSrcVersion();
			callback( files );
		},

=======
			cdn.makeReleaseCopies( Release );
			callback( files );
		},
>>>>>>> refs/remotes/origin/1.12-stable
		/**
		 * Acts as insertion point for restoring Release.dir.repo
		 * It was changed to reuse npm publish code in jquery-release
		 * for publishing the distribution repo instead
		 */
		npmTags: function() {

			// origRepo is not defined if dist was skipped
			Release.dir.repo = Release.dir.origRepo || Release.dir.repo;
			return npmTags();
		},
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/1.12-stable
		/**
		 * Publish to distribution repo and npm
		 * @param {Function} callback
		 */
		dist: function( callback ) {
			cdn.makeArchives( Release, function() {
<<<<<<< HEAD
				dist( Release, files, callback );
=======
				dist( Release, callback );
>>>>>>> refs/remotes/origin/1.12-stable
			} );
		}
	} );
};

module.exports.dependencies = [
	"archiver@0.14.2",
	"shelljs@0.7.0",
<<<<<<< HEAD
	"npm@2.3.0",
	"chalk@1.1.1"
=======
	"npm@2.3.0"
>>>>>>> refs/remotes/origin/1.12-stable
];