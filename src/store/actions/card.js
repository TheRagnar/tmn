export const ADD_TOVAR = 'ADD_TOVAR';
export const REMOVE_TOVAR = 'REMOVE_TOVAR';
export const EDIT_TOVAR = 'EDIT_TOVAR';
export const CLEAR_TOVAR = 'CLEAR_TOVAR';

export const addTovar = (prd, count, products) => {
  if(hasProduct(products, prd.id)) {
    return dispatch => {
      dispatch({
        type: EDIT_TOVAR,
        payload: products.map(product => { if (product.id === prd.id) { product.count = count } return product })
      })
    }
  } else {
    return dispatch => {
      dispatch({
        type: ADD_TOVAR,
        payload: {
          id: prd.id,
          count: count,
          prd: prd
        }
      })
    }
  }
}


export const removeTovar = (prd, products) => {
  return dispatch => {
    dispatch({
      type: REMOVE_TOVAR,
      payload: products.filter(product => { return product.id !== prd.id; })
    })
  }
}

export const editTovar = (prd, newCount, products) => {
  return dispatch => {
    dispatch({
      type: EDIT_TOVAR,
      payload: products.map(product => { if (product.id === prd.id) { product.count = newCount } return product })
    })
  }
}


export const clearTovar = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_TOVAR,
    })
  }
}


const hasProduct = (products, id) => {
  return products.find(product => {return product.id === id})
}