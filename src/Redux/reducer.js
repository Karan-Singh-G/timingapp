 import * as types from "./actionType"
const intialstate={
    name:"",
    level:0,
    score:0,
    word:"",
    isLoading:false,
    isError:false
}


const reducer=(state=intialstate,action )=>{
  const {type,payload}=action;
  switch(type){
    case types.GET_NAME_REQUEST:
        return{
            ...state,
            isLaoding:true,
            isError:false,
            
        }
    case types.GET_NAME_SUCCESS:
      
        return{
            ...state,
            name:payload,
        
            isLaoding:true,
            isError:false,

        }
    case types.GET_NAME_FAILURE:
        return{
            ...state,
            isLaoding:false,
            isError:true,

        }


    case types.GET_WORD_REQUEST:
        return{
            ...state,
            isLaoding:true,
            isError:false,
            
        }
    case types.GET_WORD_SUCCESS:
      console.log(payload)
        return{
            ...state,
            word:payload,
            isLaoding:true,
            isError:false,

        }
    case types.GET_WORD_FAILURE:
        return{
            ...state,
            isLaoding:false,
            isError:true,

        }



        
    case types.GET_SCORE_REQUEST:
        return{
            ...state,
            isLaoding:true,
            isError:false,
            
        }
    case types.GET_SCORE_SUCCESS:
        console.log(payload)
        return{
            ...state,
            score:payload,
            isLaoding:true,
            isError:false,

        }
    case types.GET_SCORE_FAILURE:
        return{
            ...state,
            isLaoding:false,
            isError:true,

        }



        case types.GET_LEVEL_REQUEST:
            return{
                ...state,
                isLaoding:true,
                isError:false,
                
            }
        case types.GET_LEVEL_SUCCESS:
            console.log(payload)
            return{
                ...state,
                score:payload,
                isLaoding:true,
                isError:false,
    
            }
        case types.GET_LEVEL_FAILURE:
            return{
                ...state,
                isLaoding:false,
                isError:true,
    
            }


    default:
        return state
  }
}

export {reducer}