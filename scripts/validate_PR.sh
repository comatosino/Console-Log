#! /usr/bin/env bash

shopt -s extglob

echo pr title: ${1}

case $1 in
!([Pp]atch/?*|[Ff]eature/?*))
  echo error: invalid pr title
  exit 1
  ;;
*)
  echo title ok
  ;;
esac
