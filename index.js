(function animation() {
	const elem = document.getElementById("canvas");
	const ctx = elem.getContext("2d");
	const div = document.getElementById('precentage');
 
	ctx.beginPath();
	ctx.moveTo(10,0);
	ctx.lineTo(10,200);
	ctx.stroke();

	function drawCircle(x){
  		ctx.beginPath();
  		ctx.arc(x,10,10,0,2*Math.PI);
  		ctx.fillStyle="#35BBE0";
  		ctx.fill();
	}

	let num = 0;
	let x = 0;

	setInterval(function(){ 
  		if(num < 100) {
  		ctx.clearRect(0,0,200,200);
  		drawCircle(x%200);
  		x++;
  		num+=0.5;
  		div.innerText = `${Math.floor(num)}%`;
  		}
  		if(num === 100) {
    	elem.style.display = 'none';
		div.style.display = 'none';
		document.getElementById('header').style.display = '';
		document.getElementById('main').style.display = '';
		document.getElementById('footer').style.display = ''; 
		clearInterval();
  		};
	}, 20);
}());