#!/bin/bash
npm run build:web
if test $? != 0; then exit; fi

git co gh-pages
if test $? != 0; then exit; fi

git rm -r *.png *.html *.ico site.webmanifest _next
if test $? != 0; then exit; fi

cp -a renderer/out/* .

git add .
if test $? != 0; then exit; fi

git ci -m "update from build"
if test $? != 0; then exit; fi

git push origin gh-pages

git co main

