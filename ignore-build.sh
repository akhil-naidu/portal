#!/bin/bash
var=$(git diff HEAD^ HEAD ./hasura)


if [[ var ]] ; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

else
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
fi