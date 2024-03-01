import React from "react";
import BookCell from "./BookCell";

function DisplayBook() {
    return (

        <div className="container">
            <div className="row">
                <BookCell/>
                <BookCell/>
                <BookCell/>
                <BookCell/>
                <BookCell/>
                <BookCell/>
            </div>
        </div>

    );
}

export default DisplayBook;