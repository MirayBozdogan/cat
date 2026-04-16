
import Navbar from './Navbar';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';




function SearchCats() {

    const [cat, setCat] = useState([]);
    const navigate = useNavigate();
    const [limit, setLimit] = useState(5);
    const [theme, setTheme] = useState("All");
    const [size, setSize] = useState(512);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchSearchCat = () => {
    setLoading(true);
    setError(null);

    fetch(`https://api.ai-cats.net/v1/cat/search?limit=${limit}&size=${size}&theme=${theme}&descending=false`)
        .then((response) => response.json())
        .then((data) => {
            setCat(data);
        })
        .catch(() => {
            setError("Failed to fetch cats. Please try again.");
        })
        .finally(() => {
            setLoading(false);
        });
};



    useEffect(() => {
        fetchSearchCat();

    }, []);





    return (
        <div className="form container text-center d-flex align-items-center flex-column" style={{ width: "100%" }}>
            <Navbar />

            <h1 style={{ marginTop: "40px", marginBottom: "30px", color: "#3d39f3" }}>Search Cats</h1>

            <form className="row gy-2 gx-3 align-items-center" style={{ color: "#3d39f3" }}>
                <div className="col-auto"
                >
                    <label htmlFor="autoSizingInput" >Query</label>
                    <input type="text" className="form-control" id="autoSizingInput" placeholder="Query" style={{ backgroundColor: "#3d39f3", color: "white", border: "1px solid #3d39f3" }} />
                </div>
                <div className="col-auto">
                    <label htmlFor="limitselect">Limit</label>
                    <select className="form-select"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                        id="limitselect"
                        style={{ backgroundColor: "#3d39f3", color: "white", border: "1px solid #3d39f3" }}

                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>

                    </select>
                </div>
                <div className="col-auto">
                    <label htmlFor="homeselect">Theme</label>
                    <select className="form-select"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)} id="homeselect"
                        style={{ backgroundColor: "#3d39f3", color: "white", border: "1px solid #3d39f3" }} >
                        <option value="All">All</option>
                        <option value="Halloween">Halloween</option>
                        <option value="Winter">Winter</option>
                        <option value="Xmas">Xmas</option>
                        <option value="NewYear">NewYear</option>
                    </select>
                </div>
                <div className="col-auto">
                    <label htmlFor="sizeselect">Size</label>
                    <select className="form-select"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        id="sizeselect"
                        style={{ backgroundColor: "#3d39f3", color: "white", border: "1px solid #3d39f3" }}>

                        <option value="1024">1024</option>
                        <option value="512">512</option>
                        <option value="256">256</option>
                        <option value="128">128</option>
                        <option value="64">64</option>
                    </select>

                </div>
                <div className="col-auto " style={{ alignSelf: "flex-end" }}>
                    <button type="button" className="btn btn-outline-primary" onClick={fetchSearchCat}>Search</button>
                </div>
            </form>

            {loading && <div>Loading...</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}

            <div className=" row row-cols-3 g-3 mt-4 text-center d-flex align-items-center">
                {cat.map((cat, index) => (
                    <div className="col-auto mb-3" key={index} onClick={() => navigate(`/detail/${cat.id}`)} style={{ cursor: 'pointer' }}>
                        <img src={cat.url} alt={`cat ${index}`} style={{ maxWidth: "200px", borderRadius: "8px" }} />
                    </div>
                ))}
            </div>


        </div>
    )
}


export default SearchCats;


