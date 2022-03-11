#!/bin/sh
DIR="$( cd "$(dirname "$0")" ; pwd -P )"
SWJS=${DIR}/service-worker.js

conf='{'
conf+='"assetsRoot":"/assets/",'
conf+='"externals":{},'
conf+='"indexTpl":"'${DIR}/index.tpl'",'
conf+='"indexHtml":"'${DIR}/index.html'",'
conf+='"swDest":"'${SWJS}'",'
# conf+='"swDebug":true,'
conf+='"devPort": "'${hotPort:-8080}'"'
conf+='}'

echo $conf;

cd $DIR
webpack='npm run webpack --'

production(){
    echo "Production Mode";
    npm run build
    CONFIG=$conf NODE_ENV=production $webpack
}

analyzer(){
    echo "Analyzer Mode";
    npm run build
    CONFIG=$conf BUNDLE='{}' $webpack
}

develop(){
    stop
    echo "Develop Mode";
    npm run build
    CONFIG=$conf $webpack
}

startServer(){
    killBy ${DIR}/node_modules/.bin/ws
    yarn
    port=${port-3000}
    echo "Start server";
    npm run start -- -p $port -v
}

killBy(){
    ps -eo pid,args | grep $1 | grep -v grep | awk '{print $1}' | xargs -I{} kill -9 {}
}

stop(){
    killBy ${DIR}/node_modules/.bin/babel 
    cat webpack.pid | xargs -I{} kill -9 {}
    npm run clean
    echo "Stop done";
}

watch(){
    stop 
    echo "Watch Mode";
    npm run build:ui -- --watch &
    npm run build:src -- --watch &
    sleep 10 
    CONFIG=$conf $webpack --watch &
}

watchTest(){
    stop 
    echo "Watch Test";
    npm run build:test:ui -- --watch &
    npm run build:test:src -- --watch &
}

hot(){
    stop
    rm $SWJS 
    echo "Hot Mode";
    npm run build:ui -- --watch &
    npm run build:src -- --watch &
    HOT_UPDATE=1 CONFIG=$conf $webpack serve &
}

case "$1" in
  p)
    production
    ;;
  a)
    analyzer 
    ;;
  s)
    startServer 
    ;;
  hot)
    hot
    ;;
  watch)
    watch 
    ;;
  watchTest)
    watchTest
    ;;
  stop)
    stop 
    ;;
  *)
    develop
    exit
esac

exit $?
