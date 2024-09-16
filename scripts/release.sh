#! /usr/bin/env bash

git checkout main
git pull

VERSION=$(node -p "require('./package.json').version")
TAG=v$VERSION

git tag -a $TAG -m "release $VERSION"

if [ $? -eq 0 ]; then
  git push origin $TAG
else
  echo error: failed to tag build
fi
