const fs = require('fs');
const path = require('path');

/**
 *
 * @param name
 */
const convertToCameCase = name => name.replace(/-([a-z])/g, capture => capture[1].toUpperCase());

/**
 * Loads the actual file using `require()`
 *
 * @param name the file name of the plugin to load
 * @returns {*} the export of the loaded file
 */
/* eslint-disable global-require, import/no-dynamic-require */
const loadFile = name => require(path.join(__dirname, 'plugins', name));
/* eslint-enable global-require, import/no-dynamic-require */

module.exports = exportsObject => {

    // get all custom/RTL plugins from the plugins directory
    fs.readdirSync(path.join(__dirname, 'plugins')).forEach(filename => {

        // only load .js files (and not their associated unit tests)
        if(!/\.js$/.test(filename) || /\.spec.js$/.test(filename)) {

            return;

        }

        const name = convertToCameCase(path.basename(filename, '.js'));
        Object.defineProperty(exportsObject, name, {value: loadFile});

    });

};
