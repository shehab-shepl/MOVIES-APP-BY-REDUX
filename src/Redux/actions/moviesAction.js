import axios from 'axios';
import * as types from '../Types';

//params from screen
export const fetchMovies = () => {
    //params from action creator 
    return async (dispatch, getState) => {

        let { PageIndex, searchName  } = getState().MoviesReducer;

        try {
            let response = await axios.get(`http://www.omdbapi.com/?apikey=af8d172c&s=${searchName}&page=${PageIndex}`)
            console.log(response)
            if (response.data.Response) {
                //console.log(response)
                dispatch({
                    type: types.FETCH_MOVIES_SUCCESS,
                    movies: response.data.Search,
                    records: response.data.totalResults,
                })
            } else {
                dispatch({
                    type: types.FETCH_MOVIES_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: types.FETCH_MOVIES_FAILED
            })
        }
    }
}


export const getMovies = () => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_MOVIES_STARTED
        })
        //to fire action from another action use dispatch(action())
        dispatch(fetchMovies())
    }
}

export const refreshMovies = () => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_MOVIES_REFRESH
        })
        //to fire action from another action use dispatch(action())
        dispatch(fetchMovies())
    }
}

export const paginateMovies = () => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_MOVIES_PAGINATE
        })
        //to fire action from another action use dispatch(action())
        dispatch(fetchMovies())
    }
}

export const changePropMovies = ( prop , value ) => {
    return {
        type: types.MOVIES_CHANGE_PROPS,
        prop:prop,
        value
    }
}

