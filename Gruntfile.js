module.exports = function(grunt) {
	'use strict';
 
	// configuração do projeto
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		min: {
			dist: {
				src: ['src/assets/js/main.js'],
				dest: 'src/assets/js/all.min.js'
			}
		},
		cssmin: {
			dist: {
				src: ['src/assets/css/main.css'],
				dest: 'src/assets/css/all.min.css'
			}
		},
		jshint: {
			all: ['src/assets/**/*.js']
		}
	};
 
	grunt.initConfig(gruntConfig);
 
	// carregando plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
 
	// tarefas
	grunt.registerTask('default', ['jshint']);
};