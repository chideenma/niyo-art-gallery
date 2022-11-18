import { FETCH_ART_COLLECTION_START, FETCH_ART_COLLECTION_SUCCESS, FETCH_ART_COLLECTION_FAIL } from '../../actionTypes';

import {  API } from '../../../api'

const fetchArtCollectionStart = () => {
    return { type: FETCH_ART_COLLECTION_START}
}

const fetchArtCollectionSuccess = (payload) => {
    console.log(payload, 'line 100000')
    return { type: FETCH_ART_COLLECTION_SUCCESS, payload}
}

const fetchArtCollectionFail = () => {
    return { type: FETCH_ART_COLLECTION_FAIL}
}

export const fetchArtCollectionRequest = (payload) => {
    return async (dispatch) => {
        dispatch(fetchArtCollectionStart())

        try {
            const obj = {
               method: "GET",
               path:  "artworks"
            }

            const data = await API(obj)
              console.log(data.data.data, "data on line 28 >>>>>>>")
            if(data.status == 200) {
                dispatch(fetchArtCollectionSuccess(data.data.data))
            } else {
                dispatch(fetchArtCollectionFail())
            }
          
           
        } catch (error) {
           console.log(error, "check the error on line 31")

           dispatch(fetchArtCollectionFail())
        }
    }
}

