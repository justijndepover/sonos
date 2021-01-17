module.exports = {
    cmd: 'now-playing',
    description: 'Get the current track',
    callback: function (yargs, device) {
        device.currentTrack().then((response) => {
            console.log(`Artist: ${response.artist}\ntitle: ${response.title}\nAlbum: ${response.albm}`);
        });
    },
}