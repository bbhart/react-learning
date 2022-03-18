import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

function App() {
  return ( 
    <BrowserRouter>
      <div classname="App">
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/article" element={<ArticlePage />} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
