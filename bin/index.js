#!/usr/bin/env node
const yargs = require("yargs");
const fs = require('fs');
var command = yargs.usage('Usage: sonos <command>');
const getInitialDevice = require('../src/utils/getSonosDevice');

fs.readdir(__dirname + '/../src/commands', (err, files) => {
    files.forEach(file => {
        var subcommand = require(`../src/commands/${file}`);
        command.command(subcommand.cmd, subcommand.description, async function () {
            const device = await getInitialDevice(5000);
            subcommand.callback(yargs, device);
        });
    });

    var options = command.argv;
});
