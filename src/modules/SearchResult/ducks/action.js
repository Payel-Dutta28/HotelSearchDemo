import {
  ADDITION,
  LOAD_HOTELS,
  LOAD_HOTELS_SUCCESS,
  LOAD_HOTELS_ERROR,
  LOAD_LOCATIONS,
  LOAD_LOCATIONS_SUCCESS,
  LOAD_LOCATIONS_ERROR,
  HIDE_SUGGESTIONS
} from "./constant";
export function addition() {
  return {
    type: ADDITION
  };
}
export function fetchHotelSearchResult(requestParam) {
  console.log("fetch hotel list action", requestParam);
  return {
    type: LOAD_HOTELS,
    payload: requestParam
  };
}

export function fetchHotelSearchResultSuccess(hotelList) {
  console.log(hotelList);
  return {
    type: LOAD_HOTELS_SUCCESS,
    payload: hotelList
  };
}

export function fetchHotelSearchResultFailure(message) {
  return {
    type: LOAD_HOTELS_ERROR,
    payload: message
  };
}

export function fetchLocationSearchResult(requestParam) {
  console.log("fetch location list action", requestParam);
  return {
    type: LOAD_LOCATIONS,
    payload: requestParam
  };
}

export function fetchHotelLocationResultSuccess(locationList) {
  console.log(locationList);
  return {
    type: LOAD_LOCATIONS_SUCCESS,
    payload: locationList
  };
}

export function fetchLocationSearchResultFailure(message) {
  return {
    type: LOAD_LOCATIONS_ERROR,
    payload: message
  };
}
export function hideSuggestions() {
  return {
    type: HIDE_SUGGESTIONS
  };
}
