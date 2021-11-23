const { execa } = require("execa");
const path = require("path");
// const URL = require("url");
const getPath = (p) => path.resolve(__dirname, "./", p);

const pandoc = (...args) => {
  execa(getPath("pandoc/windows/pandoc.exe"), args);
};

pandoc(getPath("./README.md","-s","-a","./README.docx"))
module.exports = {pandoc}
