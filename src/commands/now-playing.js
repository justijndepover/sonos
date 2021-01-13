exports.cmd = 'now-playing';
exports.description = 'Get the current track';
exports.callback = function (yargs) {
    const device = require('../utils/getSonosDevice');
    device.currentTrack().then((response) => {
        console.log(`Artist: ${response.artist}\ntitle: ${response.title}\nAlbum: ${response.albm}`);
    });
}