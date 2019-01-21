let imgboxlist = document.querySelectorAll(".zhongjian .left .tu-box li");
let leftlist = document.querySelector(".zhongjian .left .zuojiantou");
let rightlist = document.querySelector(".zhongjian .left .youjiantou");
let ganglist = document.querySelectorAll(".zhongjian .left .dian-box .line");
let boxlist = document.querySelector(".zhongjian .left");
let xiangqingN = 0;
let xqSize = ganglist.length - 1;
function xiangqingMove() {
	if (xiangqingN > xqSize) {
		xiangqingN = 0;
	}
	if (xiangqingN < 0) {
		xiangqingN = xqSize;
	}
	imgboxlist.forEach(function(val, index) {
		val.classList.remove("xz");
		ganglist[index].classList.remove("active");
	});
	imgboxlist[xiangqingN].classList.add("xz");
	ganglist[xiangqingN].classList.add("active");
}
let time = setInterval(function() {
	xiangqingN++;
	xiangqingMove();
}, 2000);
boxlist.onmouseover = function() {
	clearInterval(time);
}
boxlist.onmouseout = function() {
	time = setInterval(function() {
		xiangqingN++;
		xiangqingMove();
	}, 2000);
}
ganglist.forEach((ele, key) => {
	ele.onclick = function() {
		xiangqingN = key;
		xiangqingMove();
	}
});
rightlist.onclick = function() {
	xiangqingN++;
	xiangqingMove();
}
leftlist.onclick = function() {
	xiangqingN--;
	xiangqingMove();
}

