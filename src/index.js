import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostPage from './Post-page.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/'>
        <Routes >
            <Route path="/" element={<App></App>}/>
            <Route path="/post/:postID/" element={<PostPage></PostPage>}/>
        </Routes>
    </BrowserRouter>
);

