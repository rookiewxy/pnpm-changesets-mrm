/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-08-08 11:15:04
 * @LastEditors: wxy
 * @LastEditTime: 2022-08-08 15:15:21
 */
import './App.css';
import store from './store/index';
import { setAdd } from './actionCreators'
import Test from './test'
import { Provider } from 'react-redux'

function App () {

  const onClick = () => {
    store.dispatch(setAdd({ a: 3 }))
  }

  return (
    <Provider store={store}>
      <div className="App">
        <button onClick={onClick}>click</button>
      </div>
      <Test />
    </Provider>
  );
}

export default App;
