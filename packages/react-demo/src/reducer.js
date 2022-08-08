/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-08-08 14:44:53
 * @LastEditors: wxy
 * @LastEditTime: 2022-08-08 15:26:19
 */
import { fromJS } from 'immutable';
const defaultState = fromJS({
  addObj: {
    a: 1,
    b: 1,
  },
  delObj: {}
})

const actionTypes = {
  ADD: 'add',
  DELETE: 'delete'
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return state.set('addObj', {
        a: 2,
        b: 1
      })
    case actionTypes.DELETE:
      return state.delObj = {
        ...state,
        b: 2
      }
    default:
      return state;
  }
}
