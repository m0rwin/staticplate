var sass    = require('node-sass')
var bourbon = require('bourbon');
var fs = require('fs');

sass.render({
  file: './scss/style.scss',
  outFile: './css/style.css',
  // includePaths: bourbon.with('other/path', 'another/path'),
  // - or -
  includePaths: bourbon.includePaths,
  importer: require('compass-importer'),
  outputStyle: 'expanded'
},
function(error, result) { // node-style callback from v3.0.0 onwards
    if(!error){
        // No errors during the compilation, write this result on the disk
        fs.writeFile('./css/style.css', result.css, function(err){
        if(!err){
            //file written on disk
        }
        });
    }
});