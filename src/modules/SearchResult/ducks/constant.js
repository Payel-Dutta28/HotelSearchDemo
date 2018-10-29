/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'cat-ui/path/to/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ADDITION = "cat-ui/modules/Home/ADDITION";
export const LOAD_HOTELS = "cat-ui/modules/Home/LOAD_HOTELS";
export const LOAD_HOTELS_SUCCESS = "cat-ui/modules/Home/LOAD_HOTELS_SUCCESS";
export const LOAD_HOTELS_ERROR = "cat-ui/modules/Home/LOAD_HOTELS_ERROR";
export const LOAD_LOCATIONS = "cat-ui/modules/Home/LOAD_LOCATIONS";
export const LOAD_LOCATIONS_SUCCESS =
  "cat-ui/modules/Home/LOAD_LOCATIONS_SUCCESS";
export const LOAD_LOCATIONS_ERROR = "cat-ui/modules/Home/LOAD_LOCATIONS_ERROR";
export const HIDE_SUGGESTIONS = "cat-ui/modules/Home/HIDE_SUGGESTIONS";
