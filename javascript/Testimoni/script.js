let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnSimpan.addEventListener("click", function() {
    if (localStorage.getItem("testimoni")) {
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    } else {
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    }
    // simpan ke dalam local storage 
    localStorage.setItem("testimoni", JSON.stringify(data));
    // panggil getData()
    getData();
});   


// tampil data localStorage 
function getData(){
    // clear elemen list 
    list.innerHTML = "";


    if (localStorage.getItem("testimoni")){
        // ada localstorage dengan key testimoni
        data = JSON.parse(localStorage.getItem("testimoni"));
        for (const[index, row] of data.entries()) {
            // list.innerHtml += `<<li>${row.nama} ${row.testimoni}</li>`;
            list.innerHTML +=`<tr><td>${row.nama}</td><td> ${row.testimoni}</td></tr>`;
        }
    }
}
// panggil getData
getData();
