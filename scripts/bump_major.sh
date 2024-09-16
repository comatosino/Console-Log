#! /usr/bin/env bash

git checkout main
yarn config set version-git-tag true
yarn config set version-git-message "major/%s"
yarn config set version-tag-prefix "v"
yarn version --major

if [ $? -eq 0 ]; then
  TAG=$(git describe --tags)
  git push origin $TAG
  git push origin main
  echo "Successfully bumped version"
else
  echo error: failed to tag build
fi