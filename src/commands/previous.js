module.exports = {
    cmd: 'previous',
    description: 'Play the previous song',
    callback: function (yargs, device) {
        device.previous().then(() => console.log('Playing previous song...'));
    },
}