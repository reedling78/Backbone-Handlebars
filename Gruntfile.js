module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n',
          keepSpecialComments: false,
          name: 'main',
          mainConfigFile: "scripts/main.js",
          out: "scripts/optimized.js",
          findNestedDependencies: true,
          preserveLicenseComments: false
        }
      }
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'scripts/**/*.js',
        '!scripts/optimized.js',
        '!scripts/libs/**/*.js',
        '!scripts/modules/templates.js'
      ]
    },

    sass: {
      dist: {
        files: {
          'css/compiled/bootstrap.css': 'css/bootstrap.scss',
          'css/compiled/main.css': 'css/main.scss'
        }
      }
    },

    watch: {
      dev: {
        files: ['scripts/**/*.*', 'css/**/*.*', 'templates/**/*.*'],
        tasks: ['jshint:all', 'sass', 'handlebars:compile'],
        options: {
          livereload: 8000,
          spawn: false,
        },
      },
    },

    handlebars: {
      compile: {
        options: {
          namespace: 'Templates'
        }, 
        files: {
          'scripts/modules/templates.js': ['templates/*.hbs']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['jshint:all', 'handlebars:compile']);
  grunt.registerTask('watcher', ['watch']);

};