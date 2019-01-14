window.onload = function(){
	function selectcard(top,bottom){
		let toplist = document.querySelectorAll(top);
		let bottomlist = document.querySelectorAll(bottom);
			toplist.forEach((val, index)=>{
				val.onclick = function() {
					toplist.forEach((ele, key)=>{
						ele.classList.remove("xz");
						bottomlist[key].style.display="none";
					});
					toplist[index].classList.add("xz");
					bottomlist[index].style.display="block";
				}
			 });
		}
selectcard(".first-floor .jiadian-top-right li",".first-floor .jiadian-bottom .right ul");
selectcard(".sencond-floor .jiadian-top-right li",".sencond-floor .jiadian-bottom .right ul");
selectcard(".third-floor .jiadian-top-right li",".third-floor .jiadian-bottom .right ul");
selectcard(".fourth-floor .jiadian-top-right li",".fourth-floor .jiadian-bottom .right ul");
selectcard(".fifth-floor .jiadian-top-right li",".fifth-floor .jiadian-bottom .right ul");
}