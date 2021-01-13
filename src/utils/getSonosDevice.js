const { Sonos } = require('sonos');
const device = new Sonos('192.168.0.186');

module.exports = device;