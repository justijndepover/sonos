const fs = require('fs');

test('command-exports', () => {
    var commands = fs.readdirSync(__dirname + '/../commands');
    commands.forEach((command) => {
        var command = require('./../commands/' + command);
        expect(command).toHaveProperty('cmd');
        expect(command).toHaveProperty('description');
        expect(command).toHaveProperty('callback');
    });
});