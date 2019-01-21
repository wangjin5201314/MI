//选项卡开始
function tupian(tu) {
	let tuanniu = document.querySelectorAll(tu + "  .xia div img");
	let bigtu = document.querySelectorAll(tu + " .shang div img");
	tuanniu.forEach((val, index) => {
		val.onmouseover = function() {
			tuanniu.forEach((ele, key) => {
				ele.classList.remove("xz");
				bigtu[key].style.display = "none";
			});
			tuanniu[index].classList.add("xz");
			bigtu[index].style.display = "block";
		}
	});
}
tupian(".box1");
tupian(".box2");
tupian(".box3");
//猜你喜欢开始
let dian = document.querySelectorAll(".dian>li");
console.log(dian)
let ul = document.querySelector(".xihuan .bottom ul");
console.log(ul)
let n = 0;
dian.forEach((val, index) => {
	val.onclick = function() {
		n = index;
		move();
	}
});

function move() {
	if (n > 1) {
		n = 1;
	} else if (n < 0) {
		n = 0;
	} else {
		ul.style.left = -n * 992 + "px";
	}
	dian.forEach(function(val, key) {
		val.classList.remove("xz");
		dian[key].style.cursor = "pointer";
	});
	dian[n].classList.add("xz");
	dian[n].style.cursor = "default";

}
