import * as types from '../Types';

const initialState = {
    basicInfo: {},
    allInfo: {}
};


const MovieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DETAILS_SUCCESS:
            return {
                ...state,
                basicInfo: action.basicInfo,
                allInfo: action.allInfo
            }
        case types.DETAILS_FAILD:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}


export default MovieDetailsReducer;