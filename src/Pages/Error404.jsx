import React from 'react';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import '../Style/Home.css';


function Error404() {

    return (
        <div>
            <Header/>
                <div style={{display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop:"3rem",
                    marginBottom:"1rem",
                }}>
                    <img src="/image/bookshelf.jpg" alt="tkt" className="centered-image" style={{width:"55%",height:"auto"}}/>
                    <h1>404 - Page not found</h1>
                    <p>Sorry, the page you are looking for does not exist.</p>
                </div>
            <Footer/>
        </div>
    );
}

export default Error404;
