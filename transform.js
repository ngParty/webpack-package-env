// Remove npm scope prefix from name
function getPackageExportName (packageConfigName) {
  return packageConfigName.split('/').slice(-1)[ 0 ]
}

// Remove target folder and package filename suffix
function getDestinationVersionPath (packageConfigMain, packageExportName) {
  return packageConfigMain
    .replace('dist/', '')
    .replace('/' + packageExportName + '.js', '')
}

module.exports = {
  getPackageExportName: getPackageExportName,
  getDestinationVersionPath: getDestinationVersionPath
}
