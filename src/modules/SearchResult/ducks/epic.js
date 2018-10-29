import "rxjs";
import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import { LOAD_HOTELS } from "./constant";
import { LOAD_LOCATIONS } from "./constant";
import { LOAD_LOCATIONS_ERROR } from "./constant";
import * as hotelResultAction from "./action";

const url = "https://api.myjson.com/bins/17rb24";

/**
 * checkout epic.
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
const searchresultepic = (action$, store) =>
  action$.pipe(
    ofType(LOAD_HOTELS),
    mergeMap(action =>
      ajax
        .post(
          "http://10.227.72.177:12040/offer-admin-webapp/1.0/offers",
          action.payload,
          { "Content-Type": "application/json" }
        )
        .pipe(
          map(response =>
            hotelResultAction.fetchHotelSearchResultSuccess(response)
          )
        )
    )
  );
const locationFetchepic = (action$, store) => {
  console.log("Payload", action$.payload);
  const url = "https://apis.ihg.com/locations/v1/destinations?destination=";
  return action$.pipe(
    ofType(LOAD_LOCATIONS),
    mergeMap(action =>
      ajax
        .getJSON(url + `${action.payload.toLowerCase()}` + `&chainCode=6c`)
        .pipe(
          map(response =>
            hotelResultAction.fetchHotelLocationResultSuccess(response)
          ),
          catchError(error => ({
            type: LOAD_LOCATIONS_ERROR,
            payload: error.xhr.response,
            error: true
          }))
        )
    )
  );
};

export const epics = combineEpics(searchresultepic, locationFetchepic);
