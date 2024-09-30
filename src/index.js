import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 라우터 코드 추가
import { BrowserRouter } from 'react-router-dom'

// 리덕스 코드 추가
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension'
import count from './modules/count';
import font from './modules/font';
import rootReducer from './modules';
 
// 스토어 생성
const store = createStore(rootReducer, devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
        <App />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
