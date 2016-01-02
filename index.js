/**
* hexo-pdf
* https://github.com/superalsrk/hexo-pdf.git
* Copyright (c) 2015, superalsrk
* Licensed under the MIT license.
* Syntax:
* {% pdf http://yourdoman.com/x.pdf %} %}
**/

var ejs = require('ejs'),
    path = require('path'),
    fs = require('fs')

hexo.extend.tag.register('pdf', function(args){

  var htmlTmlSrc = path.join(__dirname, 'reader.ejs');
  var htmlTml = ejs.compile(fs.readFileSync(htmlTmlSrc, 'utf-8'))

  var type = 'normal';
  var pdfLink = args[0];

  if (pdfLink.indexOf('.pdf') > 0) {
  	type = 'normal'
  }
  else if(pdfLink.indexOf('drive.google.com') > 0) {
  	type = 'googledoc'
  }
  else if(pdfLink.indexOf('www.slideshare.net') > 0) {
  	type = 'slideshare'
  }

  return htmlTml({"src": args[0], "type" : type});
});

