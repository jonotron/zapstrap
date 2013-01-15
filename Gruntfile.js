module.exports = function(grunt) {
  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          appDir: "app/",
          baseUrl: "modules/",
          mainConfigFile: "app/require.config.js",
          
          dir: "build",
          keepBuildDir: false,

          optimize: "uglify",


          pragmasOnSave: {
            excludeHbsParser:     true,
            excludeHbs:           true,
            excludeAfterBuild:    true
          },

          findNestedDependencies: true,
          modules: [
            { 
              name: "app/app",
              exclude: ["jquery"]
            }
          ]

        } 
      } 
    } 
  });

  grunt.loadNpmTasks('grunt-requirejs');

  grunt.registerTask('build', 'requirejs');
};
