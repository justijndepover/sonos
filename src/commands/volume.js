module.exports = {
    cmd: 'volume',
    description: 'Set the volume',
    callback: async function (yargs, device) {
        var volume = yargs.argv._[1];
        if (! volume) {
            await device.getVolume().then((volume) => console.log(`current volume is: ${volume}`))
            process.exit();
        }

        volume = parseInt(volume);
        if (volume < 0 || volume > 100) {
            console.log('Volume should be between 0 and 100');
            process.exit();
        }

        device.setVolume(volume).then(() => console.log(`Setting volume to ${volume}`));
    },
}