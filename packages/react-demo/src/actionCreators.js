/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-08-08 14:57:51
 * @LastEditors: wxy
 * @LastEditTime: 2022-08-08 14:58:32
 */

export const setAdd = (data) => ({
  type: 'add',
  data
});

export const setDel = (data) => ({
  type: 'delete',
  data
})
