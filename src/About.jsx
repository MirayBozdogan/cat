
import React from "react";
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div className="container my-5">
            <Navbar />
            <div className="bg-light p-5 rounded shadow-sm" style={{ color: "#3d39f3", marginTop: "70px" }}>
                <h1 className="display-4 mb-4"> <FontAwesomeIcon icon={faCat} style={{ color: "#3d39f3", marginRight: "10px" }} size="lg" />Hakkında</h1>
                <p className="lead">
                    Bu proje, yapay zeka tarafından üretilmiş kedi görsellerini keşfetmek ve görsel arama deneyimini geliştirmek amacıyla hazırlanmıştır.
                    Kullanıcılar rastgele kediler görebilir, temaya, boyuta veya isme göre arama yapabilir, detaylı bilgi alabilir ve benzer görselleri inceleyebilir.
                </p>
                <hr className="my-4" />
                <p>
                    Proje, staj kapsamında geliştirilmiş olup modern web teknolojileri olan React, Bootstrap 5 ve JavaScript ile oluşturulmuştur.
                    API üzerinden gelen görseller, kullanıcıya dinamik ve interaktif bir deneyim sunar.
                </p>
                <p>
                    Ayrıca, istatistikler sayfasında toplam görsel sayısı ve temalara göre dağılım gibi bilgiler görselleştirilmiştir.
                    Bu sayede kullanıcılar hem eğlenebilir hem de veri analizi görebilir.
                </p>

            </div>
        </div>
    );
}

export default About;
