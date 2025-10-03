import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';




function Stats() {
    const [stats, setStats] = useState([]);



    const fetchStats = async () => {
        try {
            const themeRes = await fetch("https://api.ai-cats.net/v1/cat/theme-list");
            const themeData = await themeRes.json();
            const results = [];

            for (let theme of themeData.themes) {
                const res = await fetch(
                    `https://api.ai-cats.net/v1/cat/count?theme=${theme}`
                );
                const data = await res.json();

                results.push({ theme: theme, count: data.count });
            }
            setStats(results);
        } catch (error) {
            console.error("Hata oluştu:", error);
        }
    };




    useEffect(() => {
        fetchStats();

    }, []);

    return (
        <div>
            <Navbar />
            <table className="table table-danger  table-striped container" style={{ maxWidth: "800px", marginTop: "100px" }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Theme</th>
                        <th scope="col">Count</th>

                    </tr>
                </thead>
                <tbody>
                    {stats.map((item, index) =>
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.theme}</td>
                            <td>{item.count}</td>
                        </tr>
                    )}


                </tbody>
            </table>
        </div>

    )
}


export default Stats;   