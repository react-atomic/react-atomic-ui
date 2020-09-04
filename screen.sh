#!/bin/bash

SCREEN_NAME="reactui"

if ! screen -list | grep -q "${SCREEN_NAME}"; then
    screen -dmS ${SCREEN_NAME};
fi

exec() {
    tabName=$1
    cmd=$2
    echo $tabName
    screen -S ${SCREEN_NAME} -X screen -t ${tabName}
    screen -S ${SCREEN_NAME} -p ${tabName} -X stuff "$cmd^M";
}

case "$1" in
    stopall)
        screen -X -S ${SCREEN_NAME} quit
        ;;
    startall)
        exec "server" "./compile s"
        ;;
    *)
        echo $"Usage: $0 {startall|stopall}"
        exit 1
esac

exit $?
