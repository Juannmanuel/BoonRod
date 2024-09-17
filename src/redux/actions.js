export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const GET_PRODUCTS_IN_STOCK = "GET_PRODUCTS_IN_STOCK";
export const GET_PRODUCTS_WITH_DISCOUNT = "GET_PRODUCTS_WITH_DISCOUNT";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const UPDATE_PRODUCT_STOCK_BY_ID = "UPDATE_PRODUCT_STOCK_BY_ID";
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT";
export const DELETE_PRODUCT_BY_ID = "DELETE_PRODUCT_BY_ID";
import axios from "axios";

const path = "http://localhost:4000"

export function getProductsByCategory(category) {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${path}/products`)
            console.log(data);
            
            dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: data })
        } catch (error) {
            console.log(error.message);
        }
    }
}
export function getProductsInStock(category) {
    return async (dispatch) => {
        try {

        } catch (error) {
            console.log(error.message);
        }
    }
}
export function getProductsWithDiscount(category) {
    return async (dispatch) => {
        try {

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
