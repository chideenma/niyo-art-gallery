import { FILTER_ART_COLLECTION_START, FILTER_ART_COLLECTION_SUCCESS, FILTER_ART_COLLECTION_FAIL } from '../../actionTypes';

import {  API } from '../../../api'

const filterArtCollectionStart = () => {
    return { type: FILTER_ART_COLLECTION_START}
}

const filterArtCollectionSuccess = (payload) => {
    console.log(payload, 'line 100000')
    return { type: FILTER_ART_COLLECTION_SUCCESS, payload}
}

const filterArtCollectionFail = () => {
    return { type: FILTER_ART_COLLECTION_FAIL}
}

export const filterArtCollectionRequest = (payload) => {
    return async (dispatch) => {
        dispatch(filterArtCollectionStart())

        try {
            const obj = {
               method: "GET",
               path:  `artworks/search?q=${payload}`
            }

            const data = await API(obj)
              console.log(data.data.data, "data on line 28 >>>>>>>")
            if(data.status == 200) {
                dispatch(filterArtCollectionSuccess(data.data.data))
            } else {
                dispatch(filterArtCollectionFail())
            }
          
           
        } catch (error) {
           console.log(error, "check the error on line 31")

           dispatch(filterArtCollectionFail())
        }
    }
}