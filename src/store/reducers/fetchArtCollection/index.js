import { 
    FETCH_ART_COLLECTION_START, 
    FETCH_ART_COLLECTION_SUCCESS, 
    FETCH_ART_COLLECTION_FAIL,
    FILTER_ART_COLLECTION_START, FILTER_ART_COLLECTION_SUCCESS, FILTER_ART_COLLECTION_FAIL } from '../../actionTypes';

import {  artCollectionStore } from "../../initialState"

const fetchArtCollectionReducer = (state = artCollectionStore, action) => {
    console.log(action, 'what is in action palyod')
    switch(action.type) {
        case FETCH_ART_COLLECTION_START:
          return {...state, isLoading: true};
        case FETCH_ART_COLLECTION_SUCCESS:
            return {...state, collection: action.payload, isSuccessful: true, isLoading: false};
        case FETCH_ART_COLLECTION_FAIL:
            return {...state, isSuccessful: false, isLoading: false};
        
        case FILTER_ART_COLLECTION_START:
          return {...state, isLoading: true};
        case FILTER_ART_COLLECTION_SUCCESS:
            return {...state, collection: action.payload, isSuccessful: true, isLoading: false};
        case FILTER_ART_COLLECTION_FAIL:
            return {...state, isSuccessful: false, isLoading: false};
            default:
            return state;
    }

}

export default fetchArtCollectionReducer;