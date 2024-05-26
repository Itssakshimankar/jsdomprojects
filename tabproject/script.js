const buttons = document.querySelectorAll('.tab-btn');
		const contents = document.querySelectorAll('.content');

		buttons.forEach(button => {
			button.addEventListener('click', () => {
				buttons.forEach(btn => btn.classList.remove('active'));
				contents.forEach(content => content.classList.remove('active'));

				button.classList.add('active');
				document.getElementById(button.dataset.id).classList.add('active');
			});
		});