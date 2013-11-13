module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
          baseUrl: 'tmp/',
          name: 'typeclasses',
          out: 'amd/index.js',
          optimize: 'none'
        }
      }
    },
    transpile: {
      amd: {
        type: 'amd',
        files: [{
          anonymous: true,
          expand: true,
          src: ['*.js'],
          dest: 'tmp/'
        }],
      }
    }
    //watch: {
      //lint: {
        //files: ['*.js', 'public/scripts/main.js'],
        //tasks: 'jshint'
      //},
      //compile_js: {
        //files: ['*.js', 'public/scripts/main.js'],
        //tasks: 'requirejs'
      //},
      //compile_stylus: {
        //files: ['views/style/reset.styl', 'views/style/mixins.styl', 'views/style/main.styl'],
        //tasks: 'stylus'
      //}
    //}
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');
  //grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('precompile', ['jshint', 'stylus', 'requirejs']);

};
