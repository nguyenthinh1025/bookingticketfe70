import { combineReducers, createStore } from 'redux';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';
import { BaiTapChonGlassesReducer } from './BaiTapChonGlassesReducer';


const rootReducer = combineReducers({

    BaiTapDatVeReducer,
    BaiTapChonGlassesReducer,
});


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());