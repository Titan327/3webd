import React, {useEffect, useState} from "react";
import '../Style/bookCell.css';

function BookCell({bookLink}) {

    const [book, setBook] = useState([]);
    const [bookId, setBookId] = useState(["#"])

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (bookLink.includes("works")){
                    const response = await fetch(`https://openlibrary.org${bookLink}.json`);
                    const json = await response.json();
                    setBook(json);
                    if (json.works){
                        setBookId(json.works[0].replace("/works/", ''));
                    }else {
                        setBookId(json.key.replace("/works/", ''));
                    }
                }
            } catch (error) {}
        };
        fetchData();
    },[bookLink]);


    return (

        <div className="col-md-4 mt-3">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={`https://covers.openlibrary.org/b/id/${book.covers}-M.jpg`} style={{ objectFit: 'cover', width: '100%', height: '200px' }} alt="Card image"/>
                <div className="card-body">
                    <h5 className="card-title title">{book.title ? book.title : "No tittle"}</h5>
                    <p className="card-text description">{book.description && book.description.value ? book.description.value : "No description... Yet !"}</p>
                    <a href={`/Book?id=${bookId}`} className="btn btn-primary">See more</a>
                </div>
            </div>
        </div>

    );
}

export default BookCell;