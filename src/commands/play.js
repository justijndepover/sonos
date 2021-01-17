module.exports = {
    cmd: 'play',
    description: 'Resume autoplay',
    callback: function (yargs, device) {
        device.play().then(() => console.log('Resuming...'));
    },
}