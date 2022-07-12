import axios from 'axios';
import * as actionTypes from './actionType';

export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_TABLE_REQUEST });
    const { data } = await axios.get('https://fakestoreapi.com/products/');
    dispatch({ type: actionTypes.PRODUCT_TABLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.PRODUCT_TABLE_FAIL });
  }
};
// https://fakestoreapi.com/products/
export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_TABLE_REQUEST });
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({ type: actionTypes.PRODUCT_TABLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.PRODUCT_TABLE_FAIL });
  }
};
