exports.cmd = 'previous';
exports.description = 'Play the previous song';
exports.callback = function (yargs, device) {
    device.previous().then(() => console.log('Playing previous song...'))
}