	const elem = document.getElementById("canvas");
	const ctx = elem.getContext("2d");
	const div = document.getElementById('precentage');
 
	function drawCircle(x){
  		ctx.beginPath();
  		ctx.arc(x,10,10,0,2*Math.PI);
  		ctx.fillStyle="#35BBE0";
  		ctx.fill();
	}
	let x = 0;
	setInterval(function(){ 
  		if(x < 200) {
  		ctx.clearRect(0,0,200,20);
  		drawCircle(x%200);
  		x++;
  		div.innerText = `${Math.floor(x/2)}%`;
  		}
  		if(x === 200) {
    	elem.style.display = 'none';
		div.style.display = 'none';
		document.getElementById('header').style.opacity = '1';
		document.getElementById('main').style.opacity = '1';
		document.getElementById('footer').style.opacity = '1'; 
		clearInterval();
  		};
	}, 10);
