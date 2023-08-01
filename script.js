function convert() {
    let cm = document.getElementById('data').value;
    const factor = 0.393701;
    let inch = cm * factor;
    document.getElementById('res').innerText = inch.toFixed(3)+' in';
}