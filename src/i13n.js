import { i13nDispatch } from "organism-react-i13n";
import {win} from "win-doc";
import callfunc from "call-func";

let init;

const actionHandler = (state, action) => {
  console.log("action", action);
  return state;
};

const impressionHandler = (state, action) => {
  if (init) {
    callfunc(win().i13n?.dispatch, ['impression']);
  } else {
    init = true;
  }
  return state;
};

i13nDispatch("config/set", {
  actionHandler,
  impressionHandler,
});
