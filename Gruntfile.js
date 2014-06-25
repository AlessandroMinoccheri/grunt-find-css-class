/*
 * grunt-contrib-less
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    findClass: {
      options: {
        css_class: 'clear',
        name: 'test.css'
      }    
    },
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['clean', 'find-css-class', 'nodeunit']);
};
