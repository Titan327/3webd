import React from "react";
import BookCell from "./BookCell";

function DisplayBook({Data}) {
    return (

        <div className="container">
            <div className="row">
                {Data.map(item => (
                    <BookCell key={item.id} bookLink={item.work}/>
                ))}
            </div>
        </div>

    );
}

export default DisplayBook;