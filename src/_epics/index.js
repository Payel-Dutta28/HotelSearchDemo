import { combineEpics } from "redux-observable";
import { epics } from "../modules/SearchResult/ducks/epic";

export const rootEpic = epics;
