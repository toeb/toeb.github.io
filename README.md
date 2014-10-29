# toeb.github.io

## Initialize

npm install
bower install


## develop

gulp serve


## deploy

add to .git/config 
```
[alias]
  deploy = subtree push --prefix dist origin gh-pages
```
gulp build
git deploy