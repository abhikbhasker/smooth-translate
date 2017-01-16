window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){setTimeout(f, 1000/60)}

var tslide = document.getElementById('tslide');
var bslide = document.getElementById('bslide');
//var hslide=document.getElementById('hslide');
var bckgr=document.getElementById('bckgr');
var block4=document.getElementById('block4');
var block1=document.getElementById('block1');
var block2=document.getElementById('block2');
var block3=document.getElementById('block3');

var circle=document.getElementById('circle');
 var data=0;
var inrht=window.innerHeight;
var docht=document.body.scrollheight;
var inrwd=window.innerWidth;
var tme;
var margin=0;
function parallaxbubbles(){
	var scrolltop = window.pageYOffset
	//bslide.style.top = 50+scrolltop * .1 + '%'; 
	//tslide.style.top =-scrolltop * .1 + '%'; 
   // bckgr.style.left = -scrolltop * .001 + '%';
  //  block1.style.left =20-(scrolltop) * .02 + '%';
  //  block2.style.left =20-(scrolltop) * .03 + '%';
  //  block3.style.left =20-(scrolltop) * .05 + '%';
    //block4.style.left =20-(scrolltop) * .07 + '%';
    
	circle.style.left= 10+(scrolltop) * .05 +margin+ '%';
/*	if(scrolltop*.05<=40)
{
	circle.style.left= 10+scrolltop * .05 + '%';
	circle.style.top= 50+Math.sqrt(400-Math.pow((-20+scrolltop*.05),2))+'%';
	}
	else if(scrolltop*.05>40)
		{
		circle.style.left=50-(scrolltop-40/.05)*.05+'%';
		circle.style.top=50+'%';
		}*/
		
		tme=setInterval(function(){requestAnimationFrame(extra)},1000/60);
		//setTimeout(function(){clearInterval(tme)},300);
}

function extra(){
	  var scrolltop=window.pageYOffset;
	data=data+.01;
	margin=data;
	if(data<=.7)
   circle.style.left=scrolltop+margin+data+'%';
   else{
       data=0;
       clearInterval(tme);
     }
}
function check()
{
	window.scrollby(0,1000);
}

window.addEventListener('scroll', function(){
	requestAnimationFrame(parallaxbubbles);
}, false)





