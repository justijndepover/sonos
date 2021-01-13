exports.cmd = 'play';
exports.description = 'Resume autoplay';
exports.callback = function (yargs) {
    const device = require('../utils/getSonosDevice');
    device.play().then(() => console.log('Resuming...'))
}