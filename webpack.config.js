var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'dist/bundle.js',
        path: path.resolve(__dirname, '')
    }
};