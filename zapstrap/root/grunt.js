module.exports = function(grunt) {
  var exec = require('child_process').exec;
  
  grunt.registerTask('vendors', function() {
    var done = this.async(); // this task execs so it's asyncronous

    grunt.verbose.write('Installing vendors');

    var vendors = [
      { repo: 'https://github.com/jrburke/requirejs.git',
        path: 'vendor/jrburke/requirejs'
      },
      { repo: 'https://github.com/documentcloud/backbone.git',
        path: 'vendor/documentcloud/backbone'
      },
      { repo: 'https://github.com/documentcloud/underscore.git',
        path: 'vendor/documentcloud/underscore'
      },
      { repo: 'https://github.com/jquery/jquery.git',
        path: 'vendor/jquery/jquery'
      },
      { repo: 'https://github.com/cloudhead/less.js.git',
        path: 'vendor/cloudhead/less.js'
      },
      { repo: 'https://github.com/douglascrockford/JSON-js.git',
        path: 'vendor/douglascrockford/JSON-js'
      }
    ];

    vendors.forEach(function(vendor) {
      var cmd = "git submodule add " + vendor.repo + " " + vendor.path;
      exec(cmd, function(err, stdout, stderr) {
        if (err) throw err;
        grunt.log.write(stdout);
      });
    });


  });
};
