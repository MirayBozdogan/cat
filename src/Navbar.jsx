import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import './App.css';


function Navbar() {



    return (

        <div className="container text-center">
            <nav className="navbar navbar-expand-lg navbar-light  mt-auto" style={{ backgroundColor: "#e3f2fd;" }}>
                <div className="container-fluid">
                    <h1 className="navbar-brand" style={{ color: "#3d39f3" }}> <FontAwesomeIcon icon={faCat} style={{ color: "#3d39f3", marginRight: "10px" }} size="lg" />AI Cats</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active m-2" aria-current="page" href="/">
                                    Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active m-2" aria-current="page" href="/search">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active m-2" aria-current="page" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active m-2" aria-current="page" href="/stats">Stats</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;