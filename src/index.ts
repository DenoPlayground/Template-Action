import * as actionsCore from '@actions/core';

console.log('Input:', actionsCore.getInput('custom-input'));

actionsCore.setOutput('custom-output', 'Test123');
