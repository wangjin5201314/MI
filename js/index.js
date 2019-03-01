window.onload = function() {
//下拉推荐开始
let daohang = document.querySelectorAll(".list-text>i");
let xialatuijian = document.querySelector(".daohangtuijian");
let xialaul = document.querySelectorAll(".daohangtuijian ul");
daohang.forEach(function(val,index) {
	val.onmouseover = function() {
		xialatuijian.style.height = "230px";
		xialaul.forEach((ele,key)=>{
			ele.classList.remove("active");
		});
		xialaul[index].classList.add("active");
	}
	val.onmouseout = function() {
		xialatuijian.style.height = "0px";
	}
});
xialatuijian.onmouseover = function(){
	xialatuijian.style.height = "230px";
}
xialatuijian.onmouseout = function(){
	xialatuijian.style.height = "0px";
}
//下拉推荐结束
//搜索开始
let xiala = document.querySelector(".sousuo .sousuoxiala");
let shuruk = document.querySelector(".sousuo input");
let sousuobox = document.querySelector(".sousuo-box")
let sousuo = document.querySelector(".sousuo");
let Neirong = document.querySelector(".sousuo-neirong");
shuruk.onfocus = function() {
	xiala.style.display = "block";
	sousuobox.style.borderColor = "red";
	sousuo.style.borderRightColor = "red";
	Neirong.style.display = "none";
}
shuruk.onblur = function() {
	xiala.style.display = "none";
	sousuobox.style.borderColor = "#E0E0E0";
	sousuo.style.borderRightColor = "#E0E0E0";
	Neirong.style.display = "block";
}
//搜索结束
//轮播图开始
let tulis = document.querySelectorAll(".lunfan-img-box>ul>li");
let zuolis = document.querySelector(".lunfan-zuojiantou-box");
let youlis = document.querySelector(".lunfan-youjiantou-box");
let dianlis = document.querySelectorAll(".lunfan-dian-box>div>div");
let boxlis = document.querySelector(".lunfan");
let lunboN = 0;
let lunboSize = dianlis.length - 1;
function lunboMove() {
	if (lunboN > lunboSize) {
		lunboN = 0;
	}
	if (lunboN < 0) {
		lunboN = lunboSize;
	}
	tulis.forEach(function(val, index) {
		val.classList.remove("active");
		dianlis[index].classList.remove("hd");
	});
	tulis[lunboN].classList.add("active");
	dianlis[lunboN].classList.add("hd");
}
let time = setInterval(function() {
	lunboN++;
	lunboMove();
}, 2000); 
boxlis.onmouseover = function() {
	clearInterval(time);
}
boxlis.onmouseout = function() {
	time = setInterval(function() {
		lunboN++;
		lunboMove();
	}, 2000);
}
dianlis.forEach((ele, key) => {
	ele.onclick = function() {
		lunboN = key;
		lunboMove();
	}
}); youlis.onclick = function() {
	lunboN++;
	lunboMove();
}
zuolis.onclick = function() {
	lunboN--;
	lunboMove();
}
//轮播结束

	let endTime = "2019-03-1 18:00:00";
	let endDate = new Date(endTime);
	let endTimes = parseInt(endDate.getTime()/1000);

	function setTime(){
		let nowData = new Date();
		let nowTime = parseInt(nowData.getTime()/1000);

		let chaTime = endTimes - nowTime;

		let hours = Math.floor(chaTime/3600);
		let minutes = Math.floor(chaTime % 3600/60);
		let seconds = chaTime % 60;
		
		document.querySelector(".shangou-bottom-left .end-time .hours").innerHTML = zero(hours);
		document.querySelector(".shangou-bottom-left .end-time .minutes").innerHTML = zero(minutes);
		document.querySelector(".shangou-bottom-left .end-time .seconds").innerHTML = zero(seconds);
	}
	function zero(nums) {
		return nums >= 10 ? nums : "0" + nums;
	}
	setTime();
	setInterval(setTime,1000);



//闪购开始时
let sgleft = document.querySelector(".shangou-top-ic .left");
let sgright = document.querySelector(".shangou-top-ic .right");
let sgbox = document.querySelector(".shangou-bottom-right ul");
let sglinum = document.querySelectorAll(".shangou-bottom-right ul li");
let sgN = 0;
let sgSize = sglinum.length - 4;
function shangouMove() {
	if (sgN > sgSize) {
		sgN = sgSize;
	}
	if (sgN < 0) {
		sgN = 0;
	} 
	if (sgN == sgSize) {
		sgright.style.cursor = "default";
		sgright.style.color = "#e0e0e0";
	}else{
		sgright.style.cursor = "pointer";
		sgright.style.color = "#333333";
	}
	if(sgN == 0) {
		sgleft.style.cursor = "default";
		sgleft.style.color = "#e0e0e0";
	}else{
		sgleft.style.cursor = "pointer";
		sgleft.style.color = "#333333";
	}
	sgbox.style.left = -248 * sgN + "px";
}
sgright.onclick = function() {
	sgN = sgN + 4;
	shangouMove();
}
sgleft.onclick = function() {
	sgN = sgN - 4;
	shangouMove();
}
//闪购结束
//楼层开始
function selectcard(top, bottom) {
	let toplist = document.querySelectorAll(top);
	let bottomlist = document.querySelectorAll(bottom);
	toplist.forEach((val, index) => {
		val.onclick = function() {
			toplist.forEach((ele, key) => {
				ele.classList.remove("xz");
				bottomlist[key].style.display = "none";
			});
			toplist[index].classList.add("xz");
			bottomlist[index].style.display = "block";
		}
	});
}
selectcard(".first-floor .jiadian-top-right li", ".first-floor .jiadian-bottom .right ul");
selectcard(".sencond-floor .jiadian-top-right li", ".sencond-floor .jiadian-bottom .right ul"); 
selectcard(".third-floor .jiadian-top-right li", ".third-floor .jiadian-bottom .right ul"); 
selectcard(".fourth-floor .jiadian-top-right li", ".fourth-floor .jiadian-bottom .right ul");
selectcard(".fifth-floor .jiadian-top-right li", ".fifth-floor .jiadian-bottom .right ul");
//楼层结束
//为你推介开始
let zlist = document.querySelector(".wntj-top-ic .left");
let ylist = document.querySelector(".wntj-top-ic .right");
let bottomlist = document.querySelector(".wntj-bottom>ul");
let n = 0;
ylist.onclick = function() {
	n++;
	move1();
}
zlist.onclick = function() {
	n--;
	move1();
}
move1 = function() {
	if (n > 2) {
		n = 2;
		return;
	} else if (n < 0) {
		n = 0;
		return;
	} else {
		bottomlist.style.left = -n * 1226 + "px";
		ylist.style.cursor = "pointer";
		ylist.style.color = "#333333";
		zlist.style.cursor = "pointer";
		zlist.style.color = "#333333";
	}
	if (n == 2) {
		ylist.style.cursor = "default";
		ylist.style.color = "#e0e0e0";
	} else if (n == 0) {
		zlist.style.cursor = "default";
		zlist.style.color = "#e0e0e0";
	}
}
//为你推介结束
//内容开始
function neirong(S) {
	let zjianlist = document.querySelector(S + " .icz");
	let yjianlist = document.querySelector(S + " .icy");
	let zhongjianlist = document.querySelector(S + " .bigBoxa");
	let yuanlist = document.querySelectorAll(S + " .neirong-dian-box>div i");
	let m = 0;
	let size = yuanlist.length - 1;
	function move() {
		if (m > size) {
			m = size;
			return;
		} else if (m < 0) {
			m = 0;
			return;
		} else {
			zhongjianlist.style.left = -m * 296 + "px";
			yjianlist.style.cursor = "pointer";
			zjianlist.style.cursor = "pointer";
		}
		if (m == size) {
			yjianlist.style.cursor = "default";
		} else if (m == 0) {
			zjianlist.style.cursor = "default";
		}
		yuanlist.forEach(function(val) {
			val.classList.remove("xz");
			yuanlist[m].classList.add("xz");
		});
	}
	yjianlist.onclick = function() {
		m++;
		move();
	}
	zjianlist.onclick = function() {
		m--;
		move();
	}
	for (let i = 0; i <= size; i++) {
		yuanlist[i].onclick = function() {
			m = i;
			move();
		}
	}
	// 	yuanlist.forEach((ele, key)=>{
	// 		ele.onclick = function() {
	// 			zhongjianlist.style.left = -296 * key + "px";
	// 			yuanlist.forEach((ele1, key1)=>{
	// 				ele1.classList.remove("xz");
	// 			});
	// 			yuanlist[key].classList.add("xz");
	// 		}
	// 	});
}
neirong(".Box1"); neirong(".Box2"); neirong(".Box3"); neirong(".Box4");
//内容结束
//锚点开始
let maodian = document.querySelector(".maodian");
let shouji = document.querySelector(".shouji");
let root = document.documentElement;
if (root.scrollTop >= shouji.offsetTop) {
	maodian.style.display = "block";
}
window.onscroll = function() {
	if (root.scrollTop >= shouji.offsetTop) {
		setTimeout(function() {
			if (root == document.documentElement && root.scrollTop != 0) {
				maodian.style.display = "block";
			}
		}, 1000);
	} else if (root.scrollTop == 0) {
		maodian.style.display = "none";
	}
}
//锚点结束
}
