const fs = require("fs");
function writeFileAsync(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, { flag: "a" }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("file written succefily");
      }
    });
  });
}
module.exports = { writeFileAsync };
