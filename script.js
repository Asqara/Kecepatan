document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let t = parseFloat(document.getElementById('t').value);
    let h = parseFloat(document.getElementById('h').value);
    let delt_t = parseFloat(document.getElementById('delt_t').value);

    let delt_h = 0.05;
    let a = 2/3;

    // Menghitung V bola
    let V = h / t;

    // Menghitung Delta V bola
    let delta_v = Math.sqrt(Math.pow((1 / t), 2) * Math.pow((a * delt_h), 2) + Math.pow((h / Math.pow(t, 2)), 2) * Math.pow(delt_t, 2));

    // Membatasi hasil menjadi 3 digit di belakang koma
    document.getElementById('result').textContent = `V Bola: ${V.toFixed(3)} cm/s`;
    document.getElementById('deltaResult').textContent = `Delta V Bola: ${delta_v.toFixed(3)} cm/s`;
});
