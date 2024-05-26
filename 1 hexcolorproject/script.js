let colors = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		let btn = document.getElementById("btn");
		let color = document.querySelector(".color");
		let simpleBtn = document.getElementById("simple");
		let hexBtn = document.getElementById("hex");
		let isHexMode = true;

		btn.addEventListener("click", function() {
			if (isHexMode) {
				let multicolors = "#";
				for (let i = 0; i < 6; i++) {
					multicolors += colors[getrandomnumber()];
				}
				color.textContent = multicolors;
				document.body.style.backgroundColor = multicolors;
			} else {
				document.body.style.backgroundColor = "white";
				color.textContent = "#ffffff";
			}
		});

		simpleBtn.addEventListener("click", function() {
			isHexMode = false;
			document.body.style.backgroundColor = "white";
			color.textContent = "#ffffff";
		});

		hexBtn.addEventListener("click", function() {
			isHexMode = true;
			let multicolors = "#";
			for (let i = 0; i < 6; i++) {
				multicolors += colors[getrandomnumber()];
			}
			color.textContent = multicolors;
			document.body.style.backgroundColor = multicolors;
		});

		function getrandomnumber() {
			return Math.floor(Math.random() * colors.length);
		}