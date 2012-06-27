/**
 * Zapstrap
 * https://github.com/jonotron/zapstrap
 *
 * Copyright (c) 2012 Jonathan Bowers
 * Licensed under the MIT license
 */

exports.description = 'Create a zapstrap application (backbone + require + node - the way I like it).';

exports.notes = '_Project name_ shouldn\'t contain js';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {

  grunt.helper('prompt', {type: 'zapstrap'}, [
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'description'),
    grunt.helper('prompt_for', 'version', '0.0.1'),

    grunt.helper('prompt_for', 'node_version', '0.8.x'),
    grunt.helper('prompt_for', 'author_name'),
    grunt.helper('prompt_for', 'author_email'),

    grunt.helper('prompt_for', 'licenses', 'MIT')
  ], function (err, props) {

    //var files = init.filesToCopy(props);
    props.dependencies = { 
      "express":    "2.5.x", 
      "hbs":        "1.0.x",
      "underscore": "1.3.x",
      "mongoose":   "2.5.x",
      "nconf":      "0.5.x"
    };
    props.devDependencies = {
      "requirejs":  "2.0.x",
      "less":       "1.3.x" 
    };

    //init.copyAndProcess(files, props);

    init.writePackageJSON('package.json', props);

    done();
  });
};
