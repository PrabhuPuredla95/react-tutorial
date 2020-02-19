import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';
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
        dispatch({type: 'FETCH_POSTS',payload: response.data})
    }
};
//memoisation
// export const fetchUser =(id) => dispatch =>{
//     _fetchUser(id,dispatch)
// }
// const _fetchUser = _.memoize(async (id, dispatch) =>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response})
// });

export const fetchUser =(id) =>async dispatch =>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response})
};

export const fetchPostsAndUsers = () =>async (dispatch, getState) =>{
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)))
}
