import {
  GET_ART_DETAILS_START,
  GET_ART_DETAILS_SUCCESS,
  GET_ART_DETAILS_FAIL,
} from "../../actionTypes";

import { artDetailsStore } from "../../initialState";

const getArtDetailsReducer = (state = artDetailsStore, action) => {
  switch (action.type) {
    case GET_ART_DETAILS_START:
      return { ...state, isLoading: true };
    case GET_ART_DETAILS_SUCCESS:
      return {
        ...state,
        art: action.payload,
        isSuccessful: true,
        isLoading: false,
      };
    case GET_ART_DETAILS_FAIL:
      return { ...state, isSuccessful: false, isLoading: false };

    default:
      return state;
  }
};

export default getArtDetailsReducer;
