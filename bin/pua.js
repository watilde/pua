#!/usr/bin/env node
var program = require('commander');
var pkg = require(__dirname + "/../package.json");
var pua = require(__dirname + "/../index.js");

program
  .version(pkg.version)
  .usage('key [option] value')
  .option('-f, --file <file>', 'Provide a filename as value')
  .option('-j, --json', 'Display output as json')
  .option('-c, --clear', 'Clear all data')
  .parse(process.argv);


if (!program.args) {

}
