import * as actions from "./MovieConst"
import {fetchMoviesUrl} from "../api"
import axios from "axios"

export function fetchAPI(){
    return(async(dispatch)=>{
        try{
            dispatch({type:actions.fetchRequest});
            const result=await axios.get(fetchMoviesUrl);
            dispatch({type:actions.fetchRequestSuccess,payload:result.data.results})
        }catch(error){
            dispatch({type:actions.fetchRequestFail,payload:error.message})
        }
    })
    
}
export function addToFavorite(movie){
    return(
        async(dispatch)=>{
                dispatch({type:actions.addToFavorite,payload:movie})
        }
    )
}
export function removeFromFavourite(movie){
    return(
        async (dispatch,getState)=>{
            const { favourite } = getState().movies;
            const filtredFavourite = favourite.filter(fav => fav.id !== movie.id);
            console.log(filtredFavourite);
        
            dispatch({ type: actions.removeFavorite, payload: filtredFavourite });
        }
    )
}