const write = require("./writefile.js");
const read = require("./readfile.js");
async function processFiles(filePath) {
  let content = await read.readFileAsync(filePath);
  content = (content + " ").toLocaleUpperCase();
  await write.writeFileAsync("./textafter.txt", content,{flag : 'a'});
}
module.exports = { processFiles };
