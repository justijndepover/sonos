exports.cmd = 'volume';
exports.description = 'Set the volume';
exports.callback = function (yargs, device) {
    var volume = yargs.argv._[1];
    if (! volume) {
        console.log('Volume is required');
        process.exit();
    }

    volume = parseInt(volume);
    if (volume < 0 || volume > 100) {
        console.log('Volume should be between 0 and 100');
        process.exit();
    }

    device.setVolume(volume).then(() => console.log(`Setting volume to ${volume}`));
}