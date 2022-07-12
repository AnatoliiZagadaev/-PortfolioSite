/* eslint-disable default-param-last */
/* eslint-disable no-console */
import * as actionTypes from './actionType';

const initialState = {
  products: null,
  loading: false,
  error: null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_TABLE_REQUEST:
      console.log('testing');
      return {
        ...state,
        loading: true
      };
    case actionTypes.PRODUCT_TABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    case actionTypes.PRODUCT_TABLE_FAIL:
      return {
        ...state,
        error: 'SOMETHING WENT WRONG',
        loading: false
      };
    default:
      return state;
  }
};

export default productReducer;
