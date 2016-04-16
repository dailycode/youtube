module.exports = function(grunt) {
	grunt.initConfig({
		clean: {
			temp: [
					'assets/js/all.js', 'assets/js/libs.js', 'assets/js/main.js', 'assets/css/main.css', 'assets/css/main.css.map' ],
			all: ['assets/']
		},

		sass: {
			dev: {
				files: {
					'assets/css/main.css': 'source/sass/main.scss'
				}
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'assets/css/main.css',
						'assets/*.html'
					]
				},
				options: {
					watchTask: true,
					server: './assets'
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
        	collapseWhitespace: true
				},
				files: {
					'assets/index.html': 'source/index.html'
				}
			}
		},

		jshint: {
			dist: {
				src: 'source/js/**/*.js'
			}
		},

		concat: {
			scripts: {
				src: 'source/js/*.js',
				dest: 'assets/js/main.js'
			},
			libs: {
				src: 'source/js/libs/*.js',
				dest: 'assets/js/libs.js'
			},
			all: {
				src: [ 'assets/js/main.js', 'assets/js/libs.js' ],
				dest: 'assets/js/all.js'
			}
		},

		uglify: {
			dest: {
				src: 'assets/js/main.js',
				dest: 'assets/js/main.min.js'
			}
		},

		cssmin: {
			dist: {
				src: 'assets/css/main.css',
				dest: 'assets/css/main.min.css'
			}
		},

		watch: {
			files: [
				'source/sass/**/*.scss',
				'source/*.html',
				'source/js/**/*.js'
			],
			tasks: [ 'sass', 'htmlmin', 'jshint', 'cssmin', 'clean:temp' ]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', [ 'sass', 'browserSync', 'htmlmin', 'jshint', 'concat:scripts', 'uglify', 'concat:libs', 'concat:all', 'cssmin',  'clean:temp', 'watch']);
}
