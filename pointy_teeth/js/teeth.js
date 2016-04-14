// Business Logic

// UI Logic
// $(document).ready();

	window.onload = (function(){
		var canvas = document.getElementById("c");
		c = canvas.getContext("2d"),
		height = canvas.height,
		width = canvas.width,
		key = [];

		document.addEventListener("keydown", function(e){ 
			key[e.keycode] = true;
		});

		document.addEventListener("keyup", function(e) { 
			delete key[e.keyCode];
		});

		RIGHT=39;
		UP=38;
		DOWN=40;
		LEFT=37;

		player = {
			x:width/2 - 32,
			y:height - 9,
			update: function(){
				if (key[RIGHT]){
					this.x += 4;
				}
				if (key[LEFT]){
					this.x -= 4;
				}
			},

			render: function(){
				c.strokeRect(this.x,this.y,64,16)
			}
		}
		player.update();
	})

	// player.update();

	function render(){
		c.fillStyle = "gold";
		c.fillRect(0,0, width,height)
		c.fillStyle = "black"
	}
	function run(){
		update();
		render();
		requestAnimationFrame(run);
	}
	run();

