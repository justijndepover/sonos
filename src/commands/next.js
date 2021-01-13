exports.cmd = 'next';
exports.description = 'Skip to the next song';
exports.callback = function (yargs, device) {
    device.next().then(() => console.log('Skipping song...'))
}