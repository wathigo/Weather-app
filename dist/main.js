!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var r={getData:function(t){fetch("http://api.openweathermap.org/data/2.5/weather?q="+"".concat(t,"&APPID=94896a8bdcbe02520a271bd7f5a69cd9")).then((function(t){return t.json()})).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))}},o=function(){var t,n,e=document.querySelector("#canvas"),r=e.getContext("2d"),o=[];t=e.width=window.innerWidth,n=e.height=window.innerHeight;var a=function(t,n){return t+Math.random()*(n-t+1)};window.addEventListener("resize",(function(r){t=e.width=window.innerWidth,n=e.height=window.innerHeight}));var i=function(){r.clearRect(0,0,t,n),function(){for(var t=0;t<o.length;){var n=r.createRadialGradient(o[t].x,o[t].y,0,o[t].x,o[t].y,o[t].radius);n.addColorStop(0,"rgba(255, 255, 255,"+o[t].opacity+")"),n.addColorStop(.8,"rgba(210, 236, 242,"+o[t].opacity+")"),n.addColorStop(1,"rgba(237, 247, 249,"+o[t].opacity+")"),r.beginPath(),r.arc(o[t].x,o[t].y,o[t].radius,0,2*Math.PI,!1),r.fillStyle=n,r.fill(),t+=1}}(),function(){for(var e=0;e<o.length;)o[e].x+=o[e].speedX,o[e].y+=o[e].speedY,o[e].y>n&&(o[e].x=Math.random()*t*1.5,o[e].y=-50),e+=1}()};return{startSnowing:function(){setInterval(i,50),function(){for(var e=0;e<246;)o.push({x:Math.random()*t,y:Math.random()*n,opacity:Math.random(),speedX:a(-11,11),speedY:a(1,5),radius:a(.2,2.2)}),e+=1}()}}}();({startApp:function(){o.startSnowing(),r.getData("London,uk")}}).startApp()}]);