'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'scripts',
            'styles',
            'dist/*',
            'dist/.git*'
          ]
        }]
      }
    },

    'bowerInstall': {
      target: {
        src: ['themes/triple.jade']

      }
    },

    copy: {
      main: {
        files: [
        {
          expand: true,
          dot: true,
          cwd: '.',
          dest: 'dist',
          src: [
            'images/*',
            'themes/*.css',
            'fonts/*'
          ]
        },
        {
          expand: true,
          dot: true,
          cwd: '.',
          flatten: true,
          dest: 'dist/styles/fonts',
          src: [
            'vendor/fontawesome/fonts/FontAwesome.otf',
            'vendor/fontawesome/fonts/fontawesome-webfont.eot',
            'vendor/fontawesome/fonts/fontawesome-webfont.svg',
            'vendor/fontawesome/fonts/fontawesome-webfont.ttf',
            'vendor/fontawesome/fonts/fontawesome-webfont.woff',
            'vendor/fontawesome/fonts/fontawesome-webfont.woff2'
          ]
        }]
      },
     cssjs: {
        files: [{
          expand: true,
          dot: true,
          cwd: '.',
          dest: 'dist',
          src: [
            'scripts/*',
            'styles/*'
          ]
        }]
      }
    },

    jadeUsemin: {
      scripts: {
          options: {
            tasks: {
              js: ['concat', 'uglify'],
              css: ['concat', 'cssmin']
            }
          },
          files: [{
            dest: '.tmp/themes/triple.jade',
            src: 'themes/triple.jade'
          }]
      }
    },

    aglio: {
      api1:{
        files:{
            'dist/index.html': [
              'apis/api_general.apib',
              'apis/account/account.apib',
              'apis/server/server.apib',
              'apis/volume/volume.apib',
              'apis/snapshot/snapshot.apib',
              'apis/image/image.apib',
              'apis/ip/ip.apib',
              'apis/security/security.apib',
              'apis/metadata/metadata.apib',
              'apis/user_data/user_data.apib'
          ]
        },
        options: {
          theme: "scaleway",
          themeTemplate: 'themes/triple.jade',
          themeVariables: 'themes/variables-scaleway.less',
          seperator: "\n"
        }
      }
    },

    connect: {
      server: {
        options: {
            port: 9000,
            base: './dist'
        }
      }
    },

    watch: {
        markdown: {
          files: ['apis/*/*.apib'],
          tasks: ['aglio']
        }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['clean', 'bowerInstall', 'copy', 'jadeUsemin', 'aglio', 'copy:cssjs']);
  grunt.registerTask('serve', ['default', 'connect', 'watch'])
};
