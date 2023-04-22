import axios from 'axios';

export const getVipcars = () =>async dispatch => {
    await axios
        .get(
            `http://localhost:3001/vipcars`
        )
        .then(res =>  dispatch({ type: 'GET_VIPCARS', payload: res.data }));

};
export const getEndadv = () =>async dispatch => {
    await axios
        .get(
            `http://localhost:3001/end`
        )
        .then(res =>  dispatch({ type: 'GET_ENDADV', payload: res.data }));

};
export const getPremium = (page) =>async dispatch => {
    await axios
        .get(
            `http://localhost:3001/premium?_page=${page}&_limit=8`
        )
        .then(res =>  dispatch({ type: 'GET_PREMIUM', payload: res.data }));

};
export const getCar = (id, category) => async dispatch => {
    await axios
        .get(
            `http://localhost:3001/${category}/${id}`
        )
        .then(res => dispatch({ type: 'GET_CAR', payload: res.data }));
};
export const addWishList = id => {
    return {
        type: 'ADD_WISHLIST',
        payload: id,
    };
};

export const deleteWishList = id => {
    return {
        type: 'DELETE_FROM_WISHLIST',
        payload: id,
    };
};
