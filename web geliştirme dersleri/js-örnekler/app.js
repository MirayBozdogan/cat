let urun1 = {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6.219
}

let urun2 = {
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15.475
}

let urun3 = {
    isim: "LENOVO V15",
    kategori: "Teknoloji",
    fiyat: 10.999
}
let urun4 = {
    isim: "LENOVO V14",
    kategori: "Teknoloji",
    fiyat: 4.399
}
let urun5 = {
    isim: "LENOVO Ideapad",
    kategori: "Teknoloji",
    fiyat: 4.510
}
let urunler = [urun1, urun2, urun3, urun4, urun5];
let fltreliurunler = [];
let kullanıcıUrunIsmi = prompt("Lütfen ürün ismi giriniz:").toUpperCase();

FiltreliUrunlerDoldur(urunler);
FiltreliUrunleriEkranaYazdır(fltreliurunler);

function FiltreliUrunlerDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullanıcıUrunIsmi)) {
            fltreliurunler.push(urun);
        }
    });
}

function FiltreliUrunleriEkranaYazdır(urunler) {
    urunler.forEach(function (urun) {
        console.log("-------------------------------");
        console.log("Ürün ismi: " + urun.isim + " | Kategori: " + urun.kategori + " | Fiyat: " + urun.fiyat);
    });
}