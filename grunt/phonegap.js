module.exports = function(grunt) {
  return {
    config: {
      root: 'dist',
      config: {
        template: 'phonegap.xml',
        data: {
          id: 'net.bouzuya.hatenagraphmobile',
          name: '<%= package.name %>',
          version: '<%= package.version %>',
          description: '<%= package.description %>',
          author: '<%= package.author %>'
        }
      },
      cordova: '.cordova',
      path: 'phonegap',
      plugins: ['org.apache.cordova.inappbrowser'],
      platforms: [],
      verbose: false,
      releases: 'releases',
      releaseName: function(){
        var pkg = grunt.file.readJSON('package.json');
        return (pkg.name + '-' + pkg.version);
      },
    }
  };
};
