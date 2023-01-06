import * as actions from "./MovieConst"

export default function movieReducer(state={movies:[],favorite:[]},action){

    switch(action.type){
        case actions.fetchRequest:
            return{
                ...state,loading:false,
            }
        case actions.fetchRequestSuccess:
            return{
                ...state,loading:true,movies:action.payload
            }
        case actions.fetchRequestFail:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case actions.addToFavorite:
            return{
                ...state,favorite:[...state.favorite,action.payload]
            }
        case actions.removeFavorite:
            return{
                ...state,
                favorite:action.payload
            }
        default:
            return state
    }
}

