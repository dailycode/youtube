module.exports = function(grunt) {
	grunt.initConfig({
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

		watch: {
			files: [
				'source/sass/**/*.scss',
				'source/*.html'
			],
			tasks: [ 'sass', 'htmlmin']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['sass', 'htmlmin', 'browserSync', 'watch']);
}
