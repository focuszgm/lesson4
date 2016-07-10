<<<<<<< HEAD
module.exports = function( Release, files, complete ) {
=======
module.exports = function( Release, complete ) {
>>>>>>> refs/remotes/origin/1.12-stable

	var
		fs = require( "fs" ),
		shell = require( "shelljs" ),
		pkg = require( Release.dir.repo + "/package.json" ),
		distRemote = Release.remote

			// For local and github dists
			.replace( /jquery(\.git|$)/, "jquery-dist$1" ),

		// These files are included with the distribution
<<<<<<< HEAD
		extras = [
=======
		files = [
>>>>>>> refs/remotes/origin/1.12-stable
			"src",
			"LICENSE.txt",
			"AUTHORS.txt",
			"package.json"
		];

	/**
	 * Clone the distribution repo
	 */
	function clone() {
		Release.chdir( Release.dir.base );
		Release.dir.dist = Release.dir.base + "/dist";

		console.log( "Using distribution repo: ", distRemote );
		Release.exec( "git clone " + distRemote + " " + Release.dir.dist,
			"Error cloning repo." );

		// Distribution always works on master
		Release.chdir( Release.dir.dist );
		Release.exec( "git checkout master", "Error checking out branch." );
		console.log();
	}

	/**
	 * Generate bower file for jquery-dist
	 */
	function generateBower() {
		return JSON.stringify( {
			name: pkg.name,
			main: pkg.main,
			license: "MIT",
			ignore: [
				"package.json"
			],
			keywords: pkg.keywords
		}, null, 2 );
	}

	/**
	 * Copy necessary files over to the dist repo
	 */
	function copy() {

		// Copy dist files
		var distFolder = Release.dir.dist + "/dist",
			externalFolder = Release.dir.dist + "/external",
<<<<<<< HEAD
			rmIgnore = files
				.concat( [
					"README.md",
					"node_modules"
				] )
				.map( function( file ) {
					return Release.dir.dist + "/" + file;
				} );
=======
			rmIgnore = [
				"README.md",
				"node_modules"
			].map( function( file ) {
				return Release.dir.dist + "/" + file;
			} );
>>>>>>> refs/remotes/origin/1.12-stable

		shell.config.globOptions = {
			ignore: rmIgnore
		};

		// Remove extraneous files before copy
		shell.rm( "-rf", Release.dir.dist + "/**/*" );

		shell.mkdir( "-p", distFolder );
<<<<<<< HEAD
		files.forEach( function( file ) {
=======
		[
			"dist/jquery.js",
			"dist/jquery.min.js",
			"dist/jquery.min.map"
		].forEach( function( file ) {
>>>>>>> refs/remotes/origin/1.12-stable
			shell.cp( "-f", Release.dir.repo + "/" + file, distFolder );
		} );

		// Copy Sizzle
		shell.mkdir( "-p", externalFolder );
		shell.cp( "-rf", Release.dir.repo + "/external/sizzle", externalFolder );

		// Copy other files
<<<<<<< HEAD
		extras.forEach( function( file ) {
			shell.cp( "-rf", Release.dir.repo + "/" + file, Release.dir.dist );
		} );

		// Remove the wrapper from the dist repo
		shell.rm( "-f", Release.dir.dist + "/src/wrapper.js" );

=======
		files.forEach( function( file ) {
			shell.cp( "-rf", Release.dir.repo + "/" + file, Release.dir.dist );
		} );

>>>>>>> refs/remotes/origin/1.12-stable
		// Write generated bower file
		fs.writeFileSync( Release.dir.dist + "/bower.json", generateBower() );

		console.log( "Adding files to dist..." );
		Release.exec( "git add .", "Error adding files." );
		Release.exec(
			"git commit -m 'Release " + Release.newVersion + "'",
<<<<<<< HEAD
			"Error committing files."
=======
			"Error commiting files."
>>>>>>> refs/remotes/origin/1.12-stable
		);
		console.log();

		console.log( "Tagging release on dist..." );
		Release.exec( "git tag " + Release.newVersion,
			"Error tagging " + Release.newVersion + " on dist repo." );
		Release.tagTime = Release.exec( "git log -1 --format='%ad'",
			"Error getting tag timestamp." ).trim();
	}

	/**
	 * Push files to dist repo
	 */
	function push() {
		Release.chdir( Release.dir.dist );

		console.log( "Pushing release to dist repo..." );
		Release.exec( "git push " + distRemote + " master --tags",
			"Error pushing master and tags to git repo." );

		// Set repo for npm publish
		Release.dir.origRepo = Release.dir.repo;
		Release.dir.repo = Release.dir.dist;
	}

	Release.walk( [
		Release._section( "Copy files to distribution repo" ),
		clone,
		copy,
		Release.confirmReview,

		Release._section( "Pushing files to distribution repo" ),
		push
	], complete );
};
