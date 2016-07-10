module.exports = function( grunt ) {
	"use strict";

	function readOptionalJSON( filepath ) {
<<<<<<< HEAD
		var stripJSONComments = require( "strip-json-comments" ),
			data = {};
=======
		var data = {};
>>>>>>> refs/remotes/origin/1.12-stable
		try {
			data = JSON.parse( stripJSONComments(
				fs.readFileSync( filepath, { encoding: "utf8" } )
			) );
		} catch ( e ) {}
		return data;
	}

	var fs = require( "fs" ),
<<<<<<< HEAD
		gzip = require( "gzip-js" ),

		// Skip jsdom-related tests in Node.js 0.10 & 0.12
		runJsdomTests = !/^v0/.test( process.version );

	if ( !grunt.option( "filename" ) ) {
		grunt.option( "filename", "jquery.js" );
	}
=======
		stripJSONComments = require( "strip-json-comments" ),
		gzip = require( "gzip-js" ),
		srcHintOptions = readOptionalJSON( "src/.jshintrc" ),
		newNode = !/^v0/.test( process.version ),

		// Allow to skip jsdom-related tests in Node.js < 1.0.0
		runJsdomTests = newNode || ( function() {
			try {
				require( "jsdom" );
				return true;
			} catch ( e ) {
				return false;
			}
		} )();

	// The concatenated file won't pass onevar
	// But our modules can
	delete srcHintOptions.onevar;
>>>>>>> refs/remotes/origin/1.12-stable

	grunt.initConfig( {
		pkg: grunt.file.readJSON( "package.json" ),
		dst: readOptionalJSON( "dist/.destination.json" ),
		"compare_size": {
			files: [ "dist/jquery.js", "dist/jquery.min.js" ],
			options: {
				compress: {
					gz: function( contents ) {
						return gzip.zip( contents, {} ).length;
					}
				},
				cache: "build/.sizecache.json"
			}
		},
		babel: {
			options: {
				sourceMap: "inline",
				retainLines: true
			},
			nodeSmokeTests: {
				files: {
					"test/node_smoke_tests/lib/ensure_iterability.js":
						"test/node_smoke_tests/lib/ensure_iterability_es6.js"
				}
			}
		},
		build: {
			all: {
				dest: "dist/jquery.js",
				minimum: [
					"core",
					"selector"
				],
<<<<<<< HEAD

				// Exclude specified modules if the module matching the key is removed
				removeWith: {
					ajax: [ "manipulation/_evalUrl", "event/ajax" ],
					callbacks: [ "deferred" ],
					css: [ "effects", "dimensions", "offset" ],
					"css/showHide": [ "effects" ],
					deferred: {
						remove: [ "ajax", "effects", "queue", "core/ready" ],
						include: [ "core/ready-no-deferred" ]
					},
					sizzle: [ "css/hiddenVisibleSelectors", "effects/animatedSelector" ]
=======
				removeWith: {
					ajax: [ "manipulation/_evalUrl", "event/ajax" ],
					callbacks: [ "deferred" ],
					css: [ "effects", "dimensions", "offset" ]
>>>>>>> refs/remotes/origin/1.12-stable
				}
			}
		},
		npmcopy: {
			all: {
				options: {
					destPrefix: "external"
				},
				files: {
					"sizzle/dist": "sizzle/dist",
					"sizzle/LICENSE.txt": "sizzle/LICENSE.txt",

<<<<<<< HEAD
					"npo/npo.js": "native-promise-only/npo.js",

					"qunit/qunit.js": "qunitjs/qunit/qunit.js",
					"qunit/qunit.css": "qunitjs/qunit/qunit.css",
					"qunit/LICENSE.txt": "qunitjs/LICENSE.txt",

					"qunit-assert-step/qunit-assert-step.js":
					"qunit-assert-step/qunit-assert-step.js",
					"qunit-assert-step/MIT-LICENSE.txt":
					"qunit-assert-step/MIT-LICENSE.txt",

					"requirejs/require.js": "requirejs/require.js",

					"sinon/sinon.js": "sinon/pkg/sinon.js",
					"sinon/LICENSE.txt": "sinon/LICENSE"
				}
			}
		},
		jsonlint: {
			pkg: {
				src: [ "package.json" ]
			}
		},
		eslint: {
			options: {

				// See https://github.com/sindresorhus/grunt-eslint/issues/119
				quiet: true
			},
			all: ".",
			dist: "dist/jquery.js",
			dev: [ "src/**/*.js", "Gruntfile.js", "test/**/*.js", "build/**/*.js" ]
=======
					"qunit/qunit.js": "qunitjs/qunit/qunit.js",
					"qunit/qunit.css": "qunitjs/qunit/qunit.css",
					"qunit/LICENSE.txt": "qunitjs/LICENSE.txt",

					"qunit-assert-step/qunit-assert-step.js":
					"qunit-assert-step/qunit-assert-step.js",
					"qunit-assert-step/MIT-LICENSE.txt":
					"qunit-assert-step/MIT-LICENSE.txt",

					"requirejs/require.js": "requirejs/require.js",

					"sinon/fake_timers.js": "sinon/lib/sinon/util/fake_timers.js",
					"sinon/timers_ie.js": "sinon/lib/sinon/util/timers_ie.js",
					"sinon/LICENSE.txt": "sinon/LICENSE"
				}
			}
		},
		jsonlint: {
			pkg: {
				src: [ "package.json" ]
			}
		},
		jshint: {
			all: {
				src: [
					"src/**/*.js", "Gruntfile.js", "test/**/*.js", "build/**/*.js"
				],
				options: {
					jshintrc: true
				}
			},
			dist: {
				src: "dist/jquery.js",
				options: srcHintOptions
			}
		},
		jscs: {
			src: "src",
			gruntfile: "Gruntfile.js",

			// Check parts of tests that pass
			test: [
				"test/data/testrunner.js",
				"test/unit/basic.js",
				"test/unit/wrap.js"
			],
			build: "build"
>>>>>>> refs/remotes/origin/1.12-stable
		},
		testswarm: {
			tests: [

				// A special module with basic tests, meant for
				// not fully supported environments like Android 2.3,
				// jsdom or PhantomJS. We run it everywhere, though,
				// to make sure tests are not broken.
				"basic",

				"ajax",
<<<<<<< HEAD
				"animation",
=======
>>>>>>> refs/remotes/origin/1.12-stable
				"attributes",
				"callbacks",
				"core",
				"css",
				"data",
				"deferred",
				"deprecated",
				"dimensions",
				"effects",
				"event",
				"manipulation",
				"offset",
				"queue",
				"selector",
				"serialize",
				"support",
<<<<<<< HEAD
				"traversing",
				"tween"
			]
		},
		watch: {
			files: [ "<%= eslint.dev %>" ],
=======
				"traversing"
			]
		},
		watch: {
			files: [ "<%= jshint.all.src %>" ],
>>>>>>> refs/remotes/origin/1.12-stable
			tasks: [ "dev" ]
		},
		uglify: {
			all: {
				files: {
					"dist/<%= grunt.option('filename').replace('.js', '.min.js') %>":
						"dist/<%= grunt.option('filename') %>"
				},
				options: {
					preserveComments: false,
					sourceMap: true,
<<<<<<< HEAD
					ASCIIOnly: true,
					sourceMapName:
						"dist/<%= grunt.option('filename').replace('.js', '.min.map') %>",
=======
					sourceMapName: "dist/jquery.min.map",
>>>>>>> refs/remotes/origin/1.12-stable
					report: "min",
					beautify: {
						"ascii_only": true
					},
					banner: "/*! jQuery v<%= pkg.version %> | " +
						"(c) jQuery Foundation | jquery.org/license */",
					compress: {
						"hoist_funs": false,
						loops: false,
						unused: false
					}
				}
			}
		}
	} );

	// Load grunt tasks from NPM packages
	require( "load-grunt-tasks" )( grunt );

	// Integrate jQuery specific tasks
	grunt.loadTasks( "build/tasks" );

