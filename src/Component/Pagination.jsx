import React, {useEffect, useState} from "react";
import {useNavigate,useLocation} from "react-router-dom";

function Pagination({nbOfPage}) {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const currentPage = params.get('page');

    const navigate = useNavigate();


    const currentUrl = new URL(window.location.href);

    const [pageParam, setPageParam] = useState(parseInt(currentUrl.searchParams.get('page') || '1', 10));

    useEffect(() => {
        currentUrl.searchParams.set('page', pageParam.toString());
        navigate(currentUrl.pathname + currentUrl.search);
    }, [pageParam]);

    /*
    const changePage = (pageNumber) => {
        setpageParam(pageNumber);
        currentUrl.searchParams.set('page', pageParam.toString());
        navigate(currentUrl.pathname + currentUrl.search);
    };
    */

    const handlePageClick = (pageNumber) => {
        if (pageNumber !== 0 || pageNumber > nbOfPage){
            setPageParam(pageNumber);
        }
    };

    console.log(currentPage);
    console.log(nbOfPage);


    let element;

    if (nbOfPage !== 0){
        if (currentPage <= 1) {

            element = (
                <>
                    <li className="page-item" onClick={() => handlePageClick(1)}>
                        <a className="page-link" href="" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam - 1)}>
                        <a className="page-link" href="" aria-label="Previous">
                            <span aria-hidden="true">&lt;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>

                    <li className="page-item" onClick={() => handlePageClick(1)}><a className="page-link" href=""style={{backgroundColor: "#4fba42",color: "white"}}>1</a></li>
                    <li className="page-item" onClick={() => handlePageClick(2)}><a className="page-link" href="">2</a></li>
                    <li className="page-item" onClick={() => handlePageClick(3)}><a className="page-link" href="">3</a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam + 1)}>
                        <a className="page-link" href="" aria-label="Next">
                            <span aria-hidden="true">&gt;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(nbOfPage)}>
                        <a className="page-link" href="" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </>
            );

        } else if (currentPage == nbOfPage) {
            element = (
                <>
                    <li className="page-item" onClick={() => handlePageClick(1)}>
                        <a className="page-link" href="" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam - 1)}>
                        <a className="page-link" href="" aria-label="Previous">
                            <span aria-hidden="true">&lt;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam - 1)}><a className="page-link"
                                                                                                href="">{pageParam - 1}</a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam)}><a className="page-link"
                                                                                            href="" style={{
                        backgroundColor: "#4fba42",
                        color: "white"
                    }}>{pageParam}</a></li>

                    <li className="page-item" onClick={() => handlePageClick(pageParam + 1)}>
                        <a className="page-link" href="" aria-label="Next">
                            <span aria-hidden="true">&gt;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(nbOfPage)}>
                        <a className="page-link" href="" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </>
            );
        } else {

            element = (
                <>
                    <li className="page-item" onClick={() => handlePageClick(1)}>
                        <a className="page-link" href="" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam - 1)}>
                        <a className="page-link" href="" aria-label="Previous">
                            <span aria-hidden="true">&lt;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam - 1)}><a className="page-link"
                                                                                                href="">{pageParam - 1}</a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam)}><a className="page-link"
                                                                                            href="" style={{
                        backgroundColor: "#4fba42",
                        color: "white"
                    }}>{pageParam}</a></li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam + 1)}><a className="page-link"
                                                                                                href="">{pageParam + 1}</a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(pageParam + 1)}>
                        <a className="page-link" href="" aria-label="Next">
                            <span aria-hidden="true">&gt;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                    <li className="page-item" onClick={() => handlePageClick(nbOfPage)}>
                        <a className="page-link" href="" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </>
            );

        }
    }


    return (

        <div className={"text-center"}>
            <nav className={"d-flex justify-content-center align-items-center"} style={{marginTop: "2em"}}>
                <ul className="pagination">

                    {element}

                </ul>

            </nav>
            <div>Total pages: {nbOfPage}</div>
        </div>


    );
}

export default Pagination;