// ==UserScript==
// @name     Balance Image
// @version  1
// @namespace      https://bitcointalk.org/
// @include        https://bitcointalk.org/*
// ==/UserScript==

document.body.innerHTML = document.body.innerHTML.replace( 
  new RegExp("(([13])[a-zA-HJ-NP-Z0-9]{25,39})","gm"), 
  "$1 <img src='http://btc-priceimg.herokuapp.com/balance/$1/ff0000'/>"
)
