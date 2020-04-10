(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
},{}],2:[function(require,module,exports){
'use strict';

var fetch = require('node-fetch');

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

},{"node-fetch":1}]},{},[2]);
