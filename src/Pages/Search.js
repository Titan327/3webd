import React, { useEffect, useState } from 'react';
import Header from "../Component/Header";
import DisplayBook from "../Component/DisplayBook";
import Footer from "../Component/Footer";
import '../Style/Home.css';
import {useLocation} from "react-router-dom";

function Search() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchTerm = params.get('q');

    const [news, setNews] = useState([]);

    return (
        <div>
            {searchTerm}
            <Header/>
            <div className="banner" style={{overflow: "hidden", height: "300px"}}>
                <img src="/image/Home/banner2.jpg" alt="Description de l'image" className="img-fluid"/>

                <div className="banner-text">
                    <h1>Recently Added Book</h1>
                </div>
            </div>
            <DisplayBook Data={news}/>
            <Footer/>
        </div>
    );
}

export default Search;
