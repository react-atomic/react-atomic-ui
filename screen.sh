#!/bin/bash

SCREEN_NAME=`basename "$PWD"`

exec() {
    tabName=$1
    cmd=$2
    echo $tabName
    if ! screen -list | grep -q "${SCREEN_NAME}"; then
        screen -dmS ${SCREEN_NAME};
        sleep 1;
    fi
    screen -S ${SCREEN_NAME} -X screen -t ${tabName}
    screen -S ${SCREEN_NAME} -p ${tabName} -X stuff "$cmd^M";
}

case "$1" in
    enter)
        screen -r $SCREEN_NAME 
        ;;
    stopall)
        screen -X -S ${SCREEN_NAME} quit
        ;;
    startall)
        exec "server" "./compile.sh s"
        exec "hot" "./compile.sh hot"
        echo "run 'screen -r $SCREEN_NAME' or './screen.sh enter' to enter screen"
        ;;
    *)
        echo $"Usage: $0 {startall|stopall|enter}"
        exit 1
esac

exit $?
