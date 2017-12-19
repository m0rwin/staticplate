var sass    = require('node-sass')
var bourbon = require('bourbon');
var neat = require('node-neat');
var fs = require('fs');
function makeCss(config) {
    sass.render({
        file: config.scss,
        outFile: config.css,
        // includePaths: bourbon.with('other/path', 'another/path'),
        // - or -
        includePaths: bourbon.includePaths.concat(neat.includePaths),
        importer: require('compass-importer'),
        outputStyle: 'expanded',
        sourceMap: true,
        sourceMapEmbed: true
      },
      function(error, result) { // node-style callback from v3.0.0 onwards
          if(!error){
              // No errors during the compilation, write this result on the disk
              fs.writeFile(config.css, result.css, function(err){
                  if(!err){
                      //file written on disk
                  } else {
                      console.log('unable to write to file: ' + config.css);
                      console.log(err);
                  }
              });
          } else {
              console.log('unable to interpret scss file: ' + error.file)
              console.log('' + error.formatted);
          }
      });
}

makeCss({
    scss: './scss/style.scss',
    css: './css/style.css'
});

makeCss({
    scss: './scss/our-world-styles.scss',
    css: './css/our-world.css'
});