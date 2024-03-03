import React from "react";
import BookCell from "./BookCell";

function DisplayBook({Data}) {
    console.log(Data);
    let newData = Data.filter(obj => obj.work.includes('work'));
    return (

        <div className="container">
            <div className="row">
                {newData.map(item => (
                    <BookCell key={item.id} bookLink={item.work}/>
                ))}
            </div>
        </div>

    );
}

export default DisplayBook;