// No frills JS time.

const fetch = require('../../node_modules/node-fetch');

function getDiscountCode() {
    fetch('http://localhost:8888/requestcode/Sable/123456789')
        .then(res => res.text())
        .then(text => console.log(text));
}


getDiscountCode();
