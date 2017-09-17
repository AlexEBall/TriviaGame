triviaObject = {
				// Array or objects for questions
				questions: [
							{
							"question": "To whom does the title of Mary Shelly's 'Frankenstein' refer?",
							"A": "A: The Author",
							"B": "B: The Monster",
							"C": "C: The Doctor",
							"D": "D: The Narrator",
							"answer": "C",
							"winningImage": "assets/images/tenor.gif"
							},
							{
							"question": "What is the Great Gatsby's first name?",
							"A": "A: Tom",
							"B": "B: Robert",
							"C": "C: Nick",
							"D": "D: Jay",
							"answer": "D",
							"winningImage": "assets/images/black.gif"
							},
							{
							"question": "In Nabokov's 'Lolita', what is Lolita's real name?",
							"A": "A: Dolores",
							"B": "B: Lolita",
							"C": "C: Margaret",
							"D": "D: Alice",
							"answer": "A",
							"winningImage": "assets/images/black.gif"
							},
							{
							"question": "According to Dante Allegheri's 'Inferno', how many circles of hell are there?",
							"A": "A: 1",
							"B": "B: 3",
							"C": "C: 7",
							"D": "D: 9",
							"answer": "D",
							"winningImage": "assets/images/black.gif"
							},
							{
							"question": "Which of the following from, 'The Master and Margarita', is the cat?",
							"A": "A: Behemoth",
							"B": "B: Felix",
							"C": "C: Leo",
							"D": "D: Beelzebub",
							"answer": "A",
							"winningImage": "assets/images/black.gif"
							},
							{
							"question": "What is the subtitle of Thoreou's 'Walden'?",
							"A": "A: Woodland Survival Guide",
							"B": "B: Woodland Living",
							"C": "C: Life in the Woods",
							"D": "D: How to Live in the Woods",
							"answer": "C",
							"winningImage": "assets/images/black.gif"
							},
							{
							"question": "What story did Edgar Allen Poe not write?",
							"A": "A: The Cask of Amontillado",
							"B": "B: The Masque of the Red Death",
							"C": "C: Turn of the Screw",
							"D": "D: Tell-Tale Heart",
							"answer": "C",
							"winningImage": "assets/images/black.gif"
							},
							{
							"question": "In the poem, 'The Wasteland' by T.S. Eliot, he uses three Sanskrit words: 'Datta. Dayadhvam. Damyata.'. What do they mean??",
							"A": "A: One. Two. Three.",
							"B": "B: Give. Sympathize. Control.",
							"C": "C: Life. Love. Loyalty.",
							"D": "D: Dance. Sing. Rejoice.",
							"answer": "B",
							"winningImage": "assets/images/black.gif"
							},
							{
							"question": "In Dostoyefsky's 'Crime and Punishment', what instrument does Raskolnikov use to commit murder?",
							"A": "A: An Axe",
							"B": "B: A Knife",
							"C": "C: A Gun",
							"D": "D: A Hammer",
							"answer": "A",
							"winningImage": "assets/images/black.gif"
							},
							{
							"question": "Seminal novel, 'The Grapes of Wrath' by John Steinbeck takes place during what era?",
							"A": "A: The Civil Rights Movement",
							"B": "B: The Gold Rush",
							"C": "C: The Great Depression",
							"D": "D: The Civil War",
							"answer": "C",
							"winningImage": "assets/images/black.gif"
							}

							],
				// Variable will hold the setInterval when the questions start
				showQuestion: null,

				// Count to keep track of the index for questions
				questionCounter: 0, 

				// Number used to decrement the seconds
				number: 45,

				// Keep track of statistics for the game
				correct: 0,
				incorrect: 0,
				unanswered: 0,

				// Track of player's choice 
				playerChoice: null,

				// Game state
				gameOn: false,

				renderGame: function() {
					var $title = $("#title");
					$title.addClass("text-center")
					$title.html("<h1>Trivia Game</h1>");

					var btn = $("<button>");
					btn.addClass("btn btn-secondary").text("Start Game");
					btn.css("margin-top", "3rem");

					$title.append(btn);
					
				},

				startGame: function() {
					return $("button").on("click", function() {

						$(".btn-secondary").hide();

						triviaObject.showQuestion = setInterval(triviaObject.decrementTime, 1000);
						triviaObject.displayFirstQuestion();

					});

				},

				displayFirstQuestion: function() {

					var $title = $("#title");
						
						var container = $("<div>");
						var time = $("<div>");
						var question = $("<h2>");
						var answerA = $("<button>");
						var answerB = $("<button>");
						var answerC = $("<button>");
						var answerD = $("<button>");

						container.attr("id", "container");

						time.attr("id", "showTime");
						time.html("You have " + triviaObject.number + " seconds left");


						question.text(triviaObject.questions[triviaObject.questionCounter].question);


						answerA.addClass("col-md-10 my-2 p-1 btn-primary answer").attr("data-answer", "A").text(triviaObject.questions[triviaObject.questionCounter].A);
						answerB.addClass("col-md-10 my-2 p-1 btn-primary answer").attr("data-answer", "B").text(triviaObject.questions[triviaObject.questionCounter].B);
						answerC.addClass("col-md-10 my-2 p-1 btn-primary answer").attr("data-answer", "C").text(triviaObject.questions[triviaObject.questionCounter].C);
						answerD.addClass("col-md-10 my-2 p-1 btn-primary answer").attr("data-answer", "D").text(triviaObject.questions[triviaObject.questionCounter].D);

						
						container.append(time).append(question).append(answerA).append(answerB).append(answerC).append(answerD);;
						$title.append(container);

						triviaObject.correctOrIncorrectChoice();
				},

				decrementTime: function () {

						triviaObject.number--;

						$("#showTime").html("You have " + triviaObject.number + " seconds left");

						triviaObject.timesUpNoAnswerGiven();

				},

				timesUpNoAnswerGiven: function() {

					if (triviaObject.number === 0 && triviaObject.gameOn === false) {

							triviaObject.unanswered++;

							triviaObject.stopRound();

							$("#showTime").html("The correct answer was " + triviaObject.questions[triviaObject.questionCounter].answer);
							$("h2").html("<img src='assets/images/Dikembe-Mutombo-No.gif' />");
							$("button").remove();


							setTimeout(function() {

							triviaObject.nextQuestion();

							}, 5000);

						}
				},

				stopRound: function() {

					clearInterval(triviaObject.showQuestion);
				},

				nextQuestion: function() {

					triviaObject.questionCounter++;

					if(triviaObject.questionCounter < triviaObject.questions.length) {					

					triviaObject.showQuestion = setInterval(triviaObject.decrementTime, 1000);

					triviaObject.number = 45;
					$("#container").remove();

					console.log(triviaObject.questionCounter);

					var $title = $("#title");
						
						var container = $("<div>");
						var time = $("<div>");
						var question = $("<h2>");
						var answerA = $("<button>");
						var answerB = $("<button>");
						var answerC = $("<button>");
						var answerD = $("<button>");

						container.attr("id", "container");

						time.attr("id", "showTime");
						time.html("You have " + triviaObject.number + " seconds left");


						question.text(triviaObject.questions[triviaObject.questionCounter].question);


						answerA.addClass("col-md-10 my-2 p-1 btn-primary answer").attr("data-answer", "A").text(triviaObject.questions[triviaObject.questionCounter].A);
						answerB.addClass("col-md-10 my-2 p-1 btn-primary answer").attr("data-answer", "B").text(triviaObject.questions[triviaObject.questionCounter].B);
						answerC.addClass("col-md-10 my-2 p-1 btn-primary answer").attr("data-answer", "C").text(triviaObject.questions[triviaObject.questionCounter].C);
						answerD.addClass("col-md-10 my-2 p-1 btn-primary answer").attr("data-answer", "D").text(triviaObject.questions[triviaObject.questionCounter].D);

						
						container.append(time).append(question).append(answerA).append(answerB).append(answerC).append(answerD);;
						$title.append(container);

						triviaObject.correctOrIncorrectChoice();

					} else {

						triviaObject.endGame();
					}

				},

				correctOrIncorrectChoice: function() {

					console.log("test");

					if (!triviaObject.gameOn) {
					
					return $(".answer").on("click", function() {

							var element = $(this);

							playerChoice = (element.attr("data-answer"));

							console.log(playerChoice);

							if (playerChoice === triviaObject.questions[triviaObject.questionCounter].answer) {

								triviaObject.correct++;

								console.log(triviaObject.correct);

								triviaObject.stopRound();

								$("#showTime").html("You got it!");
								$("h2").html("<img src='" + triviaObject.questions[triviaObject.questionCounter].winningImage + "' />");
								$("button").remove();


								setTimeout(function() {

								triviaObject.nextQuestion();

								}, 5000);

							} else {

								triviaObject.incorrect++;	

								triviaObject.stopRound();

								$("#showTime").html("The correct answer was " + triviaObject.questions[triviaObject.questionCounter].answer);
								$("h2").html("<img src='assets/images/Dikembe-Mutombo-No.gif' />");
								$("button").remove();


								setTimeout(function() {

								triviaObject.nextQuestion();

								}, 5000);

							}

					});

					}

				},	

				// TODO: Reset button?

				endGame: function() {

						triviaObject.gameOn = true;

						var wins = $("<p>");
						var losses = $("<p>");
						var noAnswer = $("<p>");
						var playAgain = $("<button>");


						playAgain.addClass("btn btn-success my-2 mx-auto");
						playAgain.attr("id", "restart");
						playAgain.text("Try Again?");




						$("#showTime").html(wins.text("Correct Answers: " + 
							triviaObject.correct)).append(losses.text("Incorrect Answers: " + 
							triviaObject.incorrect)).append(noAnswer.text("Unanswered: " + 
							triviaObject.unanswered));

						$("h2").html(playAgain);


						console.log(triviaObject.questionCounter);

						triviaObject.stopRound();

						console.log("over");

						triviaObject.restart();

				},

				restart: function() {

					return $("#restart").on("click", function() {

						triviaObject.questionCounter = 0;
						triviaObject.gameOn = false;
						triviaObject.correct = 0;
						triviaObject.incorrect = 0;
						triviaObject.unanswered = 0;


						// $("#title").remove();
						$("#container").remove();

						triviaObject.renderGame();
						triviaObject.startGame();


					});


				}

				}

$(document).ready(function() {

	triviaObject.renderGame();
	triviaObject.startGame();

	console.log(triviaObject.questions.length);

});


