import * as actionsCore from '@actions/core';

const input = actionsCore.getInput('custom-input');

console.log('Input:', actionsCore.getInput('custom-input'));

actionsCore.setOutput('custom-output', input);
