var globby = require('globby')

/**
 * Changes the glob pattern paths into fs readable paths
 */
function getPaths(globs) {
    out = []
    out = out.concat(globby.sync(globs))

    return out
}

module.exports = getPaths