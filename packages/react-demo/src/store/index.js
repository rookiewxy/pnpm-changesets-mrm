/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-08-08 11:52:30
 * @LastEditors: wxy
 * @LastEditTime: 2022-08-08 14:42:15
 */
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer);
export default store