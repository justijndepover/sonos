const fs = require('fs');

test('all-commands-have-tests', () => {
    let numberOfCommands = fs.readdirSync(__dirname + '/../commands').length;
    let numberOfTests = fs.readdirSync(__dirname).length - 1; // subtract this command
    expect(numberOfCommands).toBe(numberOfTests);
});