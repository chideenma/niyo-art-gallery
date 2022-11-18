import axios from "axios";

export const api_url = "https://api.artic.edu/api/v1/"


export const API = async (obj) => {
    const { path, method, data = null} = obj;

    const url = `${api_url}${path}`;
    const headers = { "Content-Type": "application/json" }
    try {
        const response = await axios({ method, url, data, headers, json: true})
        console.log(response, "<<<<<<<<<<<<< line 13 >>>>>>>>>");
        return response;
    } catch (error) {
        console.log(error, "<<<<<<<<,,line 15>>>>>>>")
        throw error
        
    }
}