module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
				files: 'source/sass/main.sass',
				tasks: ['sass']
		},

		sass: {
			dev: {
				options: { 
					style: 'expanded' 
				}
			},

			files: {
				'app/css/style.css': 'source/sass/main.sass'
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'app/css/*.css',
            'app/*.html'
					]
				},
				options: {
					watchTask: true,
					server: 'app'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
}
