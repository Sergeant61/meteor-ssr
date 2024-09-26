Package.describe({
  "summary": "Server Side Rendering for Meteor with Blaze",
  "version": "2.2.1",
  "git": "https://github.com/Sergeant61/meteor-ssr",
  "name": "bordo:ssr"
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export(['Template', 'SSR'], ['server']);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
  ], 'server');

  api.addFiles([
    'test/base.js',
  ], 'server');
});

function configurePackage(api) {
  api.versionsFrom(['3.0.2']);
  api.use(['blaze@3.0.0', 'spacebars@2.0.0', 'spacebars-compiler@2.0.0', 'mongo', 'random'], 'server');
  api.addFiles([
    'lib/overrides.js',
    'lib/template.js',
    'lib/dynamic.js',
    'lib/api.js',
  ], 'server');
}
