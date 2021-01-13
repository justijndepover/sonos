exports.cmd = 'play';
exports.description = 'Resume autoplay';
exports.callback = function (yargs, device) {
    device.play().then(() => console.log('Resuming...'))
}