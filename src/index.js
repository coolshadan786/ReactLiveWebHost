import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Keep from './components/GoogleKeep/Keep';
import Context from './components/ContextAPI/Context';
import Effect from './components/UseEffect/Effect';
import Challenge_1 from './components/Challenge/Challenge_1';
import Api from './components/API Call/Api';
import Main from './components/ReactRouter/ReactRouter Main/Main';
import Main2 from './components/ReactRouter/UseParams/Main2';
import Main3 from './components/ReactRouter/LiveSearch/Main3';
import MainWeather from './components/WeatherApp/MainWeather';

// ReactDOM.render(<Keep />, document.getElementById('root'));

// Context API for multiple component
// ReactDOM.render(<Context />, document.getElementById('root'));

// Use of useEffect for what should do after component render the data
// ReactDOM.render(<Effect />, document.getElementById('root'));

// Use of useEffect for what should do after component render the data
// ReactDOM.render(<Challenge_1 />, document.getElementById('root'));

// Use of REACT API call using AXIOS for what data came after API hit by react and render the data
// ReactDOM.render( <Api />, document.getElementById( 'root' ) );

//Use of REACT Router for client-side render data without loading current page to another and render the data
// ReactDOM.render(
//   <BrowserRouter>
//     <Main />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
//Use of REACT Router (useParams) for client-side render data without loading current page to another and render the data
// ReactDOM.render(
//   <BrowserRouter>
//     <Main2 />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
//With use of REACT Router crate LiveSearch for client-side render data without loading current page to another and render the data
// ReactDOM.render(
//   <BrowserRouter>
//     <Main3 />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// Weather App using api call
ReactDOM.render(<MainWeather />, document.getElementById('root'));
