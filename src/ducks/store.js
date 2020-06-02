import {createStore} from 'redux'
import moviesReducer from './reducers/movieReducer'
import {devToolsEnhancer} from 'redux-devtools-extension'

export default createStore(moviesReducer, devToolsEnhancer());