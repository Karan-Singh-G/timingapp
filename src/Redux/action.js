import *as types from "./actionType"
import axios from "axios"

const getNameRequest=()=>{
    return {
        type:types.GET_NAME_REQUEST
    }
}

const getNameSuccess=(payload)=>{
    return {
        type:types.GET_NAME_SUCCESS,payload
    }
}

const getNameFailure=()=>{
    return {
        type:types.GET_NAME_REQUEST
    }
}




const getWordRequest=()=>{
    return {
        type:types.GET_WORD_REQUEST
    }
}

const getWordSuccess=(payload)=>{
    return {
        type:types.GET_WORD_SUCCESS,payload
    }
}

const getWordFailure=()=>{
    return {
        type:types.GET_WORD_REQUEST
    }
}





const getScoreRequest=()=>{
    return {
        type:types.GET_SCORE_REQUEST
    }
}

const getScoreSuccess=(payload)=>{
    return {
        type:types.GET_SCORE_SUCCESS,payload
    }
}

const getScoreFailure=()=>{
    return {
        type:types.GET_SCORE_REQUEST
    }
}







const getLevelRequest=()=>{
    return {
        type:types.GET_SCORE_REQUEST
    }
}

const getLevelSuccess=(payload)=>{
    return {
        type:types.GET_SCORE_SUCCESS,payload
    }
}

const getLevelFailure=()=>{
    return {
        type:types.GET_SCORE_REQUEST
    }
}



const getword=payload=>(dispatch)=>{
    dispatch(getWordRequest())
    axios.get(' https://api.api-ninjas.com/v1/randomword')
    .then((r)=>dispatch(getWordSuccess(r.data.word)))
    .catch((e)=>dispatch(getWordFailure(e)))
}

export {getNameRequest,getNameSuccess,getNameFailure,getScoreFailure,getScoreRequest,getScoreSuccess,getword,getLevelSuccess}