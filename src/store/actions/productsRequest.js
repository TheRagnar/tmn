export const SET_OPTIONS_LIST = 'SET_OPTIONS_LIST';

export const setOptionsList = (categoryId, optionId, optionsList) => {
  return dispatch => {
    let category = optionsList.find((cat => { return cat.categoryId === categoryId }));
    if (category) {
      if (category.value === optionId) {
        dispatch({
          type: SET_OPTIONS_LIST,
          payload: optionsList.filter(cat => { return cat.categoryId !== categoryId })
        })
      } else {
        dispatch({
          type: SET_OPTIONS_LIST,
          payload: optionsList.map(cat => { if(cat.categoryId === categoryId) { cat.value = optionId; return cat} else { return cat}  })
        })
      }
    } else {
      dispatch({
        type: SET_OPTIONS_LIST,
        payload: [...optionsList, {
          categoryId: categoryId,
          value: optionId
        }]
      })
    }
  }
}
/**
 * optionsList = [
  * {
    * categoryId: 1,
    * value: 1
  * }
 * ]
 */