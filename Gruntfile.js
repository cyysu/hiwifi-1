/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // 拷贝文件到发布目录，这样字体可被反复处理
    // copy: {
    //   main: {
    //     src: '',
    //     dest: ''
    //   },
    // },

    watch: {
      // "font-spider": {
      //   files: ['demo/*.html'],
      //   tasks: ['font-spider']
      // },
      jsmin: {
        files: ['static/javascript/*.js'],
        tasks: ['uglify']
      },
      cssmin: {
        files: ['static/style/*.css'],
        tasks: ['cssmin']
      },
      imagemin:{
        files: ['static/images/*.png','static/images/*.jpg','static/images/*.gif'],
        tasks: ['imagemin']
      }
    },
     // 字蛛插件：压缩与转码静态页面中的 WebFont
    // 'font-spider': {
    //   options: {},
    //   main: {
    //     src:'demo/*.html'
    //   }
    // }, 
    concat: {
      dist: {
        files: {}
      }
    },
    uglify: {
      options: {
        mangle: {
          // 不压缩require关键字
          except: ['require']
        }
      },
      dynamic_mappings: {
        files: [
          // js
          {
            expand: true,
            cwd: 'static/javascript/',
            src: ['*.js'],
            dest: 'static/js/',
            ext: '-min.js'
          }
        ]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'static/style/',
        src: ['*.css'],
        dest: 'static/css/',
        ext: '-min.css'
      }
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: {
        }
      },
    }
  });
  
  // grunt.loadNpmTasks('grunt-font-spider');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('Hiwifi', ['uglify', 'cssmin', 'imagemin']);

  // Default task.
  grunt.registerTask('default', ['Hiwifi']);

  // grunt.registerTask('default', ['copy', 'font-spider']);
};