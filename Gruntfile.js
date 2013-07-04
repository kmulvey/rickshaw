module.exports = function(grunt) {
  "use strict";

	// Includes
  grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-concat'); 
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-jshint');	
	grunt.loadNpmTasks("grunt-contrib-watch");
	
	// Project configuration.
  grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
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
    // ========== CSS ==========
    recess: {
      build: {
        files: {
					'dist/css/<%= pkg.name %>.css': ['src/css/*.css'],
        },
        options: {
					compile: true,
					compress: true
        }
      },
      lint: {
				src: ['src/css/*.css']
			}
    },
		// ========== END CSS ==========


		// ========== JS ==========
    concat: {
			options: {
				separator: ';'
			},
      dist: {
				src: [
					'src/js/Rickshaw.js', 
					'src/js/Rickshaw.Class.js', 
					'src/js/Rickshaw.Compat.ClassList.js',
					'src/js/Rickshaw.Graph.js',
					'src/js/Rickshaw.Fixtures.Color.js',
					'src/js/Rickshaw.Fixtures.RandomData.js',
					'src/js/Rickshaw.Fixtures.Time.js',
					'src/js/Rickshaw.Fixtures.Number.js',
					'src/js/Rickshaw.Color.Palette.js',
					'src/js/Rickshaw.Graph.Ajax.js',
					'src/js/Rickshaw.Graph.Annotate.js',
					'src/js/Rickshaw.Graph.Axis.Time.js',
					'src/js/Rickshaw.Graph.Axis.X.js',
					'src/js/Rickshaw.Graph.Axis.Y.js',
					'src/js/Rickshaw.Graph.Behavior.Series.Highlight.js',
					'src/js/Rickshaw.Graph.Behavior.Series.Order.js',
					'src/js/Rickshaw.Graph.Behavior.Series.Toggle.js',
					'src/js/Rickshaw.Graph.HoverDetail.js',
					'src/js/Rickshaw.Graph.JSONP.js',
					'src/js/Rickshaw.Graph.Legend.js',
					'src/js/Rickshaw.Graph.RangeSlider.js',
					'src/js/Rickshaw.Graph.Renderer.js',
					'src/js/Rickshaw.Graph.Renderer.Line.js',
					'src/js/Rickshaw.Graph.Renderer.Stack.js',
					'src/js/Rickshaw.Graph.Renderer.Bar.js',
					'src/js/Rickshaw.Graph.Renderer.Area.js',
					'src/js/Rickshaw.Graph.Renderer.ScatterPlot.js',
					'src/js/Rickshaw.Graph.Smoother.js',
					'src/js/Rickshaw.Graph.Unstacker.js',
					'src/js/Rickshaw.Series.js',
					'src/js/Rickshaw.Series.FixedDuration.js',
					'src/js/Rickshaw.Technicals.js'],
						dest: 'dist/js/<%= pkg.name %>.js'
        }
    },
		uglify: {
      dist: {
        files: {
					'dist/js/<%= pkg.name %>.min.js' : ['<%= concat.dist.dest %>']
				}
				//dest: 'dist/js/<%= pkg.name %>-<%= pkg.version %>.min.js'
      },
			options: {
				compress: true
			}
    },
		nodeunit: {
			files: ['tests/*.js']
		},
    // ========== END JS ==========


    jshint: {
			//files: ['grunt.js', 'src/js/*.js', 'tests/**/*.js']
			all: ['Gruntfile.js', 'src/js/Rickshaw.Technicals.js', 'examples/js/technicals.js', 'tests/Rickshaw.Technicals.js'],
			options: {
				jshintrc: ".jshintrc"
			}
    },
		watch: {
			js: {
				files: ['src/js/*.js'],
				tasks: ['jshint'],
			},
			css: {
				files: ['src/css/*.css'],
				tasks: ['recess:lint'],
			}
		}
	});
	
	// Default task: make
	grunt.registerTask('default', 'make');
	// Make it
	grunt.registerTask('make', ['clean', 'recess:build', 'concat', 'uglify']);
	// test only
	grunt.registerTask('testonly', ['recess:lint', 'nodeunit']);
	// JS
	grunt.registerTask('js', ['jshint', 'nodeunit', 'concat', 'uglify']);
	// CSS
	grunt.registerTask('css', 'recess:lint');
};
