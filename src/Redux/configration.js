import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import MoviesReducer from '../Redux/reducers/moviesReducer';
import MovieDetailsReducer from '../Redux/reducers/movieDetailsReducer';




const reducers = combineReducers({
    //left name is used
    MoviesReducer:MoviesReducer,
    MovieDetailsReducer:MovieDetailsReducer
})

const store = createStore(reducers,applyMiddleware(thunk))


export {store}