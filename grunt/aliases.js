module.exports = {
  test: [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ],
  build: [
    'clean:dist',
    'bower-install',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin'
  ],
  default: [
    'newer:jshint',
    'test',
    'build'
  ],
  'server:dist': [
    'build',
    'connect:dist:keepalive'
  ],
  server: [
    'clean:server',
    'bower-install',
    'concurrent:server',
    'autoprefixer',
    'connect:livereload',
    'watch'
  ]
};
