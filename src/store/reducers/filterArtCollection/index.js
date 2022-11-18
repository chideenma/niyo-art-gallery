import { FILTER_ART_COLLECTION_START, FILTER_ART_COLLECTION_SUCCESS, FILTER_ART_COLLECTION_FAIL } from '../../actionTypes';

import { filteredArtCollectionStore } from "../../initialState"

const filterArtCollectionReducer = (state = filteredArtCollectionStore, action) => {
    switch(action.type) {
        case FILTER_ART_COLLECTION_START:
          return {...state, isLoading: true};
        case FILTER_ART_COLLECTION_SUCCESS:
            return {...state, filteredCollections: action.payload, isSuccessful: true, isLoading: false};
        case FILTER_ART_COLLECTION_FAIL:
            return {...state, isSuccessful: false, isLoading: false};
        default:
            return state;
    }

}

export default filterArtCollectionReducer;