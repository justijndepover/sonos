exports.cmd = 'pause';
exports.description = 'Pause autoplay';
exports.callback = function (yargs, device) {
    device.pause().then(() => console.log('Pausing...'))
}