import { Sonos } from 'sonos';

const device = new Sonos('192.168.0.186');
device.currentTrack().then(response => console.log(response));
