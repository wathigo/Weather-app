!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var n,o,r,a,s,h,c,l,d,u,p,g,f,m,y,v,x,w,b,R=(o="http://api.openweathermap.org/data/2.5/weather?q=",{getData:function(t){fetch("".concat(o).concat(t,"&APPID=94896a8bdcbe02520a271bd7f5a69cd9&units=Metric")).then((function(t){return t.json()})).then((function(t){E.currentJsonData(t)})).catch((function(t){return console.log(t)}))},currentData:n,getDataF:function(t){fetch("".concat(o).concat(t,"&APPID=94896a8bdcbe02520a271bd7f5a69cd9&units=imperial")).then((function(t){return t.json()})).then((function(t){E.currentJsonData(t.main.temp)})).catch((function(t){return console.log(t)}))}}),I=function(){var t,e,i=document.querySelector("#canvas"),n=i.getContext("2d"),o=[];t=i.width=window.innerWidth,e=i.height=window.innerHeight;var r=function(t,e){return t+Math.random()*(e-t+1)};window.addEventListener("resize",(function(n){t=i.width=window.innerWidth,e=i.height=window.innerHeight}));var a=function(){n.clearRect(0,0,t,e)},s=function(){a(),function(){for(var t=0;t<o.length;){var e=n.createRadialGradient(o[t].x,o[t].y,0,o[t].x,o[t].y,o[t].radius);e.addColorStop(0,"rgba(255, 255, 255, 0.3"),n.beginPath(),n.arc(o[t].x,o[t].y,o[t].radius,0,2*Math.PI,!1),n.fillStyle=e,n.fill(),t+=1}}(),function(){for(var i=0;i<o.length;)o[i].x+=o[i].speedX,o[i].y+=o[i].speedY,o[i].y>e&&(o[i].x=Math.random()*t*1.5,o[i].y=-50),i+=1}()};return{startSnowing:function(){setInterval(s,50),function(){for(var i=0;i<246;)o.push({x:Math.random()*t,y:Math.random()*e,opacity:Math.random(),speedX:r(-11,11),speedY:r(1,5),radius:r(.2,2.2)}),i+=1}()},clearCanvas:a}}(),M=function(){function t(e){if(this===window)return new t(e);var i="string"==typeof e.image?document.getElementById(e.image):e.image;if("img"===i.tagName.toLowerCase())this.imgSource=null,this.img=i,this.initialize(e);else{var n=this,o=i.currentStyle||window.getComputedStyle(i,!1),r=o.backgroundImage.slice(4,-1).replace(/"/g,""),a=document.createElement("img");a.onload=function(){n.imgSource=i,n.img=this,n.initialize(e)},a.src=r,n.bckStyle=o}}function e(t,e,i,n,o){this.x=Math.floor(e),this.y=Math.floor(i),this.r=Math.ceil(Math.random()*o+n),this.rainyday=t,this.context=t.context,this.reflection=t.reflected}function i(){this.r=0,this.g=0,this.b=0,this.next=null}function n(t,e,i){this.resolution=i,this.xc=t,this.yc=e,this.matrix=new Array(t);for(var n=0;n<=t+5;n++){this.matrix[n]=new Array(e);for(var r=0;r<=e+5;++r)this.matrix[n][r]=new o(null)}}function o(t){this.drop=t,this.next=null}return t.prototype.destroy=function(){this.pause(),this.canvas.parentNode.removeChild(this.canvas),this.bckStyle&&(this.imgSource.style.background=this.bckStyle.background),Object.keys(this).forEach((function(t){delete this[t]}))},t.prototype.initialize=function(t){var e,i,n,o,r=this.imgSource||t.parentElement||document.getElementsByTagName("body")[0],a=window.getOffset(r);this.imgDownscaled=this.customDrop||(e=this.img,i=50,n=document.createElement("canvas"),o=n.getContext("2d"),n.width=i||50,n.height=n.width*e.height/e.width,o.drawImage(e,0,0,e.width,e.height,0,0,n.width,n.height),n),t.sound&&function(t){var e=new Audio(t);e.loop=!0,e.volume=.25,e.play()}(t.sound);var s={opacity:1,blur:10,crop:[0,0,this.img.naturalWidth,this.img.naturalHeight],enableSizeChange:!0,parentElement:r,fps:24,fillStyle:"#8ED6FF",enableCollisions:!0,gravityThreshold:3,gravityAngle:Math.PI/2,gravityAngleVariance:0,reflectionScaledownFactor:5,reflectionDropMappingWidth:200,reflectionDropMappingHeight:200,width:r.clientWidth,height:r.clientHeight,position:"absolute",top:"".concat(a.top,"px"),left:"".concat(a.left,"px")};for(var h in s)void 0===t[h]&&(t[h]=s[h]);this.options=t,this.drops=[],this.canvas=this.options.canvas||this.prepareCanvas(),this.prepareBackground(),this.prepareGlass(),this.reflection=this.REFLECTION_MINIATURE,this.trail=this.TRAIL_DROPS,this.gravity=this.GRAVITY_NON_LINEAR,this.collision=this.COLLISION_SIMPLE,this.setRequestAnimFrame(),this.rain([[3,5,.5]],50)},t.prototype.prepareCanvas=function(){var t=document.createElement("canvas"),e=this.options,i=e.position,n=e.top,o=e.left,r=e.width,a=e.height;return t.style.position=i,t.style.top=n,t.style.left=o,t.setAttribute("id","rainy-canvas"),t.width=r,t.height=a,this.img.style.zIndex?(t.style.zIndex=this.img.style.zIndex,this.img.style.zIndex+=1):t.style.zIndex=99,this.imgSource?(this.options.parentElement.parentNode.insertBefore(t,this.imgSource),this.imgSource.style.zIndex=100,this.imgSource.style.position=i,this.imgSource.style.top=n,this.imgSource.style.left=o,this.imgSource.style.width=r,this.imgSource.style.height=a,this.imgSource.style.background="none",this.imgSource.style.width="".concat(r,"px")):this.options.parentElement.appendChild(t),this.options.parentElement.parentNode.style.height="".concat(this.options.height,"px"),this.options.enableSizeChange&&this.setResizeHandler(),t},t.prototype.setResizeHandler=function(){window.onresize=this.checkSize.bind(this),window.onorientationchange=this.checkSize.bind(this)},t.prototype.checkSize=function(){var t=this.canvas,e=t.width,i=t.height,n=t.offsetLeft,o=t.offsetTop,r=this.options.parentElement.getBoundingClientRect(),a=r.width,s=r.bottom-r.top,h=r.left,c=r.top,l=e,d=i,u=n,p=o;this.options.parentElement.style.zIndex&&(this.canvas.style.zIndex=this.options.parentElement.style.zIndex),l===a&&d===s||(e=a,i=s,this.glass.width=e,this.glass.height=i,this.prepareBackground(),this.prepareReflections()),u===h&&p===c||(this.canvas.style.left=h,this.canvas.style.top=c)},t.prototype.animateDrops=function(){this.addDropCallback&&this.addDropCallback();for(var t=this.drops.slice(),e=[],i=0;i<t.length;++i)t[i].animate()&&e.push(t[i]);this.drops=e,this.requestID=window.requestAnimFrame(this.animateDrops.bind(this))},t.prototype.pause=function(){window.cancelAnimationFrame(this.requestID)},t.prototype.resume=function(){this.requestID=window.requestAnimFrame(this.animateDrops.bind(this))},t.prototype.setRequestAnimFrame=function(){var t=this.options.fps;window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/t)}},t.prototype.prepareReflections=function(){this.reflected=document.createElement("canvas"),this.reflected.width=Math.floor(this.canvas.width/this.options.reflectionScaledownFactor),this.reflected.height=Math.floor(this.canvas.height/this.options.reflectionScaledownFactor),this.reflected.getContext("2d").drawImage(this.imgDownscaled,0,0,this.imgDownscaled.width,this.imgDownscaled.height,0,0,this.reflected.width,this.reflected.height)},t.prototype.prepareGlass=function(){this.glass=document.createElement("canvas"),this.glass.width=this.canvas.width,this.glass.height=this.canvas.height,this.context=this.glass.getContext("2d")},t.prototype.rain=function(t,i){if(this.reflection!==this.REFLECTION_NONE&&this.prepareReflections(),this.animateDrops(),this.presets=t,this.PRIVATE_GRAVITY_FORCE_FACTOR_Y=.001*this.options.fps/25,this.PRIVATE_GRAVITY_FORCE_FACTOR_X=(Math.PI/2-this.options.gravityAngle)*(.001*this.options.fps)/50,this.options.enableCollisions){for(var o=0,r=0;r<t.length;r++)t[r][0]+t[r][1]>o&&(o=Math.floor(t[r][0]+t[r][1]));if(o>0){var a=Math.ceil(this.canvas.width/o),s=Math.ceil(this.canvas.height/o);this.matrix=new n(a,s,o)}else this.options.enableCollisions=!1}for(r=0;r<t.length;r++)t[r][3]||(t[r][3]=-1);var h=0;this.addDropCallback=function(){var n=(new Date).getTime();if(!(n-h<i)){h=n;var o,r=this.canvas.getContext("2d");r.clearRect(0,0,this.canvas.width,this.canvas.height),r.drawImage(this.background,0,0,this.canvas.width,this.canvas.height);for(var a=0;a<t.length;a++)if(t[a][2]>1||-1===t[a][3]){if(0!==t[a][3]){t[a][3]--;for(var s=0;s<t[a][2];++s)this.putDrop(new e(this,Math.random()*this.canvas.width,Math.random()*this.canvas.height,t[a][0],t[a][1]))}}else if(Math.random()<t[a][2]){o=t[a];break}o&&this.putDrop(new e(this,Math.random()*this.canvas.width,Math.random()*this.canvas.height,o[0],o[1])),r.save(),r.globalAlpha=this.options.opacity,r.drawImage(this.glass,0,0,this.canvas.width,this.canvas.height),r.restore()}}.bind(this)},t.prototype.putDrop=function(t){t.draw(),this.gravity&&t.r>this.options.gravityThreshold&&(this.options.enableCollisions&&this.matrix.update(t),this.drops.push(t))},t.prototype.clearDrop=function(t,e){var i=t.clear(e);if(i){var n=this.drops.indexOf(t);n>=0&&this.drops.splice(n,1)}return i},e.prototype.draw=function(){this.context.save(),this.context.beginPath();var t=this.r;if(this.r=Math.floor(.95*this.r),this.r<3)this.context.arc(this.x,this.y,this.r,0,2*Math.PI,!0),this.context.closePath();else if(this.colliding||this.yspeed>2){if(this.colliding){var e=this.colliding;this.r=1.001*(this.r>e.r?this.r:e.r),this.x+=e.x-this.x,this.colliding=null}var i=1+.1*this.yspeed;this.context.moveTo(this.x-this.r/i,this.y),this.context.bezierCurveTo(this.x-this.r,this.y-2*this.r,this.x+this.r,this.y-2*this.r,this.x+this.r/i,this.y),this.context.bezierCurveTo(this.x+this.r,this.y+i*this.r,this.x-this.r,this.y+i*this.r,this.x-this.r/i,this.y)}else this.context.arc(this.x,this.y,.9*this.r,0,2*Math.PI,!0),this.context.closePath();this.context.clip(),this.r=t,this.rainyday.reflection&&this.rainyday.reflection(this),this.context.restore()},e.prototype.clear=function(t){return this.context.clearRect(this.x-this.r-1,this.y-this.r-2,2*this.r+2,2*this.r+2),t?(this.terminate=!0,!0):this.y-this.r>this.rainyday.canvas.height||this.x-this.r>this.rainyday.canvas.width||this.x+this.r<0},e.prototype.animate=function(){if(this.terminate)return!1;var t=this.rainyday.gravity(this);if(!t&&this.rainyday.trail&&this.rainyday.trail(this),this.rainyday.options.enableCollisions){var e=this.rainyday.matrix.update(this,t);e&&this.rainyday.collision(this,e)}return!t||this.terminate},t.prototype.TRAIL_NONE=function(){},t.prototype.TRAIL_DROPS=function(t){(!t.trailY||t.y-t.trailY>=100*Math.random()*t.r)&&(t.trailY=t.y,this.putDrop(new e(this,Math.floor(t.x+(2*Math.random()-1)*Math.random()),t.y-t.r-5,Math.ceil(t.r/5),0)))},t.prototype.TRAIL_SMUDGE=function(t){var e=t.y-t.r-3,i=t.x-Math.floor(t.r/2)+2*Math.random();e<0||i<0||this.context.drawImage(this.clearbackground,i,e,t.r,2,i,e,t.r,2)},t.prototype.GRAVITY_NONE=function(){return!0},t.prototype.GRAVITY_LINEAR=function(t){return!!this.clearDrop(t)||(t.yspeed?(t.yspeed+=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y*Math.floor(t.r),t.xspeed+=Math.floor(this.PRIVATE_GRAVITY_FORCE_FACTOR_X*Math.floor(t.r))):(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=Math.floor(this.PRIVATE_GRAVITY_FORCE_FACTOR_X)),t.y+=Math.floor(t.yspeed),t.draw(),!1)},t.prototype.GRAVITY_NON_LINEAR=function(t){return!!this.clearDrop(t)||(t.collided?(t.collided=!1,t.seed=Math.floor(t.r*Math.random()*this.options.fps),t.skipping=!1,t.slowing=!1):(!t.seed||t.seed<0)&&(t.seed=Math.floor(t.r*Math.random()*this.options.fps),t.skipping=!1===t.skipping,t.slowing=!0),t.seed--,t.yspeed?t.slowing?(t.yspeed/=1.1,t.xspeed/=1.1,t.yspeed<this.PRIVATE_GRAVITY_FORCE_FACTOR_Y&&(t.slowing=!1)):t.skipping?(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X):(t.yspeed+=1*this.PRIVATE_GRAVITY_FORCE_FACTOR_Y*Math.floor(t.r),t.xspeed+=1*this.PRIVATE_GRAVITY_FORCE_FACTOR_X*Math.floor(t.r)):(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X),0!==this.options.gravityAngleVariance&&(t.xspeed+=(2*Math.random()-1)*t.yspeed*this.options.gravityAngleVariance),t.y+=Math.floor(t.yspeed),t.x+=Math.floor(t.xspeed),t.draw(),!1)},t.prototype.positiveMin=function(t,e){var i=0;return(i=t<e?t<=0?e:t:e<=0?t:e)<=0?1:i},t.prototype.REFLECTION_NONE=function(){this.context.fillStyle=this.options.fillStyle,this.context.fill()},t.prototype.REFLECTION_MINIATURE=function(t){var e=Math.max((t.x-this.options.reflectionDropMappingWidth)/this.options.reflectionScaledownFactor,0),i=Math.max((t.y-this.options.reflectionDropMappingHeight)/this.options.reflectionScaledownFactor,0),n=this.positiveMin(2*this.options.reflectionDropMappingWidth/this.options.reflectionScaledownFactor,this.reflected.width-e),o=this.positiveMin(2*this.options.reflectionDropMappingHeight/this.options.reflectionScaledownFactor,this.reflected.height-i),r=Math.max(t.x-1.1*t.r,0),a=Math.max(t.y-1.1*t.r,0);this.context.drawImage(this.reflected,Math.floor(e),Math.floor(i),Math.floor(n),Math.floor(o),Math.floor(r),Math.floor(a),2*t.r,2*t.r)},t.prototype.COLLISION_SIMPLE=function(t,e){for(var i,n,o,r=e;null!=r;){var a=r.drop,s=t.r+a.r,h=t.x-a.x,c=t.y-a.y;if(Math.abs(h)<s&&Math.abs(c)<s&&Math.sqrt(Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2))<t.r+a.r){i=a;break}r=r.next}i&&(t.y>i.y?(n=t,o=i):(n=i,o=t),this.clearDrop(o),this.clearDrop(n,!0),this.matrix.remove(n),o.draw(),o.colliding=n,o.collided=!0)},t.prototype.prepareBackground=function(){this.background=document.createElement("canvas"),this.background.width=this.canvas.width,this.background.height=this.canvas.height,this.clearbackground=document.createElement("canvas"),this.clearbackground.width=this.canvas.width,this.clearbackground.height=this.canvas.height;var t=this.background.getContext("2d");t.drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.canvas.width,this.canvas.height),(t=this.clearbackground.getContext("2d")).drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.canvas.width,this.canvas.height),!isNaN(this.options.blur)&&this.options.blur>=1&&this.stackBlurCanvasRGB(this.canvas.width,this.canvas.height,this.options.blur)},t.prototype.stackBlurCanvasRGB=function(t,e,n){var o=[[0,9],[1,11],[2,12],[3,13],[5,14],[7,15],[11,16],[15,17],[22,18],[31,19],[45,20],[63,21],[90,22],[127,23],[181,24]];n|=0;var r,a,s,h,c,l,d,u,p,g,f,m,y,v,x,w,b,R,I,M,S=this.background.getContext("2d"),A=S.getImageData(0,0,t,e),C=A.data,E=n+1,_=E*(E+1)/2,T=new i,O=new i,D=T;for(s=1;s<2*n+1;s++)D=D.next=new i,s===E&&(O=D);D.next=T;var F=null,q=null;d=l=0;for(var k,N=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259][n],P=0;P<o.length;++P)if(n<=o[P][0]){k=o[P-1][1];break}for(a=0;a<e;a++){for(v=x=w=u=p=g=0,f=E*(b=C[l]),m=E*(R=C[l+1]),y=E*(I=C[l+2]),u+=_*b,p+=_*R,g+=_*I,D=T,s=0;s<E;s++)D.r=b,D.g=R,D.b=I,D=D.next;for(s=1;s<E;s++)h=l+((t-1<s?t-1:s)<<2),u+=(D.r=b=C[h])*(M=E-s),p+=(D.g=R=C[h+1])*M,g+=(D.b=I=C[h+2])*M,v+=b,x+=R,w+=I,D=D.next;for(F=T,q=O,r=0;r<t;r++)C[l]=u*N>>k,C[l+1]=p*N>>k,C[l+2]=g*N>>k,u-=f,p-=m,g-=y,f-=F.r,m-=F.g,y-=F.b,h=d+((h=r+n+1)<t-1?h:t-1)<<2,u+=v+=F.r=C[h],p+=x+=F.g=C[h+1],g+=w+=F.b=C[h+2],F=F.next,f+=b=q.r,m+=R=q.g,y+=I=q.b,v-=b,x-=R,w-=I,q=q.next,l+=4;d+=t}for(r=0;r<t;r++){for(x=w=v=p=g=u=0,f=E*(b=C[l=r<<2]),m=E*(R=C[l+1]),y=E*(I=C[l+2]),u+=_*b,p+=_*R,g+=_*I,D=T,s=0;s<E;s++)D.r=b,D.g=R,D.b=I,D=D.next;for(c=t,s=1;s<E;s++)l=c+r<<2,u+=(D.r=b=C[l])*(M=E-s),p+=(D.g=R=C[l+1])*M,g+=(D.b=I=C[l+2])*M,v+=b,x+=R,w+=I,D=D.next,s<e-1&&(c+=t);for(l=r,F=T,q=O,a=0;a<e;a++)C[h=l<<2]=u*N>>k,C[h+1]=p*N>>k,C[h+2]=g*N>>k,u-=f,p-=m,g-=y,f-=F.r,m-=F.g,y-=F.b,h=r+((h=a+E)<e-1?h:e-1)*t<<2,u+=v+=F.r=C[h],p+=x+=F.g=C[h+1],g+=w+=F.b=C[h+2],F=F.next,f+=b=q.r,m+=R=q.g,y+=I=q.b,v-=b,x-=R,w-=I,q=q.next,l+=t}S.putImageData(A,0,0)},n.prototype.update=function(t,e){if(t.gid){if(!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;if(this.matrix[t.gmx][t.gmy].remove(t),e)return null;if(t.gmx=Math.floor(t.x/this.resolution),t.gmy=Math.floor(t.y/this.resolution),!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;this.matrix[t.gmx][t.gmy].add(t);var i=this.collisions(t);if(i&&null!=i.next)return i.next}else{if(t.gid=Math.random().toString(36).substr(2,9),t.gmx=Math.floor(t.x/this.resolution),t.gmy=Math.floor(t.y/this.resolution),!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;this.matrix[t.gmx][t.gmy].add(t)}return null},n.prototype.collisions=function(t){var e=new o(null),i=e;return e=this.addAll(e,t.gmx-1,t.gmy+1),e=this.addAll(e,t.gmx,t.gmy+1),e=this.addAll(e,t.gmx+1,t.gmy+1),i},n.prototype.addAll=function(t,e,i){if(e>0&&i>0&&e<this.xc&&i<this.yc)for(var n=this.matrix[e][i];null!=n.next;)n=n.next,t.next=new o(n.drop),t=t.next;return t},n.prototype.remove=function(t){this.matrix[t.gmx][t.gmy].remove(t)},o.prototype.add=function(t){for(var e=this;null!=e.next;)e=e.next;e.next=new o(t)},o.prototype.remove=function(t){for(var e=this,i=null;null!=e.next;)i=e,(e=e.next).drop.gid===t.gid&&(i.next=e.next)},window.getOffset=function(t){var e,i,n,o;"string"==typeof t&&(t=document.getElementById(t));var r=t;if(r)return r.getClientRects().length?(n=r.getBoundingClientRect(),i=(e=r.ownerDocument).documentElement,o=e.defaultView,{top:n.top+o.pageYOffset-i.clientTop,left:n.left+o.pageXOffset-i.clientLeft}):{top:0,left:0}},{RainyDay:t}}(),S={startRaining:function(){var t=new Image;t.crossOrigin="Anonymous",t.onload=function(){new M.RainyDay({image:t,blur:0}).rain([[3,3,.1]],33)},t.src="https://i.imgur.com/wvErRZP.jpg"}},A=(r=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-256,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;return r(t,e)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-256,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;return r(t,e)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-256,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;return r(t,e)},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-180,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180;return r(t,e)},l=function(){return Math.random()},{generate:function(t,e,i){var n=[];if(t.hasChildNodes())for(;t.childNodes.length>=1;)t.removeChild(t.firstChild);for(var o=0;o<10;o+=1)n.push(d());!function t(e,i,n){for(var o=0;o<n.length;o+=1){var r=n[o];r.data.a+=r.data.speed;var a="translateX( ".concat(r.data.x,"px )         translateY( ").concat(r.data.y,"px )         translateZ( ").concat(r.data.z,"px )         rotateY( ").concat(-i,"deg )         rotateX( ").concat(-e,"deg )         scale( ").concat(r.data.s,")");r.style.transform=a}requestAnimationFrame(t)}(e,i,Array.from(document.querySelectorAll(".cloudLayer")))},createCloud:d=function(){var t=document.createElement("div");t.className="cloudBase";var e="translateX( ".concat(a(),"px )       translateY( ").concat(s(),"px )       translateZ( ").concat(h(),"px )");t.style.transform=e,world.appendChild(t);for(var i=0;i<4+Math.round(10*Math.random());i+=1){var n=document.createElement("img");n.className="cloudLayer",n.src="../src/images/cloud.png",n.data={x:a(),y:s(),z:h(),a:c(),s:l()},e="translateX( ".concat(a(),"px )       translateY( ").concat(s(),"px )       translateZ( ").concat(h(),"px )       rotateZ( ").concat(c(),"deg )       scale( ").concat(l()," )"),n.style.transform=e,t.appendChild(n)}return t}}),C={initializeTranformations:function(){var t=document.getElementById("world");A.generate(t,0,0)}},E=(u=/RAIN/g,p=/DRIZZLE/g,g=/WIND/g,f=/SUN/g,m=/CLOUDS/g,y=/CLEAR/g,v=/SNOW/g,x=/MIST/g,w=/FOG/g,b=function(t){return t<10&&(t="0".concat(t)),t},{startApp:function(){R.getData("London,uk"),R.getDataF("London,uk"),document.querySelector("#search").addEventListener("click",(function(){var t;t=document.querySelector("#location").value,R.getData(t),R.getDataF(t)})),I.startSnowing()},currentJsonData:function(t){if(console.log(t),"number"==typeof t){var e="".concat(document.querySelector(".temp").textContent,"  ").concat(t,"F");document.querySelector(".temp").textContent=e}else{var i=t.weather[0].main;document.querySelector(".location").textContent=t.name,document.querySelector(".description").textContent=t.weather[0].description,document.querySelector(".temp").textContent="".concat(t.main.temp,"°c"),(n=i).toUpperCase().match(u)||n.toUpperCase().match(p)?(document.querySelector(".snow").style.display="none",document.querySelector("body").backgroundImage="none",S.startRaining()):function(t){return t.toUpperCase().match(g)}(i)?(document.querySelector(".snow").style.display="none",document.querySelector("body").backgroundImage="none",C.initializeTranformations(),document.querySelectorAll(".cloudLayer").forEach((function(t){t.classList.add(".wind-rotation")}))):function(t){return t.toUpperCase().match(f)}(i)?(null!==document.querySelector(".snow")&&(document.querySelector(".snow").style.display="none"),null!==document.querySelector("#rainy-canvas")&&(document.querySelector("#rainy-canvas").style.display="none"),document.querySelector("body").backgroundImage="url(./images/sunny.jpeg)"):function(t){return t.toUpperCase().match(m)}(i)?(console.log("clouds@"),null!==document.querySelector(".snow")&&(document.querySelector(".snow").style.display="none"),null!==document.querySelector("#rainy-canvas")&&(document.querySelector("#rainy-canvas").style.display="none"),document.querySelector("body").backgroundImage="none",document.querySelectorAll(".cloudLayer").forEach((function(t){t.style.display="block"})),C.initializeTranformations()):function(t){return t.toUpperCase().match(y)}(i)?(null!==document.querySelector(".snow")&&(document.querySelector(".snow").style.display="none"),document.querySelector("body").backgroundImage="none",null!==document.querySelector("#rainy-canvas")&&(document.querySelector("#rainy-canvas").style.display="none"),document.querySelectorAll(".cloudLayer").forEach((function(t){t.style.display="none"}))):function(t){return t.toUpperCase().match(v)||t.toUpperCase().match(x)||t.toUpperCase().match(w)}(i)&&(console.log("Snowinbg"),null!==document.querySelector("#rainy-canvas")&&(document.querySelector("#rainy-canvas").style.display="none"),document.querySelectorAll(".cloudLayer").forEach((function(t){t.style.display="none"})),document.querySelector("body").backgroundImage="url(./images/bg.jpg)",document.querySelector(".snow").style.display="block")}var n;!function t(){var e=new Date,i=e.getHours(),n=e.getMinutes(),o=e.getSeconds();n=b(n),o=b(o),document.querySelector(".currenttime").innerHTML="".concat(i,":").concat(n,":").concat(o),setTimeout((function(){t()}),500)}()}});E.startApp()}]);