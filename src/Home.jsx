import { useEffect, useState } from "react";
import Navbar from './Navbar';
import './App.css';


function Home() {

    const [cat, setCat] = useState(null);

    const fecthCat = () => {
        fetch(`https://api.ai-cats.net/v1/cat?size=512&theme=All&_=${Date.now()}`)
            .then((response) => response.blob())
            .then((blob) => {
                const imgUrl = URL.createObjectURL(blob);
                setCat(imgUrl);
            })
            .catch((err) => console.error("Fetch error:", err));
    };


    useEffect(() => {
        fecthCat();

    }, []);

    return (
        <div className=" home container text-center">
            <Navbar />
            <h1 style={{ color: "#3d39f3", marginTop: "10px" }}>AI Cats</h1>
            <div className="card mb-3 mx-auto d-block" >
                <img className="card-img-top" src={cat} alt="Card image cap"></img>
            </div>

            <button type="button" className="btn btn-outline-primary btn-lg" onClick={fecthCat}>New İmage</button>
        </div>
    );
}

export default Home;