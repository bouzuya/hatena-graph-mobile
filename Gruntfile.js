'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    config: {
      yeoman: {
        app: 'app',
        dist: 'dist'
      }
    }
  });
};
