exports.cmd = 'pause';
exports.description = 'Pause autoplay';
exports.callback = function (yargs) {
    const device = require('../utils/getSonosDevice');
    device.pause().then(() => console.log('Pausing...'))
}