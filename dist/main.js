!function(t){var i={};function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(n,o,function(i){return t[i]}.bind(null,o));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);var n,o,s,r={getData:function(t){fetch("http://api.openweathermap.org/data/2.5/weather?q="+"".concat(t,"&APPID=94896a8bdcbe02520a271bd7f5a69cd9")).then((function(t){return t.json()})).then((function(t){c.currentJsonData(t)})).catch((function(t){return console.log(t)}))},currentData:n},a=function(){var t,i,e=document.querySelector("#canvas"),n=e.getContext("2d"),o=[];t=e.width=window.innerWidth,i=e.height=window.innerHeight;var s=function(t,i){return t+Math.random()*(i-t+1)};window.addEventListener("resize",(function(n){t=e.width=window.innerWidth,i=e.height=window.innerHeight}));var r=function(){n.clearRect(0,0,t,i)},a=function(){r(),function(){for(var t=0;t<o.length;){var i=n.createRadialGradient(o[t].x,o[t].y,0,o[t].x,o[t].y,o[t].radius);i.addColorStop(0,"rgba(255, 255, 255, 0.3"),n.beginPath(),n.arc(o[t].x,o[t].y,o[t].radius,0,2*Math.PI,!1),n.fillStyle=i,n.fill(),t+=1}}(),function(){for(var e=0;e<o.length;)o[e].x+=o[e].speedX,o[e].y+=o[e].speedY,o[e].y>i&&(o[e].x=Math.random()*t*1.5,o[e].y=-50),e+=1}()};return{startSnowing:function(){setInterval(a,50),function(){for(var e=0;e<246;)o.push({x:Math.random()*t,y:Math.random()*i,opacity:Math.random(),speedX:s(-11,11),speedY:s(1,5),radius:s(.2,2.2)}),e+=1}()},clearCanvas:r}}(),h=function(){function t(i){if(this===window)return new t(i);var e="string"==typeof i.image?document.getElementById(i.image):i.image;if("img"===e.tagName.toLowerCase())this.imgSource=null,this.img=e,this.initialize(i);else{var n=this,o=e.currentStyle||window.getComputedStyle(e,!1),s=o.backgroundImage.slice(4,-1).replace(/"/g,""),r=document.createElement("img");r.onload=function(){n.imgSource=e,n.img=this,n.initialize(i)},r.src=s,n.bckStyle=o}}function i(t,i,e,n,o){this.x=Math.floor(i),this.y=Math.floor(e),this.r=Math.ceil(Math.random()*o+n),this.rainyday=t,this.context=t.context,this.reflection=t.reflected}function e(){this.r=0,this.g=0,this.b=0,this.next=null}function n(t,i,e){this.resolution=e,this.xc=t,this.yc=i,this.matrix=new Array(t);for(var n=0;n<=t+5;n++){this.matrix[n]=new Array(i);for(var s=0;s<=i+5;++s)this.matrix[n][s]=new o(null)}}function o(t){this.drop=t,this.next=null}return t.prototype.destroy=function(){this.pause(),this.canvas.parentNode.removeChild(this.canvas),this.bckStyle&&(this.imgSource.style.background=this.bckStyle.background),Object.keys(this).forEach((function(t){delete this[t]}))},t.prototype.initialize=function(t){var i,e,n,o,s,r,a=this.imgSource||t.parentElement||document.getElementsByTagName("body")[0],h=window.getOffset(a);this.imgDownscaled=this.customDrop||(i=this.img,e=50,n=document.createElement("canvas"),o=n.getContext("2d"),n.width=e||50,n.height=n.width*i.height/i.width,o.drawImage(i,0,0,i.width,i.height,0,0,n.width,n.height),n),t.sound&&(s=t.sound,(r=new Audio(s)).loop=!0,r.volume=.25,r.play());var l={opacity:1,blur:10,crop:[0,0,this.img.naturalWidth,this.img.naturalHeight],enableSizeChange:!0,parentElement:a,fps:24,fillStyle:"#8ED6FF",enableCollisions:!0,gravityThreshold:3,gravityAngle:Math.PI/2,gravityAngleVariance:0,reflectionScaledownFactor:5,reflectionDropMappingWidth:200,reflectionDropMappingHeight:200,width:a.clientWidth,height:a.clientHeight,position:"absolute",top:h.top+"px",left:h.left+"px"};for(var c in l)void 0===t[c]&&(t[c]=l[c]);this.options=t,this.drops=[],this.canvas=this.options.canvas||this.prepareCanvas(),this.prepareBackground(),this.prepareGlass(),this.reflection=this.REFLECTION_MINIATURE,this.trail=this.TRAIL_DROPS,this.gravity=this.GRAVITY_NON_LINEAR,this.collision=this.COLLISION_SIMPLE,this.setRequestAnimFrame(),this.rain([[3,5,.5]],50)},t.prototype.prepareCanvas=function(){var t=document.createElement("canvas"),i=this.options,e=i.position,n=i.top,o=i.left,s=i.width,r=i.height;return t.style.position=e,t.style.top=n,t.style.left=o,t.width=s,t.height=r,this.img.style.zIndex?(t.style.zIndex=this.img.style.zIndex,this.img.style.zIndex+=1):t.style.zIndex=99,this.imgSource?(this.options.parentElement.parentNode.insertBefore(t,this.imgSource),this.imgSource.style.zIndex=100,this.imgSource.style.position=e,this.imgSource.style.top=n,this.imgSource.style.left=o,this.imgSource.style.width=s,this.imgSource.style.height=r,this.imgSource.style.background="none",this.imgSource.style.width=s+"px"):this.options.parentElement.appendChild(t),this.options.parentElement.parentNode.style.height=this.options.height+"px",this.options.enableSizeChange&&this.setResizeHandler(),t},t.prototype.setResizeHandler=function(){window.onresize=this.checkSize.bind(this),window.onorientationchange=this.checkSize.bind(this)},t.prototype.checkSize=function(){var t=this.canvas,i=t.width,e=t.height,n=t.offsetLeft,o=t.offsetTop,s=this.options.parentElement.getBoundingClientRect(),r=s.width,a=s.bottom-s.top,h=s.left,l=s.top,c=i,p=e,d=n,u=o;this.options.parentElement.style.zIndex&&(this.canvas.style.zIndex=this.options.parentElement.style.zIndex),c===r&&p===a||(i=r,e=a,this.glass.width=i,this.glass.height=e,this.prepareBackground(),this.prepareReflections()),d===h&&u===l||(this.canvas.style.left=h,this.canvas.style.top=l)},t.prototype.animateDrops=function(){this.addDropCallback&&this.addDropCallback();for(var t=this.drops.slice(),i=[],e=0;e<t.length;++e)t[e].animate()&&i.push(t[e]);this.drops=i,this.requestID=window.requestAnimFrame(this.animateDrops.bind(this))},t.prototype.pause=function(){window.cancelAnimationFrame(this.requestID)},t.prototype.resume=function(){this.requestID=window.requestAnimFrame(this.animateDrops.bind(this))},t.prototype.setRequestAnimFrame=function(){var t=this.options.fps;window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(i){window.setTimeout(i,1e3/t)}},t.prototype.prepareReflections=function(){this.reflected=document.createElement("canvas"),this.reflected.width=Math.floor(this.canvas.width/this.options.reflectionScaledownFactor),this.reflected.height=Math.floor(this.canvas.height/this.options.reflectionScaledownFactor),this.reflected.getContext("2d").drawImage(this.imgDownscaled,0,0,this.imgDownscaled.width,this.imgDownscaled.height,0,0,this.reflected.width,this.reflected.height)},t.prototype.prepareGlass=function(){this.glass=document.createElement("canvas"),this.glass.width=this.canvas.width,this.glass.height=this.canvas.height,this.context=this.glass.getContext("2d")},t.prototype.rain=function(t,e){if(this.reflection!==this.REFLECTION_NONE&&this.prepareReflections(),this.animateDrops(),this.presets=t,this.PRIVATE_GRAVITY_FORCE_FACTOR_Y=.001*this.options.fps/25,this.PRIVATE_GRAVITY_FORCE_FACTOR_X=(Math.PI/2-this.options.gravityAngle)*(.001*this.options.fps)/50,this.options.enableCollisions){for(var o=0,s=0;s<t.length;s++)t[s][0]+t[s][1]>o&&(o=Math.floor(t[s][0]+t[s][1]));if(o>0){var r=Math.ceil(this.canvas.width/o),a=Math.ceil(this.canvas.height/o);this.matrix=new n(r,a,o)}else this.options.enableCollisions=!1}for(s=0;s<t.length;s++)t[s][3]||(t[s][3]=-1);var h=0;this.addDropCallback=function(){var n=(new Date).getTime();if(!(n-h<e)){h=n;var o,s=this.canvas.getContext("2d");s.clearRect(0,0,this.canvas.width,this.canvas.height),s.drawImage(this.background,0,0,this.canvas.width,this.canvas.height);for(var r=0;r<t.length;r++)if(t[r][2]>1||-1===t[r][3]){if(0!==t[r][3]){t[r][3]--;for(var a=0;a<t[r][2];++a)this.putDrop(new i(this,Math.random()*this.canvas.width,Math.random()*this.canvas.height,t[r][0],t[r][1]))}}else if(Math.random()<t[r][2]){o=t[r];break}o&&this.putDrop(new i(this,Math.random()*this.canvas.width,Math.random()*this.canvas.height,o[0],o[1])),s.save(),s.globalAlpha=this.options.opacity,s.drawImage(this.glass,0,0,this.canvas.width,this.canvas.height),s.restore()}}.bind(this)},t.prototype.putDrop=function(t){t.draw(),this.gravity&&t.r>this.options.gravityThreshold&&(this.options.enableCollisions&&this.matrix.update(t),this.drops.push(t))},t.prototype.clearDrop=function(t,i){var e=t.clear(i);if(e){var n=this.drops.indexOf(t);n>=0&&this.drops.splice(n,1)}return e},i.prototype.draw=function(){this.context.save(),this.context.beginPath();var t=this.r;if(this.r=Math.floor(.95*this.r),this.r<3)this.context.arc(this.x,this.y,this.r,0,2*Math.PI,!0),this.context.closePath();else if(this.colliding||this.yspeed>2){if(this.colliding){var i=this.colliding;this.r=1.001*(this.r>i.r?this.r:i.r),this.x+=i.x-this.x,this.colliding=null}var e=1+.1*this.yspeed;this.context.moveTo(this.x-this.r/e,this.y),this.context.bezierCurveTo(this.x-this.r,this.y-2*this.r,this.x+this.r,this.y-2*this.r,this.x+this.r/e,this.y),this.context.bezierCurveTo(this.x+this.r,this.y+e*this.r,this.x-this.r,this.y+e*this.r,this.x-this.r/e,this.y)}else this.context.arc(this.x,this.y,.9*this.r,0,2*Math.PI,!0),this.context.closePath();this.context.clip(),this.r=t,this.rainyday.reflection&&this.rainyday.reflection(this),this.context.restore()},i.prototype.clear=function(t){return this.context.clearRect(this.x-this.r-1,this.y-this.r-2,2*this.r+2,2*this.r+2),t?(this.terminate=!0,!0):this.y-this.r>this.rainyday.canvas.height||this.x-this.r>this.rainyday.canvas.width||this.x+this.r<0},i.prototype.animate=function(){if(this.terminate)return!1;var t=this.rainyday.gravity(this);if(!t&&this.rainyday.trail&&this.rainyday.trail(this),this.rainyday.options.enableCollisions){var i=this.rainyday.matrix.update(this,t);i&&this.rainyday.collision(this,i)}return!t||this.terminate},t.prototype.TRAIL_NONE=function(){},t.prototype.TRAIL_DROPS=function(t){(!t.trailY||t.y-t.trailY>=100*Math.random()*t.r)&&(t.trailY=t.y,this.putDrop(new i(this,Math.floor(t.x+(2*Math.random()-1)*Math.random()),t.y-t.r-5,Math.ceil(t.r/5),0)))},t.prototype.TRAIL_SMUDGE=function(t){var i=t.y-t.r-3,e=t.x-Math.floor(t.r/2)+2*Math.random();i<0||e<0||this.context.drawImage(this.clearbackground,e,i,t.r,2,e,i,t.r,2)},t.prototype.GRAVITY_NONE=function(){return!0},t.prototype.GRAVITY_LINEAR=function(t){return!!this.clearDrop(t)||(t.yspeed?(t.yspeed+=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y*Math.floor(t.r),t.xspeed+=Math.floor(this.PRIVATE_GRAVITY_FORCE_FACTOR_X*Math.floor(t.r))):(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=Math.floor(this.PRIVATE_GRAVITY_FORCE_FACTOR_X)),t.y+=Math.floor(t.yspeed),t.draw(),!1)},t.prototype.GRAVITY_NON_LINEAR=function(t){return!!this.clearDrop(t)||(t.collided?(t.collided=!1,t.seed=Math.floor(t.r*Math.random()*this.options.fps),t.skipping=!1,t.slowing=!1):(!t.seed||t.seed<0)&&(t.seed=Math.floor(t.r*Math.random()*this.options.fps),t.skipping=!1===t.skipping,t.slowing=!0),t.seed--,t.yspeed?t.slowing?(t.yspeed/=1.1,t.xspeed/=1.1,t.yspeed<this.PRIVATE_GRAVITY_FORCE_FACTOR_Y&&(t.slowing=!1)):t.skipping?(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X):(t.yspeed+=1*this.PRIVATE_GRAVITY_FORCE_FACTOR_Y*Math.floor(t.r),t.xspeed+=1*this.PRIVATE_GRAVITY_FORCE_FACTOR_X*Math.floor(t.r)):(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X),0!==this.options.gravityAngleVariance&&(t.xspeed+=(2*Math.random()-1)*t.yspeed*this.options.gravityAngleVariance),t.y+=Math.floor(t.yspeed),t.x+=Math.floor(t.xspeed),t.draw(),!1)},t.prototype.positiveMin=function(t,i){var e=0;return(e=t<i?t<=0?i:t:i<=0?t:i)<=0?1:e},t.prototype.REFLECTION_NONE=function(){this.context.fillStyle=this.options.fillStyle,this.context.fill()},t.prototype.REFLECTION_MINIATURE=function(t){var i=Math.max((t.x-this.options.reflectionDropMappingWidth)/this.options.reflectionScaledownFactor,0),e=Math.max((t.y-this.options.reflectionDropMappingHeight)/this.options.reflectionScaledownFactor,0),n=this.positiveMin(2*this.options.reflectionDropMappingWidth/this.options.reflectionScaledownFactor,this.reflected.width-i),o=this.positiveMin(2*this.options.reflectionDropMappingHeight/this.options.reflectionScaledownFactor,this.reflected.height-e),s=Math.max(t.x-1.1*t.r,0),r=Math.max(t.y-1.1*t.r,0);this.context.drawImage(this.reflected,Math.floor(i),Math.floor(e),Math.floor(n),Math.floor(o),Math.floor(s),Math.floor(r),2*t.r,2*t.r)},t.prototype.COLLISION_SIMPLE=function(t,i){for(var e,n,o,s=i;null!=s;){var r=s.drop,a=t.r+r.r,h=t.x-r.x,l=t.y-r.y;if(Math.abs(h)<a&&Math.abs(l)<a&&Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))<t.r+r.r){e=r;break}s=s.next}e&&(t.y>e.y?(n=t,o=e):(n=e,o=t),this.clearDrop(o),this.clearDrop(n,!0),this.matrix.remove(n),o.draw(),o.colliding=n,o.collided=!0)},t.prototype.prepareBackground=function(){this.background=document.createElement("canvas"),this.background.width=this.canvas.width,this.background.height=this.canvas.height,this.clearbackground=document.createElement("canvas"),this.clearbackground.width=this.canvas.width,this.clearbackground.height=this.canvas.height;var t=this.background.getContext("2d");t.drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.canvas.width,this.canvas.height),(t=this.clearbackground.getContext("2d")).drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.canvas.width,this.canvas.height),!isNaN(this.options.blur)&&this.options.blur>=1&&this.stackBlurCanvasRGB(this.canvas.width,this.canvas.height,this.options.blur)},t.prototype.stackBlurCanvasRGB=function(t,i,n){var o=[[0,9],[1,11],[2,12],[3,13],[5,14],[7,15],[11,16],[15,17],[22,18],[31,19],[45,20],[63,21],[90,22],[127,23],[181,24]];n|=0;var s,r,a,h,l,c,p,d,u,g,f,m,y,x,v,w,R,M,I,b,A=this.background.getContext("2d"),_=A.getImageData(0,0,t,i),C=_.data,E=n+1,T=E*(E+1)/2,S=new e,O=new e,F=S;for(a=1;a<2*n+1;a++)F=F.next=new e,a===E&&(O=F);F.next=S;var D=null,k=null;p=c=0;for(var V,P=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259][n],N=0;N<o.length;++N)if(n<=o[N][0]){V=o[N-1][1];break}for(r=0;r<i;r++){for(x=v=w=d=u=g=0,f=E*(R=C[c]),m=E*(M=C[c+1]),y=E*(I=C[c+2]),d+=T*R,u+=T*M,g+=T*I,F=S,a=0;a<E;a++)F.r=R,F.g=M,F.b=I,F=F.next;for(a=1;a<E;a++)h=c+((t-1<a?t-1:a)<<2),d+=(F.r=R=C[h])*(b=E-a),u+=(F.g=M=C[h+1])*b,g+=(F.b=I=C[h+2])*b,x+=R,v+=M,w+=I,F=F.next;for(D=S,k=O,s=0;s<t;s++)C[c]=d*P>>V,C[c+1]=u*P>>V,C[c+2]=g*P>>V,d-=f,u-=m,g-=y,f-=D.r,m-=D.g,y-=D.b,h=p+((h=s+n+1)<t-1?h:t-1)<<2,d+=x+=D.r=C[h],u+=v+=D.g=C[h+1],g+=w+=D.b=C[h+2],D=D.next,f+=R=k.r,m+=M=k.g,y+=I=k.b,x-=R,v-=M,w-=I,k=k.next,c+=4;p+=t}for(s=0;s<t;s++){for(v=w=x=u=g=d=0,f=E*(R=C[c=s<<2]),m=E*(M=C[c+1]),y=E*(I=C[c+2]),d+=T*R,u+=T*M,g+=T*I,F=S,a=0;a<E;a++)F.r=R,F.g=M,F.b=I,F=F.next;for(l=t,a=1;a<E;a++)c=l+s<<2,d+=(F.r=R=C[c])*(b=E-a),u+=(F.g=M=C[c+1])*b,g+=(F.b=I=C[c+2])*b,x+=R,v+=M,w+=I,F=F.next,a<i-1&&(l+=t);for(c=s,D=S,k=O,r=0;r<i;r++)C[h=c<<2]=d*P>>V,C[h+1]=u*P>>V,C[h+2]=g*P>>V,d-=f,u-=m,g-=y,f-=D.r,m-=D.g,y-=D.b,h=s+((h=r+E)<i-1?h:i-1)*t<<2,d+=x+=D.r=C[h],u+=v+=D.g=C[h+1],g+=w+=D.b=C[h+2],D=D.next,f+=R=k.r,m+=M=k.g,y+=I=k.b,x-=R,v-=M,w-=I,k=k.next,c+=t}A.putImageData(_,0,0)},n.prototype.update=function(t,i){if(t.gid){if(!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;if(this.matrix[t.gmx][t.gmy].remove(t),i)return null;if(t.gmx=Math.floor(t.x/this.resolution),t.gmy=Math.floor(t.y/this.resolution),!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;this.matrix[t.gmx][t.gmy].add(t);var e=this.collisions(t);if(e&&null!=e.next)return e.next}else{if(t.gid=Math.random().toString(36).substr(2,9),t.gmx=Math.floor(t.x/this.resolution),t.gmy=Math.floor(t.y/this.resolution),!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;this.matrix[t.gmx][t.gmy].add(t)}return null},n.prototype.collisions=function(t){var i=new o(null),e=i;return i=this.addAll(i,t.gmx-1,t.gmy+1),i=this.addAll(i,t.gmx,t.gmy+1),i=this.addAll(i,t.gmx+1,t.gmy+1),e},n.prototype.addAll=function(t,i,e){if(i>0&&e>0&&i<this.xc&&e<this.yc)for(var n=this.matrix[i][e];null!=n.next;)n=n.next,t.next=new o(n.drop),t=t.next;return t},n.prototype.remove=function(t){this.matrix[t.gmx][t.gmy].remove(t)},o.prototype.add=function(t){for(var i=this;null!=i.next;)i=i.next;i.next=new o(t)},o.prototype.remove=function(t){for(var i=this,e=null;null!=i.next;)e=i,(i=i.next).drop.gid===t.gid&&(e.next=i.next)},window.getOffset=function(t){"string"==typeof t&&(t=document.getElementById(t));var i,e,n,o,s=t;if(s)return s.getClientRects().length?(n=s.getBoundingClientRect(),e=(i=s.ownerDocument).documentElement,o=i.defaultView,{top:n.top+o.pageYOffset-e.clientTop,left:n.left+o.pageXOffset-e.clientLeft}):{top:0,left:0}},{RainyDay:t}}(),l={startRaining:function(){var t=document.querySelector("#background");t.crossOrigin="Anonymous",console.log("loaded!"),new h.RainyDay({image:t}).rain([[0,2,200],[3,3,1]],100)}},c=(o=/RAIN/g,s=function(t){return t<10&&(t="0"+t),t},{startApp:function(){r.getData("London,uk"),a.startSnowing()},currentJsonData:function(t){console.log(t);var i=t.weather[0].main;document.querySelector(".location").textContent=t.name,document.querySelector(".description").textContent=t.weather[0].description,document.querySelector(".temp").textContent=t.main.temp+"°c",i.toUpperCase().match(o)||(console.log("True"),document.querySelector(".snow").style.display="none",document.querySelector("body").backgroundImage="none",l.startRaining()),function t(){var i=new Date,e=i.getHours(),n=i.getMinutes(),o=i.getSeconds();n=s(n),o=s(o),document.querySelector(".currenttime").innerHTML=e+":"+n+":"+o,setTimeout((function(){t()}),500)}()}});c.startApp()}]);