module.exports = {
    cmd: 'next',
    description: 'Skip to the next song',
    callback: function (yargs, device) {
        device.next().then(() => console.log('Skipping song...'));
    },
}