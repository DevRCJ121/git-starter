import {INCREASE, DECREASE, REQUEST_POST, RECEIVE_POST} from "../actions/actions"

const defaultState= {
    count: 0
}

const asyncInit = {
    isIncrement: INCREASE,
    isFetching: false,
    count: 0
}
function asyncReducer(state = asyncInit, action) {
    switch(action.type) {
        case REQUEST_POST:            
            return {...state, 
                isFetching: true
            }
        case RECEIVE_POST:
            if(action.isIncrement == INCREASE)
            console.log(state)                
                return {
                    isFetching: false,
                    count: state.count + 1
                }
        case RECEIVE_POST:
            if(action.isIncrement == DECREASE)
                return {
                    isFetching: false,
                    count: state.count - 1
                }
      default:
        return asyncInit;
    }
  }

  export default asyncReducer;