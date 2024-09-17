import { GET_PRODUCTS_BY_CATEGORY } from "./actions";

const initialState = {
    products: [],
    sections: []
};


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS_BY_CATEGORY: 
        return {
            ...initialState, 
            products: action.payload
        }
    }
    return state;
};

export default rootReducer;