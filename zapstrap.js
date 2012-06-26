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
    grunt.helper('prompt_for', 'description')
  ], function (err, props) {
    var files = init.filesToCopy(props);

    init.copyAndProcess(files, props);

    init.writePackageJSON('package.json', props);

    done();
  });
};
