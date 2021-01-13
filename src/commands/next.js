exports.cmd = 'next';
exports.description = 'Skip to the next song';
exports.callback = function (yargs) {
    const device = require('../utils/getSonosDevice');
    device.next().then(() => console.log('Skipping song...'))
}