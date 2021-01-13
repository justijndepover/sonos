exports.cmd = 'now-playing';
exports.description = 'Get the current track';
exports.callback = function (yargs, device) {
    device.currentTrack().then((response) => {
        console.log(`Artist: ${response.artist}\ntitle: ${response.title}\nAlbum: ${response.albm}`);
    });
}