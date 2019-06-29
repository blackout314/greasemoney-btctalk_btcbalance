// ==UserScript==
// @name     Balance Image
// @version  1
// @namespace      https://bitcointalk.org/
// @include        https://bitcointalk.org/*
// @exclude        https://bitcointalk.org/index.php?action=post*
// ==/UserScript==

document.body.innerHTML = document.body.innerHTML.replace( 
  new RegExp("([13][a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[ac-hj-np-zAC-HJ-NP-Z02-9]{11,71})","gm"), 
  "$1 <img src='http://btc-priceimg.herokuapp.com/balance/$1/ff0000'/>"
)
