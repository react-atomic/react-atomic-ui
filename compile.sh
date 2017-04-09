#!/bin/sh
find ./assets -name "*.js" | xargs rm -rf

conf='{"assetsRoot":"./assets/"}'

production(){
    echo "Production Mode";
    npm run build
    CONFIG=$conf NODE_ENV=production webpack -p --optimize-minimize
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$conf webpack
}

case "$1" in
  p)
    production
    ;;
  *)
    develop
    exit
esac

exit $?
