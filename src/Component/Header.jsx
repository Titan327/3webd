import React from 'react';
function Header() {

    const Search = (event) => {
        event.preventDefault();
        const searchTerm = event.target.elements.input.value;
        window.location.href = `/test?s=${searchTerm}`;
    };

    return (

        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src="/image/logo.png" alt="Description de l'image"
                             style={{width: '55px', height: '55px'}}/>
                    </a>

                    <ul className="nav col-12 col-lg-auto mx-auto mb-2 mb-md-0 justify-content-center">
                        <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
                        <li><a href="/filter" className="nav-link px-2 text-white">Advanced search</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" action="/src/Pages/Search" method="GET">
                        <div className="input-group">
                            <input name="q" type="search" className="form-control form-control-dark"
                                   placeholder="Search..." aria-label="Search"/>
                            <button className="btn btn-outline-secondary" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </header>
    );
}

export default Header;