import * as types from '../Types';

const initialState = {
    Movies: [],
    PageLoading: false,
    PageError: false,
    PageRefresh: false,
    PagePaginate: false,
    MoreData: true,
    PageIndex: 1,
    searchName: ''
}


const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIES_SUCCESS:
            return {
                ...state, Movies: state.PageRefresh ? action.movies : [...state.Movies, ...action.movies], PageError: false, PageLoading: false, PageRefresh: false, PagePaginate: false,
                MoreData: (state.Movies.length + action.movies.length) >= action.records ? false : true
            }
        case types.FETCH_MOVIES_FAILED:
            return {
                ...state, PageError: true, PageLoading: false, PageRefresh: false, PagePaginate: false
            }
        case types.FETCH_MOVIES_STARTED:
            return {
                ...state, PageLoading: true,
                Movies: [],
                PageError: false,
                PageRefresh: false,
                PagePaginate: false,
                MoreData: true,
                PageIndex: 1,
                //...initialState
            }
        case types.FETCH_MOVIES_REFRESH:
            return {
                ...state, PageRefresh: true, PageError: false, PageIndex: 1
            }
        case types.FETCH_MOVIES_PAGINATE:
            return {
                ...state, PagePaginate: true, PageIndex: state.PageIndex + 1

            }
        case types.MOVIES_CHANGE_PROPS:
            return {
                ...state, [action.prop]: action.value 

            }
        default:
            return state;
    }
}

export default MoviesReducer;