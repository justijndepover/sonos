exports.cmd = 'volume';
exports.description = 'Set the volume';
exports.callback = function (yargs, device) {
    var volume = yargs.argv._[1];
    if (! volume) {
        process.exit();
    }
    // validate
    device.setVolume(volume).then(() => console.log(`Setting volume to ${volume}`));
}