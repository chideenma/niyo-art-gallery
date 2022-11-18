import { GET_ART_DETAILS_START, GET_ART_DETAILS_SUCCESS, GET_ART_DETAILS_FAIL } from '../../actionTypes';

import {  API } from '../../../api'

const getArtDetailsStart = () => {
    return { type: GET_ART_DETAILS_START}
}

const getArtDetailsSuccess = (payload) => {
    return { type: GET_ART_DETAILS_SUCCESS, payload}
}

const getArtDetailsFail = () => {
    return { type: GET_ART_DETAILS_FAIL}
}

export const getArtDetailsRequest = (payload) => {
    return async (dispatch) => {
        dispatch(getArtDetailsStart())

        try {
            const obj = {
               method: "GET",
               path:  `artworks/${payload}`
            }

            const data = await API(obj)
              console.log(data.data.data, "data on line 28 >>>>>>>")
            if(data.status == 200) {
                dispatch(getArtDetailsSuccess(data.data.data))
            } else {
                dispatch(getArtDetailsFail())
            }
          
           
        } catch (error) {
           console.log(error, "check the error on line 31")

           dispatch(getArtDetailsFail())
        }
    }
}

