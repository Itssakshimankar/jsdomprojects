let btnIncrease = document.getElementById("btn-increase");
		let btnDecrease = document.getElementById("btn-decrease");
		let btnReset = document.getElementById("btn-reset");
		let valueElement = document.getElementById("value");
		let count = 0;

		btnIncrease.addEventListener("click", function() {
			count++;
			valueElement.style.color = "#2ecc71";
			updateValue();
		});

		btnDecrease.addEventListener("click", function() {
			count--;
			valueElement.style.color = "#e74c3c";
			updateValue();
		});

		btnReset.addEventListener("click", function() {
			count = 0;
			valueElement.style.color = "#ecf0f1";
			updateValue();
		});

		function updateValue() {
			valueElement.textContent = count;
		}