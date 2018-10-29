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

const initialState = {
  adults: 0,
  children: 0,
  rooms: 0,
  hotelSearchResult: [],
  locationListResult: [],
  isLoading: false,
  showSuggestion: false
};
export default function operationReducer(state = initialState, action) {
  switch (action.type) {
    case ADDITION:
      return {
        ...state,
        adults: state.adults + 1
      };
    case LOAD_HOTELS:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_HOTELS_SUCCESS:
      return {
        ...state,
        hotelSearchResult: action.payload,
        isLoading: false
      };

    case LOAD_HOTELS_ERROR:
      return {
        ...state,
        offerSearchResult: [],
        isLoading: false
      };
    case LOAD_LOCATIONS:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_LOCATIONS_SUCCESS:
      return {
        ...state,
        locationListResult: action.payload,
        isLoading: false,
        showSuggestion: true
      };

    case LOAD_LOCATIONS_ERROR:
      return {
        ...state,
        locationListResult: [],
        isLoading: false
      };
    case HIDE_SUGGESTIONS:
      return {
        ...state,
        showSuggestion: false
      };

    default:
      return state;
  }
}
