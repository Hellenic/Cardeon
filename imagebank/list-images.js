
// Usage: node list-images.js path/to/files/

var fs = require('fs');
var path = require('path');

function dirTree(filename) {
  var stats = fs.lstatSync(filename);
  var info = {
    path: filename,
    name: path.basename(filename)
  };

  if (stats.isDirectory()) {
    info.type = "folder";
    info.children = fs.readdirSync(filename).map(function(child) {
      return dirTree(filename + '/' + child);
    });
  } else {
    // Assuming it's a file. In real life it could be a symlink or something else!
    info.type = "file";
  }

  return info;
}

if (module.parent == undefined) {
    var filesObject = dirTree(process.argv[2]);
    console.log(JSON.stringify(filesObject));
}
