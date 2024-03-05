import React, {useEffect, useState} from "react";

function BookInfo({bookData,wikiText}) {
    const [idCover, setIdCover] = useState([]);
    const [author, setAuthor] = useState(["No author info... Yet !"]);
    const [scores, setScores] = useState([]);
    const [read, setRead] = useState([]);


    useEffect(() => {
        const getCoversImg = async () => {
            try {
                setIdCover(bookData.covers[0]);
            } catch (error) {}

        };
        const fetchAuthor = async () => {
            try {
                const response = await fetch(`https://openlibrary.org${bookData.authors[0].author.key}.json`);
                const json = await response.json();
                const res = json.bio.value;
                setAuthor(res);
            } catch (e) {}
        };

        const fetchScore = async () => {
            try {
                if (bookData.key){
                    const response = await fetch(`https://openlibrary.org${bookData.key}/ratings.json`);
                    let json = await response.json();
                    json = json.summary;

                    let tabData = [];
                    for (const key in json) {

                        if (json[key]){
                            const label = key.replace(/_/g, " ");
                            const row = (
                                <tr key={key}>
                                    <td>{label}</td>
                                    <td>{json[key]}</td>
                                </tr>
                            );
                            tabData.push(row);
                        }else {
                            const label = key.replace(/_/g, " ");
                            const row = (
                                <tr key={key}>
                                    <td>{label}</td>
                                    <td>0</td>
                                </tr>
                            );
                            tabData.push(row);
                        }
                    }
                    setScores(tabData);
                }
            } catch (e) {}
        };

        const fetchRead = async () => {
            try {
                if (bookData.key){
                    const response = await fetch(`https://openlibrary.org${bookData.key}/bookshelves.json`);
                    let json = await response.json();
                    json = json.counts;

                    let tabData = [];
                    for (const key in json) {

                        if (json[key]){
                            const label = key.replace(/_/g, " ");
                            const row = (
                                <tr key={key}>
                                    <td>{label}</td>
                                    <td>{json[key]}</td>
                                </tr>
                            );
                            tabData.push(row);
                        }else {
                            const label = key.replace(/_/g, " ");
                            const row = (
                                <tr key={key}>
                                    <td>{label}</td>
                                    <td>0</td>
                                </tr>
                            );
                            tabData.push(row);
                        }
                    }
                    setRead(tabData);
                }
            } catch (e) {}
        };

        fetchRead();
        fetchScore();
        fetchAuthor();
        getCoversImg();
    },[bookData]);


    const link = `https://fr.wikipedia.org/wiki/${bookData.title}`;

    return (

        <div className="row" style={{margin:"2em"}}>
            <div className="col-lg-5 col-md-5 col-sm-6">
                <div className="white-box text-center">
                    <img src={`https://covers.openlibrary.org/b/id/${idCover}-L.jpg`} className="img-responsive" alt="Rounded Chair"/>
                </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-6">
                <h4 className="box-title mt-5">Summary</h4>
                <p>
                    {bookData.description && bookData.description.value ? bookData.description.value : "No description... Yet !"}
                </p>
                <h4 className="box-title mt-5">Wikipedia Info</h4>
                <p>
                    {wikiText}
                    <br/>
                    <a href={link}>{link}</a>

                </p>
                <h4 className="box-title mt-5">Author</h4>
                <p>
                    {author}
                </p>

            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <h3 className="box-title mt-5">Reader note</h3>
                <div className="table-responsive">
                    <table className="table table-striped table-product">
                        <tbody>
                            {scores}
                        </tbody>
                    </table>
                </div>
                <h3 className="box-title mt-5">User reading</h3>
                <div className="table-responsive">
                    <table className="table table-striped table-product">
                        <tbody>
                            {read}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default BookInfo;
