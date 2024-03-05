import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Book from "./Pages/Book";
import BookInfo from "./Component/BookInfo";
import AdvancedSearch from "./Pages/AdvancedSearch";
import Error404 from "./Pages/Error404";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/book" element={<Book/>} />
                <Route path="/Advanced-search" element={<AdvancedSearch/>} />
                <Route path='*' element={<Error404/>} />
            </Routes>
        </Router>
    );
}

export default App;