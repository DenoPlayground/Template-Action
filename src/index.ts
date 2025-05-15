import * as actionsCore from '@actions/core';

const customTextInput = actionsCore.getInput('custom-text-input');
const customListInput = actionsCore.getInput('custom-list-input');
const customKeyValueInput = actionsCore.getInput('custom-key-value-input');

console.log('custom-text-input:', customTextInput);
console.log('custom-list-input:', customListInput);
console.log('custom-key-value-input:', customKeyValueInput);

actionsCore.setOutput('custom-text-output', 'Test123');
