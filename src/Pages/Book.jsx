import React, { useEffect, useState } from 'react';
import Header from "../Component/Header";
import DisplayBook from "../Component/DisplayBook";
import Footer from "../Component/Footer";
import '../Style/Home.css';
import { useLocation } from "react-router-dom";
import BookInfo from "../Component/BookInfo";

function Book() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const book = params.get('id');

    const [bookData, setBookData] = useState([]);
    const [wikiText, setWikiText] = useState([]);

    useEffect(() => {
        // Fonction pour récupérer la liste des utilisateurs
        const fetchUsers = async () => {
            try {
                const response = await fetch(`https://openlibrary.org/works/${book}.json`);
                const json = await response.json();
                setBookData(json)
            } catch (error) {
                console.error('Erreur : ', error);
            }
        };
        fetchUsers();
    }, []);


    useEffect(() => {
        // Vérifier si bookData.title est défini avant de manipuler bookData.title
        if (bookData.title) {
            const titleWiki = bookData.title.replace(/ /g, "_");
            const fetchWiki = async () => {
                try {
                    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${titleWiki}`);
                    const json = await response.json();
                    setWikiText(json)
                } catch (e) {
                }
            };
            fetchWiki();
        }
    }, [bookData]);

    return (
        <div>
            <Header/>
            <div className="banner" style={{overflow: "hidden", height: "300px"}}>
                <img src="/image/Home/banner2-modified.jpg" alt="Banner" className="img-fluid"/>

                <div className="banner-text">
                    <h1>{bookData.title}</h1>
                </div>
            </div>
            <BookInfo bookData={bookData} wikiText={wikiText.extract}/>
            <Footer/>
        </div>
    );
}

export default Book;
