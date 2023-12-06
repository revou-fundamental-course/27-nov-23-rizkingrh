function hitungLuas() {
    const alas = document.getElementById("nilaiAlas").value;
    const tinggi = document.getElementById("nilaiTinggi").value;

    if (alas === "" || tinggi === "") {
        alert("Harap isi Nilai Alas dan Tinggi terlebih dahulu!");
        return;
    }

    let luas = 0.5 * alas * tinggi;
    console.log(luas)
    
    let hasil = document.getElementById("output-luas")
    hasil.innerHTML = `L = 1/2 x a x t <br> L = 1/2 x ${alas} x ${tinggi} <br> L = ${luas} cm<sup>2`
    hasil.style.display = "block"
}

function hitungKeliling() {
    const sisiA = document.getElementById("nilaiS1").value;
    const sisiB = document.getElementById("nilaiS2").value;
    const sisiC = document.getElementById("nilaiS3").value;

    const numericSisiA = parseFloat(sisiA);
    const numericSisiB = parseFloat(sisiB);
    const numericSisiC = parseFloat(sisiC);

    if (sisiA === "" || sisiB === "" || sisiC === "") {
        alert("Harap isi Nilai Masing2 Sisi terlebih dahulu!");
        return;
    }

    let keliling = numericSisiA + numericSisiB + numericSisiC;
    console.log(keliling)
    
    let hasil = document.getElementById("output-keliling")
    hasil.innerHTML = `K = S1 + S2 + S3 <br> K = ${sisiA} + ${sisiB} + ${sisiC} <br> K = ${keliling} cm`
    hasil.style.display = "block"
}

function resetForm() {
    document.getElementById("output-luas").style.display = "none";
    document.getElementById("output-keliling").style.display = "none";
}
