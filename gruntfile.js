module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
	      	sass: { 
	      		files: ['assets/scss/*/*.scss','assets/scss/*.scss','*.php','/*/*.php'],
	      		tasks: ['sass','cssmin']
	      	},
	    },
		sass: {
			dist: {
				files: [{
					'stylesheets/styles.css':'assets/scss/styles.scss'
				}]
			}
		},
		cssmin: {  
			minify: {
				expand: true,
				cwd: 'stylesheets/',
				src: ['*.css','!*.min.css'],
				dest: 'stylesheets/',
				ext: '.min.css'
			}
		}

	});
	
	grunt.registerTask('default', ['sass'] );
};