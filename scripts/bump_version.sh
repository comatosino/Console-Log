#! /usr/bin/env bash

shopt -s extglob

yarn config set version-git-tag false
yarn config set version-tag-prefix ""

case $1 in
[Pp]atch/?*)
  yarn version --patch
  ;;
[Ff]eature/?*)
  yarn version --minor
  ;;
*)
  echo "error: invalid commit message pattern"
  exit 1
  ;;
esac
