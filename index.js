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
  var id = args[0];

  var htmlTmlSrc = path.join(__dirname, 'reader.ejs');
  var htmlTml = ejs.compile(fs.readFileSync(htmlTmlSrc, 'utf-8'))
  console.log(args[0])
  return htmlTml({"src": args[0]});
});
