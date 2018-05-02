// import * as actionTypes from '../constants/userinfo'

const initialState = []

export default function store (state = initialState, action) {
   switch (action.type) {
        case "STORE_UPDATE":
            return action.data
        case "STORE_ADD":
        	let rstate = state;
        	rstate.unshift(action.data)
            return rstate
        case "STORE_REMOVE":
        	return state.filter(item => {
        		if(item.id !== action.data.id){
        			return item
        		}
        	})
        default:
            return state
    }
}