<<<<<<< HEAD
	grunt.registerTask( "lint", [ "jsonlint", "eslint:all" ] );
=======
	grunt.registerTask( "lint", [ "jsonlint", "jshint", "jscs" ] );
>>>>>>> refs/remotes/origin/1.12-stable

	// Don't run Node-related tests in Node.js < 1.0.0 as they require an old
	// jsdom version that needs compiling, making it harder for people to compile
	// jQuery on Windows. (see gh-2519)
	grunt.registerTask( "test_fast", runJsdomTests ? [ "node_smoke_tests" ] : [] );

<<<<<<< HEAD
	grunt.registerTask( "test", [ "test_fast" ].concat(
		runJsdomTests ? [ "promises_aplus_tests" ] : []
	) );

	// Short list as a high frequency watch task
	grunt.registerTask( "dev", [
			"build:*:*",
			"newer:eslint:dev",
			"uglify",
			"remove_map_comment",
			"dist:*"
		]
	);

	grunt.registerTask( "default", [ "dev", "eslint:dist", "test_fast", "compare_size" ] );

	grunt.registerTask( "precommit_lint", [ "newer:jsonlint", "newer:eslint:all" ] );
=======
	grunt.registerTask( "test", [ "test_fast" ] );

	// Short list as a high frequency watch task
	grunt.registerTask( "dev", [ "build:*:*", "lint", "uglify", "remove_map_comment", "dist:*" ] );

	grunt.registerTask( "default", [ "dev", "test_fast", "compare_size" ] );
>>>>>>> refs/remotes/origin/1.12-stable
};
