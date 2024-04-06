const fs = require("fs");
const path = require("path");

const { program } = require("commander");

program
  .option("--dir-path, --dir <dir>")
  .option("--text <text>")
  .option("--allow-ext, --extenstion <extenstion>")
  .parse(process.argv);

const options = program.opts();

fs.readdir(options.dir, (err, files) => {
  files.forEach((file) => {
    const filePath = path.join(options.dir, file);
    fs.stat(filePath, (err, stats) => {
      if (stats.isDirectory()) {
        fs.readdir(filePath, (err, subfiles) => {
          subfiles.forEach((subfile) => {
            const subFilePath = path.join(filePath, subfile);
            const fileExtenstion = path.extname(subFilePath);
            if (fileExtenstion == options.extenstion) {
              fs.writeFile(subFilePath, options.text, (err) => {
                console.log(err);
              });
            }
          });
        });
      }
    });
    const fileExtenstion = path.extname(filePath);
    if (fileExtenstion == options.extenstion) {
      fs.writeFile(filePath, options.text, (errr) => {
        console.log(err);
      });
    }
  });
});
