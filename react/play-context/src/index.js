/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QuizApp from './quiz-app/QuizApp';
import TaskApp from './task-app/TaskApp'
import HoverList from './hover-list/HoverList';
import FilterList from './filter-list/FilterList';
import reportWebVitals from './quiz-app/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
