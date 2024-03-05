import React from "react";
import BookCell from "./BookCell";

function DisplayBook({Data}) {
    let newData = Data.filter(obj => obj.work.includes('work'));
    return (

        <div className="container m-auto">
            <div className="row" style={{marginLeft:"2em"}}>
                {newData.map(item => (
                    <BookCell key={item.id} bookLink={item.work}/>
                ))}
            </div>
        </div>

    );
}

export default DisplayBook;