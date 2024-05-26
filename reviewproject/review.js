const reviews = [
	{
	  name: 'Sundar Pichai',
	  job: 'CEO of Google',
	  img: 'sundar.jpeg',
	  text: "Sundar Pichai has been widely regarded as a visionary leader, steering Google through various innovations and expansions. His strategic decisions have often aligned with Google's mission to organize the world's information and make it universally accessible and useful."
	},
	{
	  name: 'Julie Sweet',
	  job: 'CEO of Accenture',
	  img: 'jully.jpeg',
	  text: 'Julie Sweet is applauded for her strong leadership and strategic acumen, effectively guiding Accenture through digital transformations and expanding its global footprint. Under her leadership, Accenture has remained at the forefront of technology and consulting services.'
	},
	{
	  name: 'Rajesh Gopinathan',
	  job: 'CEO of TCS',
	  img: 'rajesh.jpeg',
	  text: 'Rajesh Gopinathan is respected for his steady leadership and focus on innovation and digitalization. He has played a key role in driving TCS\'s growth and maintaining its position as a global leader in IT services and consulting.Prior to joining IIT Bombay,'
	},
	{
	  name: 'Arvind Krishna',
	  job: 'CEO of IBM',
	  img: 'imb.jpeg',
	  text: 'Arvind Krishna is known for his forward-thinking approach and emphasis on emerging technologies like cloud computing and artificial intelligence. His efforts to reposition IBM as a leading hybrid cloud and AI company have been commendable.'
	},
	{
	  name: 'Alison Rose',
	  job: 'CEO of NatWest Group',
	  img: 'natwest.jpeg',
	  text: 'Alison Rose is recognized for her strategic initiatives aimed at modernizing NatWest Group and enhancing its digital capabilities. She has been instrumental in driving the bank\'s sustainability agenda and fostering innovation.Alison is an entrepreneurial, transformational, and impact-driven'
	},
	{
	  name: 'Thierry Delaporte',
	  job: 'CEO of Wipro Limited',
	  img: 'wipro.jpeg',
	  text: 'Thierry Delaporte has brought a fresh perspective to Wipro, focusing on strengthening its digital capabilities and client-centric approach. His leadership is marked by a commitment to driving growth and delivering value to stakeholders.'
	}
   ];
   

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
	updateReview();
});

function updateReview() {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

nextBtn.addEventListener('click', () => {
	currentItem = (currentItem + 1) % reviews.length;
	updateReview();
});

prevBtn.addEventListener('click', () => {
	currentItem = (currentItem - 1 + reviews.length) % reviews.length;
	updateReview();
});

randomBtn.addEventListener('click', () => {
	currentItem = Math.floor(Math.random() * reviews.length);
	updateReview();
});
