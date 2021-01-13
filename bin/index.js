#!/usr/bin/env node
const yargs = require("yargs");
const fs = require('fs');
var command = yargs.usage('Usage: sonos <command>');

fs.readdir(__dirname + '/../src/commands', (err, files) => {
    files.forEach(file => {
        var subcommand = require(`../src/commands/${file}`);
        command.command(subcommand.cmd, subcommand.description, function () {
            subcommand.callback(yargs);
        });
    });

    var options = command.argv;
});
