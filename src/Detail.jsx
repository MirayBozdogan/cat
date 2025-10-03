import { useEffect, useState } from "react";
import Navbar from './Navbar';
import { useParams } from "react-router-dom";

function Detail() {
    const [catInfo, setCatInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.ai-cats.net/v1/cat/info/${id}?size=1024`)
            .then(res => res.json())
            .then(data => setCatInfo(data))
            .catch(err => console.error("Error fetching metadata:", err));
    }, [id]);

    if (!catInfo) return <p>Loading...</p>;

    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: "center", color: "#3d39f3" }}>Detail</h1>
            <div className="card bg-light mx-auto align-items-center" style={{ width: "30rem", Height: "30rem" }}>
                <img src={catInfo.url} className="card-img-top" alt="cat" />
                <div className="card-body" style={{ color: "#3d39f3" }}>
                    <p className="card-text">ID: {catInfo.id}</p>
                    <p className="card-text">Theme: {catInfo.theme}</p>
                    <p className="card-text">Prompt: {catInfo.prompt}</p>
                    <p className="card-text">Date: {new Date(catInfo.dateCreated).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}

export default Detail;
