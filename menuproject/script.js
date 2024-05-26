const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
	   const category = e.currentTarget.dataset.id;
	   menuItems.forEach(item => {
		  if (category === 'all')
		   {
			 item.style.display = 'flex';
		  } 
		  else {
			 if (item.dataset.category === category) {
				item.style.display = 'flex';
			 } else {
				item.style.display = 'none';
			 }
		  }
	   });
    });
});