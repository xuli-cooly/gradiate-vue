const fs = require('fs')

const path = require('path')

const JSON5 = require('json5')

var json = fs.readFileSync(path.join(__dirname, './test.json5'),'utf-8')

// console.log(json);

var obj = JSON5.parse(json)

console.log(obj);