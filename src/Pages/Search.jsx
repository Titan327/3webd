import React, { useEffect, useState } from 'react';
import Header from "../Component/Header";
import DisplayBook from "../Component/DisplayBook";
import Footer from "../Component/Footer";
import '../Style/Home.css';
import {useLocation} from "react-router-dom";
import BookCell from "../Component/BookCell";
import Spinner from "../Component/Spinner";

function Search() {

    const limit = 9;

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchTerm = params.get('q');
    const page = params.get('page');

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://openlibrary.org/search.json?title=${searchTerm}&limit=${limit}&page=${page}`);
                const json = await response.json();
                const tmp_res = json.docs
                let data = tmp_res.map(tab => {
                    return {
                        key : tab._version_,
                        work: tab.key
                    };
                });
                setNews(data);
            } catch (error) {

            }finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    return (
        <div>
            <Header/>
            <div className="banner" style={{overflow: "hidden", height: "300px"}}>
                <img src="/image/Home/banner2-modified.jpg" alt="Banner" className="img-fluid"/>

                <div className="banner-text">
                    <h1>Result for: {searchTerm}</h1>
                </div>
            </div>
            {loading ? <Spinner /> : <DisplayBook Data={news}/>}
            <Footer/>
        </div>
    );
}

export default Search;
