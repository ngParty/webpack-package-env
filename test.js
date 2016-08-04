var assert = require('assert')

var transform = require('./transform')

var packageConfig = {
  name: '@watt/pkg',
  main: 'dist/some/path/pkg.js'
}

assert.equal(transform.getPackageExportName('pkg'), 'pkg')
assert.equal(transform.getPackageExportName(packageConfig.name), 'pkg')

assert.equal(
  transform.getDestinationVersionPath(
    packageConfig.main,
    transform.getPackageExportName(packageConfig.name)
  ),
  'some/path'
)
