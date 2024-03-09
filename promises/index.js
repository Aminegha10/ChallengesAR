const process = require("./process.js");
async function main() {
  let filePaths = [
    "./textbefore1.txt",
    "./textbefore2.txt",
    "./textbefore3.txt",
  ];
  for (const filePath of filePaths) {
     await process.processFiles(filePath);
  }
}
main();
