let data = ["Dimas", "ERICC", "Yuan"];
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index) {
    console.log(value);
    listMhs.innerHTML += "<li>" + value + "</li>";
}

let npm = document.getElementById("npm");
// tampilkan data localstorage ke dalam elemen <p id='npm'>
npm.innerHTML = localStorage.getItem("npm");


let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// simpan ke data localstorage 
localStorage.setItem("email", "dimas@test.com");

//data membuat array berisi nilai baca dan codenya 
let hobi = ["baca", "game", "code"];
localStorage.setItem("hobi", hobi);
localStorage.setItem("my hobi", JSON.stringify(hobi));

// DATA OBJECT 
let mhs = { npm: 2226240002, nama: "Dimas"};
// cara mengaksesnya
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan object
let nilai = [
    {kode_mk : "SI0001", nama_mk: "Pemrograman Web"}, 
    {kode_mk: "SI0002", nama_mk: "Pengembangan Aplikasi Bergerak"},
];
// TAMPILKAN NAMA_MK PEMROGRANAN WEB 
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);

// simpan nilai ke dalam localstorage
localStorage.setItem("nilai", JSON.stringify(nilai));

// tampilkan menggunakan  for / forEach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
for (const [index, data] of lsNilai.entries()) {
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    //tampilkan data ke mk ke dalam <ul id="listMk">
    document.getElementById("listMk").innerHTML += `<li>${data.kode_mk} ${data.nama_mk}</li'>`;


}
