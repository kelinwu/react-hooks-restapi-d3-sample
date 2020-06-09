import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Context from './context';
import reducer from './reducer';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  const initialState = useContext(Context)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <Route path="/" component={App} />
      </Context.Provider>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
