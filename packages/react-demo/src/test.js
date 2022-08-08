/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-08-08 15:12:53
 * @LastEditors: wxy
 * @LastEditTime: 2022-08-08 15:24:57
 */
import React from 'react'
import { connect } from 'react-redux'

const test = ({ testObj }) => {
  console.log(testObj, 'zhixinl');
  return (
    <>
      <div>{testObj.b}</div>
    </>
  )
}
const mapStateToProps = state => ({
  testObj: state.toJS().addObj
})
export default connect(mapStateToProps)(test)