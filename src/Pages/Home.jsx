import React, { useEffect, useState } from 'react';
import Header from "../Component/Header";
import DisplayBook from "../Component/DisplayBook";
import Footer from "../Component/Footer";
import '../Style/Home.css';

function Home() {
    const [news, setNews] = useState([]);

    const limitRes = "9";
    const eventSearh = '/add-book';
    //const eventSearh = '/update';
    //const eventSearh = '';

    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://openlibrary.org/recentchanges/${year}/${month}/${day}${eventSearh}.json?limit=${limitRes}&bot=false`);
                const json = await response.json();
                let data = json.map(tab => {
                    if (tab.changes[1]) {
                        return {
                            id: tab.id,
                            work: tab.changes[1].key
                        };
                    }
                }).filter(value => value !== undefined);
                setNews(data);
            } catch (error) {}
        };
        fetchData();
    },[]);

    return (
        <div>
            <Header/>
            <div className="banner" style={{overflow: "hidden", height: "300px"}}>
                <img src="/image/Home/banner2-modified.jpg" alt="Banner" className="img-fluid"/>

                <div className="banner-text">
                    <h1>Recently Added Book</h1>
                </div>
            </div>
            <DisplayBook Data={news}/>
            <Footer/>
        </div>
    );
}

export default Home;
