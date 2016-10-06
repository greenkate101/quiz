// 
var prompt = require('prompt-sync')();
// 
var myQuestions = [
	{ 
		text: 'What does CSS stand for?',
		answer: 'Cascading Style Sheets'
	},
	{ 
		text: 'Comparison always results in what kind of value?',
		answer: 'Boolean'
	},
	{ 
		text: 'What does UI stand for?',
		answer: 'User Interface'
	},
	{
		text: 'What does static mean?',
		answer: 'unchanging'
	},
	{
		text: 'What is the command to exit the terminal?',
		answer: 'control-c'
	},
	{
		text: 'What number does the z-index start at?',
		answer: 'zero'
	},
	{
		text: 'What moves items on top of each other in CSS?',
		answer: 'z-index'
	},
	{
		text: 'What type of operator is (6 + x)?',
		answer: 'binary operator'
	}, 
	{
		text: 'What is the not operator?',
		answer: '!'
	},
	{
		text: 'What helps us install third party libraries, frameworks and utilities for projects?',
		answer: 'Node Package Manager'
	},
	{
		text: 'State the command on the Commandline that makes a directory?',
		answer: 'mkdir'
	},
	{
		text: 'How does the user interact with the app?',
		answer: 'UX'
	},
	{
		text: 'What draws high-fidelity graphics with a wide range of colors?',
		answer: 'GUI'
	},
	{
		text: 'In CSS what surronds the content area of an item?',
		answer: 'Padding'
	},
	{
		text: 'What does Eric say?',
		answer: 'Turtles'
	}
];


var myQuestions;
var answer;
var right = 0;
var total = 0;
var wrong = 0;


for (var i = 0; i < myQuestions.length; i++) {
		questions = myQuestions[i];
		answer= prompt(questions.text);
		total = total + 1;
	if (answer === questions.answer) {
		right++;
		console.log('correct');
	} else {
		console.log('wrong' + ',' + myQuestions[i].answer);
	}
	
}


 var percent =right / total * 100;

console.log(right + ',' + percent + '%' + ',' + total);


