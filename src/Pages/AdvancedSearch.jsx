import React, { useEffect, useState } from 'react';
import Header from "../Component/Header";
import DisplayBook from "../Component/DisplayBook";
import Footer from "../Component/Footer";
import '../Style/Home.css';
import {useLocation} from "react-router-dom";
import BookCell from "../Component/BookCell";
import Spinner from "../Component/Spinner";
import Pagination from "../Component/Pagination";

function Search() {

    const limit = 9;

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const [nbPages, setnbPages] = useState();


    let author = "";
    let subject = "";
    let title = "";
    let publishYear = "";
    let lang = "";
    let publisher = "";

    if (params.get('author')){
        author = author.replace(/\+/g, "_");
        author = "author="+params.get('author')+"&";
    }
    if (params.get('subject')){
        subject = "subject="+params.get('subject')+"&";
    }
    if (params.get('title')){
        title = "title="+params.get('title')+"&";
    }
    if (params.get('publishYear')){
        publishYear = "publishYear="+params.get('publishYear')+"&";
    }
    if (params.get('lang')){
        lang = "lang="+params.get('lang')+"&"
    }
    if (params.get('publisher')){
        publisher = "publisher="+params.get('publisher')+"&"
    }


    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://openlibrary.org/search.json?${author}${subject}${title}${publishYear}${lang}${publisher}limit=${limit}`);
                const json = await response.json();
                setnbPages(Math.ceil(json.numFound / limit));;
                const tmp_res = json.docs
                let data = tmp_res.map(tab => {
                    return {
                        key: tab._version_,
                        work: tab.key
                    };
                });
                setNews(data);
            } catch (error) {

            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    /*<label htmlFor="title" className="form-label me-2" style={{fontSize: "1.5rem"}}>Title:</label>*/

    return (
        <div>
            <Header/>
            <div className="banner" style={{overflow: "hidden", height: "300px"}}>
                <img src="/image/Home/banner2-modified.jpg" alt="Banner" className="img-fluid"/>

                <div className="banner-text" style={{width: "75%"}}>
                    <form className="col col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" action="/advanced-search" method="GET">

                        <div className="row">
                            <div className="col" style={{margin: "5px"}}>
                                <div className="form-group d-flex align-items-center">
                                    <input type="text" name="author" className="form-control form-control-dark"
                                           placeholder="Author..." aria-label="author"
                                           style={{fontSize: "0.90rem"}}/>
                                </div>
                            </div>
                            <div className="col" style={{margin: "5px"}}>
                                <div className="form-group d-flex align-items-center">
                                    <input type="text" name="subject" className="form-control form-control-dark"
                                           placeholder="Subject..." aria-label="subject"
                                           style={{fontSize: "0.90rem"}}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col" style={{margin: "5px"}}>
                                <div className="form-group d-flex align-items-center">
                                    <input type="text" name="title" className="form-control form-control-dark"
                                           placeholder="Title..." aria-label="title"
                                           style={{fontSize: "0.90rem"}}/>
                                </div>
                            </div>

                            <div className="col" style={{margin: "5px"}}>
                                <div className="form-group d-flex align-items-center">
                                    <input type="text" name="publishYear" className="form-control form-control-dark"
                                           placeholder="Publish year..." aria-label="publishYear"
                                           style={{fontSize: "0.90rem"}}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col" style={{margin: "5px"}}>
                                <div className="form-group d-flex align-items-center">
                                    <input type="text" name="lang" className="form-control form-control-dark"
                                           placeholder="Langue..." aria-label="lang"
                                           style={{fontSize: "0.90rem"}}/>
                                </div>
                            </div>

                            <div className="col" style={{margin: "5px"}}>
                                <div className="form-group d-flex align-items-center">
                                    <input type="text" name="publisher" className="form-control form-control-dark"
                                           placeholder="Publisher..." aria-label="publisher"
                                           style={{fontSize: "0.90rem"}}/>
                                </div>
                            </div>
                        </div>

                        <div className="col" style={{margin: "5px"}}>
                            <button type="submit" className="btn btn-primary">Advanced search</button>
                        </div>
                    </form>
                </div>

            </div>
            {loading ? <Spinner/> : <DisplayBook Data={news}/>}
            <Pagination nbOfPage={nbPages}/>
            <Footer/>
        </div>
    );
}

export default Search;
