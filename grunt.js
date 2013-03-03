/*global module:false*/
module.exports = function(grunt) {
    // includes
    grunt.loadNpmTasks('grunt-cleanx');
    grunt.loadNpmTasks('grunt-recess');
    
    // Project configuration.
    grunt.initConfig({

        pkg: '<json:package.json>',
        meta: {
				banner: 
            '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* <%= pkg.url %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.copyright %> ' +
            ' Licensed MIT */'
        },

				clean: {
            js : {
                dirs: [
                    "dist/js/"
                ]
            },
            css : {
                dirs: [
                    "dist/css/"
                ]
            }
        },


        // ========== TESTS ==========
        qunit: {
            files: ['tests/**/*.html']
        },
				// nodeunit
				test: {
					files: ['tests/*.js']
				},
        // ========== END TESTS ==========


        // ========== CSS ==========
        recess: {
            build: {
                src: [
                    'src/css/*.css'
                ],
                dest: 'dist/css/<%= pkg.name %>.css',
                options: {
                    compile: true,
                    compress: true
                }
            },
            lint: {
							src: [
								'src/css/*.css'
              ]
						}
        },
        // ========== END CSS ==========


        // ========== JS ==========
        lint: {
            //files: ['grunt.js', 'src/js/*.js', 'tests/**/*.js']
            all: ['src/js/Rickshaw.Technicals.js', 'examples/js/technicals.js', 'tests/Rickshaw.Technicals.js']
        },
        concat: {
            dist: {
//                src: ['<banner:meta.banner>', 'src/js/*.js'],
								src: ['src/js/Rickshaw.js', 'src/js/Rickshaw.Class.js', 'src/js/Rickshaw.Compat.ClassList.js', 'src/js/Rickshaw.Graph.js', 'src/js/Rickshaw.Fixtures.Color.js', 'src/js/Rickshaw.Fixtures.RandomData.js', 'src/js/Rickshaw.Fixtures.Time.js', 'src/js/Rickshaw.Fixtures.Number.js', 'src/js/Rickshaw.Color.Palette.js', 'src/js/Rickshaw.Graph.Ajax.js', 'src/js/Rickshaw.Graph.Annotate.js', 'src/js/Rickshaw.Graph.Axis.Time.js', 'src/js/Rickshaw.Graph.Axis.Y.js', 'src/js/Rickshaw.Graph.Behavior.Series.Highlight.js', 'src/js/Rickshaw.Graph.Behavior.Series.Order.js', 'src/js/Rickshaw.Graph.Behavior.Series.Toggle.js', 'src/js/Rickshaw.Graph.HoverDetail.js', 'src/js/Rickshaw.Graph.JSONP.js', 'src/js/Rickshaw.Graph.Legend.js', 'src/js/Rickshaw.Graph.RangeSlider.js', 'src/js/Rickshaw.Graph.Renderer.js', 'src/js/Rickshaw.Graph.Renderer.Line.js', 'src/js/Rickshaw.Graph.Renderer.Stack.js', 'src/js/Rickshaw.Graph.Renderer.Bar.js', 'src/js/Rickshaw.Graph.Renderer.Area.js', 'src/js/Rickshaw.Graph.Renderer.ScatterPlot.js', 'src/js/Rickshaw.Graph.Smoother.js', 'src/js/Rickshaw.Graph.Unstacker.js', 'src/js/Rickshaw.Series.js', 'src/js/Rickshaw.Series.FixedDuration.js', 'src/js/Rickshaw.Technicals.js'],
								//dest: 'dist/js/<%= pkg.name %>-<%= pkg.version %>.js'
								dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                //dest: 'dist/js/<%= pkg.name %>-<%= pkg.version %>.min.js'
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        // ========== END JS ==========


        watch: {
            files: '<config:lint.files>',
            tasks: 'lint qunit'
        },


        jshint: {
					options: {
                // Development.
                "debug"         : false,  // Allow debugger statements e.g. browser breakpoints.
                "devel"         : true,   // Allow developments statements e.g. `console.log();`.

                // Settings
                "passfail"      : false,  // Stop on first error.
                "maxerr"        : 100,    // Maximum error before stopping.

                // Predefined globals whom JSHint will ignore.
                "browser"       : true,   // Standard browser globals e.g. `window`, `document`.
                "node"          : true,
                "rhino"         : false,
                "couch"         : false,
                "wsh"           : false,   // Windows Scripting Host.
                "jquery"        : true,
                "prototypejs"   : false,
                "mootools"      : false,
                "dojo"          : false,

                // The Good Parts.
                "asi"           : false,  // Tolerate Automatic Semicolon Insertion (no semicolons).
                "laxbreak"      : true,   // Tolerate unsafe line breaks e.g. `return [\n] x` without semicolons.
                "bitwise"       : true,   // Prohibit bitwise operators (&, |, ^, etc.).
                "boss"          : false,  // Tolerate assignments inside if, for & while. Usually conditions & loops are for comparison, not assignments.
                "curly"         : false,   // Require {} for every new block or scope.
                "eqeqeq"        : true,   // Require triple equals i.e. `===`.
                "eqnull"        : false,  // Tolerate use of `== null`.
                "evil"          : false,  // Tolerate use of `eval`.
                "expr"          : false,  // Tolerate `ExpressionStatement` as Programs.
                "forin"         : false,  // Tolerate `for in` loops without `hasOwnPrototype`.
                "immed"         : true,   // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`
                "latedef"       : true,   // Prohibit variable use before definition.
                "loopfunc"      : false,  // Allow functions to be defined within loops.
                "noarg"         : true,   // Prohibit use of `arguments.caller` and `arguments.callee`.
                "regexp"        : true,   // Prohibit `.` and `[^...]` in regular expressions.
                "regexdash"     : false,  // Tolerate unescaped last dash i.e. `[-...]`.
                "scripturl"     : true,   // Tolerate script-targeted URLs.
                "shadow"        : false,  // Allows re-define variables later in code e.g. `var x=1; x=2;`.
                "supernew"      : false,  // Tolerate `new function () { ... };` and `new Object;`.
                "undef"         : true,   // Require all non-global variables be declared before they are used.
                "es5"           : true,   // If ES5 syntax should be allowed.
                "strict"        : false,  // Require the "use strict"; pragma.
                "onecase"       : true,

                // Personal styling preferences.
                "newcap"        : true,   // Require capitalization of all constructor functions e.g. `new F()`.
                "noempty"       : true,   // Prohibit use of empty blocks.
                "nonew"         : true,   // Prohibit use of constructors for side-effects.
                "nomen"         : true,   // Prohibit use of initial or trailing underbars in names.
                "onevar"        : false,  // Allow only one `var` statement per function.
                "plusplus"      : false,  // Prohibit use of `++` & `--`.
                "sub"           : true,  // Tolerate all forms of subscript notation besides dot notation e.g. `dict['key']` instead of `dict.key`.
                "trailing"      : false,   // Prohibit trailing whitespaces.
                "white"         : false,   // Check against strict whitespace and indentation rules.

                // globals
                "predef"     : [
                    "Rickshaw"
                ]
            }
        },


        uglify: {}
    });

    // Default task: make
		grunt.registerTask('default', 'make');
		// Make it
		grunt.registerTask('make', 'clean recess:build concat min');
		// test only
		grunt.registerTask('testonly', 'recess:lint qunit test');
		// JS
		grunt.registerTask('js', 'lint qunit test concat min');
		// CSS
		grunt.registerTask('css', 'recess:lint');
};
