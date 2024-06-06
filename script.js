let slideAktif = 0;

function tampilkanSlide(indeks) {
    const semuaSlide = document.querySelectorAll('.slide');
    const semuaKeterangan = document.querySelectorAll('.caption');
    
    if (indeks >= semuaSlide.length) {
        slideAktif = 0;
    } else if (indeks < 0) {
        slideAktif = semuaSlide.length - 1;
    } else {
        slideAktif = indeks;
    }

    const posisi = -slideAktif * 100;
    document.querySelector('.slides').style.transform = `translateX(${posisi}%)`;

    const teksKeterangan = semuaKeterangan[slideAktif].textContent;
    document.getElementById('caption-text').textContent = teksKeterangan;
}

function ubahSlide(arah) {
    tampilkanSlide(slideAktif + arah);
}

document.addEventListener('DOMContentLoaded', () => {
    tampilkanSlide(slideAktif);
    setInterval(() => {
        ubahSlide(1);
    }, 4000);
});
