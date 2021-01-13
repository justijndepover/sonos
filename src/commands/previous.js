exports.cmd = 'previous';
exports.description = 'Play the previous song';
exports.callback = function (yargs) {
    const device = require('../utils/getSonosDevice');
    device.previous().then(() => console.log('Playing previous song...'))
}