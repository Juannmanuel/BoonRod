import axios from "axios";
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const GET_PRODUCTS_IN_STOCK = "GET_PRODUCTS_IN_STOCK";
export const GET_PRODUCTS_WITH_DISCOUNT = "GET_PRODUCTS_WITH_DISCOUNT";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const UPDATE_PRODUCT_STOCK_BY_ID = "UPDATE_PRODUCT_STOCK_BY_ID";
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT";
export const DELETE_PRODUCT_BY_ID = "DELETE_PRODUCT_BY_ID";
export const SET_SCROLL_DIRECTION = 'SET_SCROLL_DIRECTION';
export const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION';
/*sections types*/
export const GET_ALL_SECTIONS = "GET_ALL_SECTIONS"
const path = "http://localhost:4000"
/*Trae todos los productos*/ 
export function getProductsByCategory(category) {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${path}/products`)
   

            dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: data })
        } catch (error) {
            console.log(error.message);
        }
    }
}
/*Actualiza el scroll*/
export function setScrollDirection(isScrollingUp) {

    
    return (dispatch) => {
        dispatch({ type: SET_SCROLL_DIRECTION, payload: isScrollingUp })
    };

}
export function setCurrentSection(section){

    
    return (dispatch) => {
        dispatch({ type: SET_CURRENT_SECTION, payload: section });
    };
};

/*Crear un nuevo producto*/
export function postNewProduct(product) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${path}/products`)

            
        } catch (error) {
            console.log(error.message);
        }
    }
}

export function getAllSections() {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${path}/sections`)
            dispatch({type: GET_ALL_SECTIONS, payload: data })
        } catch (error) {
            console.log(error.message);
        }
    }
}
export function getProductById(category) {
    return async (dispatch) => {
        try {

        } catch (error) {
            console.log(error.message);
        }
    }
}
export function updateProductStockById(productId, inStock) {
    return async (dispatch) => {
        try {

        } catch (error) {
            console.log(error.message);
        }
    }
}
