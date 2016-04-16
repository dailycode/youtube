module.exports = function(grunt) {
	grunt.initConfig({
		clean: {
			src: [ 'assets/js/main.js', 'assets/css/main.css.map' ]
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
						'assets/*.html',
						'assets/js/main.min.js'
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
				src: 'source/js/**/*.js',
				dest: 'assets/js/main.js'
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
				dest: 'assets/css/main.css'
			}
		},

		watch: {
			files: [
				'source/sass/**/*.scss',
				'source/*.html',
				'source/js/**/*.js'
			],
			tasks: [ 'sass', 'htmlmin', 'jshint', 'concat', 'uglify', 'cssmin', 'clean' ]
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

	grunt.registerTask('default', [ 'sass', 'browserSync', 'htmlmin', 'jshint', 'concat', 'uglify', 'cssmin', 'clean', 'watch']);
}
