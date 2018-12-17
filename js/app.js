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

(buildQuiz=()=>{
	const output = [];

	questions.forEach((currentQuestion, questionNumber)=> {
		const answers = [];

		for (letter in currentQuestion.answers) {
			answers.push(`<label>
						<input type="radio" name="question${questionNumber}" value="${letter}">
						 ${currentQuestion.answers[letter]}
					</label>`)
		}
		output.push(
			`<div class="question">${currentQuestion.question}</div>
			<div class="answers">${answers.join("")}</div>`
		)
	})
	
	quiz.innerHTML = output.join("");
})();

showResults = () => {
	const answers = quiz.querySelectorAll(".answers");
	let correctAnswers = 0;

	questions.forEach((currentQuestion, questionNumber) => {
		const answerBox = answers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerBox.querySelector(selector) || {}).value;

		if (userAnswer === currentQuestion.correctAnswer) {
			// color correct user answer in green and add 1 point
			correctAnswers += 1;
			let rightAnswer = answerBox.querySelector(`input[value=${userAnswer}`).parentElement;
			rightAnswer.style.cssText = "color: #527d3d; font-weight: bold";
		} else {
			if (userAnswer !== undefined) {
				console.log("user took wrong decision , it is not " + userAnswer)
				let wrongAnswer = answerBox.querySelector(`input[value=${userAnswer}`);
				wrongAnswer.parentElement.style.color = "#d17076";
			} else {
				answerBox.style.color = "pink";
			}
		}
	})

	let comment = correctAnswers >= 6 ? `Nice, good job!` : `Try again, you can do better!`;

	results.textContent = `You gained ${correctAnswers} points. ${comment}`;
}


submitBtn.addEventListener("click", showResults);
