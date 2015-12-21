/**
 * Create build paths without scoped package name
 */
var packageConfig = require(process.cwd() + '/package.json')

var transform = require('./transform')

var packageExportName = transform.getPackageExportName(packageConfig.name)

var destinationVersionPath = transform.getDestinationVersionPath(packageConfig.main, packageExportName)

module.exports = {
  packageExportName: packageExportName,
  destinationVersionPath: destinationVersionPath
}
