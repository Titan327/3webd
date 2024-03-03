import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Book from "./Pages/Book";
import BookInfo from "./Component/BookInfo";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/book" element={<Book/>} />
            </Routes>
        </Router>
    );
}

export default App;