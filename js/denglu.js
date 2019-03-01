let ZH = document.querySelectorAll(".top ul li");
let SM = document.querySelectorAll(".bottom ul li");
ZH.forEach(function(val, index) {
	console.log(val);
	//全部添加点击事件
	val.onclick = function() {
		SM.forEach(function(val, key) {
			//去掉上面所有li的选择状态
			ZH[key].style.color = "rgba(0,0,0,0.6)";
			//全部隐藏下面的li,
			val.style.display = "none";
		});
		//显示对应的下面的li
		SM[index].style.display = "block";
		//给对应的上面的li上色
		ZH[index].style.color = "#ff6700";
	}
});

let phoneObj = document.querySelector(".phone");
let password = document.querySelector(".password");
phoneObj.onblur = function(){
	let val = this.value;
	if(val.match(/^1(3\d|4[07]|5\d|7[0167]|8\d)\d{8}$/)){
		this.nextElementSibling.innerHTML = "对";
		this.nextElementSibling.className = "success";
	}else{
		this.nextElementSibling.innerHTML = "错";
		this.nextElementSibling.className = "error";
	}
}
password.onblur = function(){
	let val = this.value;
	if(val.match(/^[A-z0-9_]{8,}$/)){
		this.nextElementSibling.innerHTML = "对";
		this.nextElementSibling.className = "success";
	}else{
		this.nextElementSibling.innerHTML = "错";
		this.nextElementSibling.className = "error";
	}
}

