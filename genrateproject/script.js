const quotes = [
	"The purpose of our lives is to be happy. - Dalai Lama",
	"In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
	"The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
	"Life is what happens when you're busy making other plans. - John Lennon",
	"Life is really simple, but we insist on making it complicated. - Confucius",
	"Life is not measured by the number of breaths we take, but by the moments that take our breath away. - Maya Angelou",
	"Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
	"Life is a journey that must be traveled no matter how bad the roads and accommodations. - Oliver Goldsmith",
	"The purpose of our lives is to add value to the people of this generation and those that follow. - Buckminster Fuller",
	"Life is short, and it's up to you to make it sweet. - Sarah Louise Delany"
   ];
   
   const quoteForm = document.querySelector('.quote-form');
   const quoteText = document.querySelector('.quote-text');
   
   quoteForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const amount = parseInt(document.getElementById('amount').value);
	let randomQuotes = '';
	for (let i = 0; i < amount; i++) {
	  const randomIndex = Math.floor(Math.random() * quotes.length);
	  randomQuotes += `<p>${quotes[randomIndex]}</p>`;
	}
	quoteText.innerHTML = randomQuotes;
   });