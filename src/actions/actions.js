export const REQUEST_POST = "REQUEST_POST";
export const RECEIVE_POST = "RECEIVE_POST";

export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const doPlus = () => (
    {
        type: INCREASE,
    }
)

export const doMinuse = () => (
    {
        type: DECREASE,
    }
)

function requestPosts() {
    console.log('request');
    return {
        type: REQUEST_POST,
    }
}

function receivePosts(val) {
    return {
        type: RECEIVE_POST,
        isIncrease:val
    }
}

export function asyncIncrease() {
    return dispatch => {
        dispatch(requestPosts());
        return new Promise(resolve => {
            setTimeout( () => {
                resolve(doPlus());
            }, 1000)
        }).then( (val) => {
            dispatch(receivePosts(val));
        })
    }
}

export function asyncDecrease() {
    return dispatch => {
        dispatch(requestPosts());
        return new Promise(resolve => {
            setTimeout( () => {
                resolve(doMinuse());
            }, 1000)
        }).then( (val) => {
            dispatch(receivePosts(val));
        })
    }
}

