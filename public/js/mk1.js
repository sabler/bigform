// No frills JS time.

const fetch = require('../../node_modules/node-fetch');


function init() {
    const pocform   = document.getElementById('pocform')
    pocform.onsubmit = getDiscountCode;

    // Add Event Listener for form submit call
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
            alert(returnedCode);
        }
        );

        return false;
}

function updatePage(code) {
    console.log(code);
}

//getDiscountCode('Andre','4563211');
