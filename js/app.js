import questions from 'questions';
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const submitBtn = document.getElementById("submit");

const questions = [
	{
		question: "Smoking kills. If you're killed, you've lost a very important part of your life.",
		answers: {
			a: "Elton John",
			b: "Brooke Shields",
			c: "Robin Williams"
		},
		correctAnswer: "b"
	},
	{
		question: "Roses are red, violets are blue, I'm schizophrenic, and so am I.",
		answers: {
			a: "Oscar Levante",
			b: "William Shakespeare",
			c: "Jim Carrey"
		},
		correctAnswer: "a"
	},
	{
		question: "Life is hard. After all, it kills you.",
		answers: {
			a: "Katherine Hepburn",
			b: "Bob Marley",
			c: "Michael Jordan"
		},
		correctAnswer: "a"
	},
	{
		question: "I have an unfortunate personality.",
		answers: {
			a: "Diane Keaton",
			b: "Lady Diana",
			c: "Orson Welles"
		},
		correctAnswer: "c"
	},
	{
		question: "Better to live one year as a tiger, than a hundred as a sheep.",
		answers: {
			a: "Napoleon Bonaparte",
			b: "Madonna",
			c: "Confucius"
		},
		correctAnswer: "b"
	},
	{
		question: "Butterflies are always following me, everywhere I go.",
		answers: {
			a: "Mariah Carey",
			b: "Britney Spears",
			c: "Chris Brown"
		},
		correctAnswer: "a"
	},
	{
		question: "I have taken more out of alcohol then alcohol has taken out of me.",
		answers: {
			a: "Kanye West",
			b: "Winston Churchill",
			c: "Lady Gaga"
		},
		correctAnswer: "b"
	},
	{
		question: "The reason we're successful, darling? My overall charisma, of course.",
		answers: {
			a: "Rihanna",
			b: "Barack Obama",
			c: "Freddie Mercury"
		},
		correctAnswer: "c"
	},
	{
		question: "If I were two-faced, would I be wearing this one?",
		answers: {
			a: "Abraham Lincoln",
			b: "Marylin Monroe",
			c: "Queen Elisabeth II"
		},
		correctAnswer: "a"
	}
];

buildQuiz = () => {
}();

showResults = () => {
}


submitBtn.addEventListener("click", showResults);
