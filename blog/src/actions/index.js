import jsonPlaceholder from "../apis/jsonPlaceholder";
// export const fetchPosts = () => {
//     //Bad approach. sol: use redux-thunk
//     // with below approach, we are not returning object because of async await(try in babeljs.io)
//     const promise = jsonPlaceholder.get('/posts');
//
//     // using promise will always return a action object,
//     //but api response does not come before our reducers process this action
//     return {
//         type: 'FETCH_POSTS',
//         payload: promise
//     }
// };

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS',payload: response})
    }
};
