const sonos = require('sonos');

const getInitialDevice = (timeoutTime = 5000, cb) => {
    return new Promise((resolve, reject) => {
        const search = sonos.DeviceDiscovery()
        search.once('DeviceAvailable', device => {
            clearTimeout(timeout),
            search.socket.close();
            resolve(device);
        });

        const timeout = setTimeout(() => {
            search.socket.close();
            reject(new Error('Unable to find Sonos device'));
        }, timeoutTime);
    });
}

module.exports = getInitialDevice