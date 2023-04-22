const initialState = {
    vipcars: [],
    car: [],
    end: [],
    premium:[],
    wishList: localStorage.getItem('wishList')
    ? JSON.parse(localStorage.getItem('wishList'))
    : []
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_VIPCARS':
            return { ...state, vipcars: action.payload };
        case 'GET_ENDADV':
            return { ...state, end: action.payload };
        case 'GET_PREMIUM':
            return { ...state, premium: [...state.premium, ...action.payload] };
        case 'GET_CAR':
            return { ...state, car: action.payload}; 
        case 'ADD_WISHLIST':
            return { ...state, wishList: [action.payload, ...state.wishList] };
        case 'DELETE_FROM_WISHLIST':
            return {
                ...state,
                wishList: [
                    ...state.wishList.filter(
                    id => id !== action.payload
                    ),
                    ],
                };
        default:
            return state;
    }
   
};
