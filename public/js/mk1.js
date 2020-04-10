

function init() {
    const pocform   = document.getElementById('pocform')
    pocform.onsubmit = getDiscountCode;
    console.log("mk1 script is running");
}

function getDiscountCode() {
    const lnfield   = document.getElementById('lnfield').value;
    const idfield   = document.getElementById('idfield').value;
    const codefield = document.getElementById('codefield');

console.log(lnfield);
console.log(idfield);
    fetch(`http://localhost:8888/requestcode/${lnfield}/${idfield}`)
        .then(res => res.text())
        .then(text => {
            let returnedCode = text;
            codefield.innerHTML = returnedCode;
        }
        );

        return false;
}


init();
