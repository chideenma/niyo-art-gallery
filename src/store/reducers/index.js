import { combineReducers } from "redux";


import fetchArtCollectionReducer from "./fetchArtCollection";
import getArtDetailsReducer from "./getArtDetails";
// import filterArtCollectionReducer from "./filterArtCollection";

export default combineReducers({
    artCollectionStore: fetchArtCollectionReducer,
    artDetailsStore: getArtDetailsReducer
    // filteredArtCollectionStore: filterArtCollectionReducer
})