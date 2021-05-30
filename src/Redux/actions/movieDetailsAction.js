import axios from 'axios';
import * as types from '../Types';


// getMovieInfo = async () => {
//     try {
//         const response = await axios.get(`http://www.omdbapi.com/?apikey=af8d172c&i=${this.state.basicInfo.imdbID}`)
//         this.setState({ allInfo: response.data },
//             () => {
//                 console.log(this.state.allInfo.Ratings)
//             })
//     } catch (error) {
//         console.log(error)
//     }
// }


export const getMovieInfo = (item) => {
    //params from action creator 
    return async (dispatch, getState) => {

        // let { basicInfo } = getState().MovieDetailsReducer;

        try {
            let response = await axios.get(`http://www.omdbapi.com/?apikey=af8d172c&i=${item.imdbID}`)
             console.log(response)
            if (response.data.Response) {
                //console.log(response)
                dispatch({
                    type: types.DETAILS_SUCCESS,
                    allInfo: response.data,
                    basicInfo : item,
                    
                })
            } else {
                dispatch({
                    type: types.DETAILS_FAILED,
                    error:'error invalid request'
                })
            }
        } catch (error) {
            dispatch({
                type: types.DETAILS_FAILED,
                error : error
            })
        }
    }
}
