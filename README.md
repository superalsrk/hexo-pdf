hexo-pdf
====
![MIT](https://img.shields.io/npm/l/express.svg)
![VERSION](https://img.shields.io/badge/version-1.1.0-green.svg)

Hexo tag for embeded pdf

## Install

```
$ npm install --save hexo-pdf
```


## Usage

### Normal PDF

```
{% pdf http://7xov2f.com1.z0.glb.clouddn.com/bash_freshman.pdf %}
```

or
```
{% pdf ./bash_freshman.pdf %}
```

### Google drive
```
{% pdf https://drive.google.com/file/d/0B6qSwdwPxPRdTEliX0dhQ2JfUEU/preview %}
```

### Slideshare
```
{% pdf http://www.slideshare.net/slideshow/embed_code/key/8Jl0hUt2OKUOOE %}
```
## Preview

### Normal PDF
![](screenshot/hexo-pdf-preview.png)

### Google drive
![](screenshot/hexo-googledrive-pdf.png)

### Slideshare
![](screenshot/hexo-slideshare-pdf.png)
