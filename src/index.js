import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './Component/Body';
import {Provider} from "react-redux";
import appStore from './utils/appstore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={appStore}>
 <Body />
 </Provider>

);


