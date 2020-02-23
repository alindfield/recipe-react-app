import methodtype from '../../common/methodtypes';
import {updateObject} from '../../common/utilities';
import {callAPI} from '../common';
import * as types from '../types';

const initialState = {
    units: {}
}

const start = (state) => {
    return updateObject(state, {loading: true});
};

const success = (state, action) => {
    if (action.units !== undefined && action.units !== null) {
        return updateObject(state, {units : {list: action.units, loading: false}});
    }
    return state;
};

const fail = (state) => {
    return updateObject(state, {});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.lookup.START: return start(state);
        case types.lookup.SUCCESS: return success(state, action);
        case types.lookup.FAIL: return fail(state);
        default: return state;
    };
};

export default reducer;

export const getUnits = () => {
    return dispatch => {
        const url = "/rcp/app/sync/unit";        
        callAPI(dispatch, url, methodtype.GET, null, types.lookup, {action: response => {return {units: response.data}}});
    };
};