import React from 'react';

function Footer(){
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-left border-bottom pb-3 mb-3">
                    <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
                    <li><a href="/filter" className="nav-link px-2 text-secondary">Advanced search</a></li>
                </ul>
                <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
            </footer>
        </div>
    );

}

export default Footer;