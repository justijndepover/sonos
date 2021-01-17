module.exports = {
    cmd: 'pause',
    description: 'Pause autoplay',
    callback: function (yargs, device) {
        device.pause().then(() => console.log('Pausing...'));
    },
}