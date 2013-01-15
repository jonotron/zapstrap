({
  appDir: "app/",
  baseUrl: "modules/",
  mainConfigFile: 'app/require.config.js',
  dir: "build",
  
  optimize: "none", // comment this out to get an uglified file

  keepBuildDir: false, // nuke the buld dir, desktop is built first

  pragmasOnSave: {
    excludeHbsParser:     true,
    excludeHbs:           true,
    excludeAfterBuild:    true
  },

  findNestedDependencies: true,
  modules: [
    { 
      name: "app/app",
      exclude: ["jquery", "backbone.marionette", "backbone", "handlebars", "json2", "hbs"]
    }
  ]

})
