let folder = '../../packages/components/src/';
const fs = require('fs');

// src
// fs.readdirSync(folder).forEach(file => {
//   //console.log(file.replace('.tsx',''));
//   console.log(`"./${file.replace('.tsx','')}": "./src/${file.replace('.tsx','')}.tsx",`);
// });

// UI
// folder = '../../packages/components/src/ui';
// fs.readdirSync(folder).forEach(file => {
//   //console.log(file.replace('.tsx',''));
//   console.log(`"./ui/${file.replace('.tsx','')}": "./src/ui/${file.replace('.tsx','')}.tsx",`);
// });

// lib
// folder = '../../packages/components/src/lib';
// fs.readdirSync(folder).forEach(file => {
//   //console.log(file.replace('.tsx',''));
//   console.log(`"./lib/${file.replace('.tsx','')}": "./src/lib/${file.replace('.tsx','')}.tsx",`);
// });

// validation
folder = '../../packages/components/src/lib/validations';
fs.readdirSync(folder).forEach(file => {
  //console.log(file.replace('.tsx',''));
  console.log(`"./validations/${file.replace('.tsx','')}": "./src/lib/validations/${file.replace('.ts','')}.ts",`);
});