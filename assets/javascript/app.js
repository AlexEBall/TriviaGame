triviaObject = {
				// Array or objects for questions
				questions: [
							{
							"question": "To whom does the title of Mary Shelly's 'Frankenstein' refer?",
							"A": "The Author",
							"B": "The Monster",
							"C": "The Doctor",
							"D": "The Narrator",
							"answer": "C",
							"winningImage": "assets/images/frankenstien.gif",
							"incorrectImage": "assets/images/bb.gif",
							"answerText": "The Doctor"
							},
							{
							"question": "What is the Great Gatsby's first name?",
							"A": "Tom",
							"B": "Robert",
							"C": "Nick",
							"D": "Jay",
							"answer": "D",
							"winningImage": "assets/images/giphy-downsized-large.gif",
							"incorrectImage": "assets/images/check.gif",
							"answerText": "Jay Gatsby"
							},
							{
							"question": "In Nabokov's 'Lolita', what is Lolita's real name?",
							"A": "Dolores",
							"B": "Lolita",
							"C": "Margaret",
							"D": "Alice",
							"answer": "A",
							"winningImage": "assets/images/lolita.gif",
							"incorrectImage": "assets/images/USED - reading problem.gif",
							"answerText": "Dolores"
							},
							{
							"question": "According to Dante Allegheri's 'Inferno', how many circles of hell are there?",
							"A": "1",
							"B": "3",
							"C": "7",
							"D": "9",
							"answer": "D",
							"winningImage": "assets/images/anigif_original-4605-1395942903-5.gif",
							"incorrectImage": "assets/images/6db4AjR.gif",
							"answerText": "9"
							},
							{
							"question": "Which of the following from, 'The Master and Margarita', is the cat?",
							"A": "Behemoth",
							"B": "Felix",
							"C": "Leo",
							"D": "Beelzebub",
							"answer": "A",
							"winningImage": "assets/images/fCf7GKP.gif",
							"incorrectImage": "assets/images/tumblr_m2slzf5DMe1rrfo01o2_250.gif",
							"answerText": "Behemoth"
							},
							{
							"question": "What is the subtitle of Thoreou's 'Walden'?",
							"A": "Woodland Survival Guide",
							"B": "Woodland Living",
							"C": "Life in the Woods",
							"D": "How to Live in the Woods",
							"answer": "C",
							"winningImage": "assets/images/walden.gif",
							"incorrectImage": "assets/images/giphy.gif",
							"answerText": "Life in the Woods"
							},
							{
							"question": "What story did Edgar Allen Poe not write?",
							"A": "The Cask of Amontillado",
							"B": "The Masque of the Red Death",
							"C": "Turn of the Screw",
							"D": "Tell-Tale Heart",
							"answer": "C",
							"winningImage": "assets/images/poe.gif",
							"incorrectImage": "assets/images/tumblr_inline_n3siy4wZMu1sb080b.gif",
							"answerText": "Turn of the Screw"
							},
							{
							"question": "In the poem, 'The Wasteland' by T.S. Eliot, he uses three Sanskrit words: 'Datta. Dayadhvam. Damyata.'. What do they mean??",
							"A": "One. Two. Three.",
							"B": "Give. Sympathize. Control.",
							"C": "Life. Love. Loyalty.",
							"D": "Dance. Sing. Rejoice.",
							"answer": "B",
							"winningImage": "assets/images/elliot.gif",
							"incorrectImage": "assets/images/wrong1.gif",
							"answerText": "Give. Sympathize. Control"
							},
							{
							"question": "In Dostoyefsky's 'Crime and Punishment', what instrument does Raskolnikov use to commit murder?",
							"A": "An Axe",
							"B": "A Knife",
							"C": "A Gun",
							"D": "A Hammer",
							"answer": "A",
							"winningImage": "assets/images/candp.gif",
							"incorrectImage": "assets/images/18519725.gif",
							"answerText": "an axe"
							},
							{
							"question": "Seminal novel, 'The Grapes of Wrath' by John Steinbeck takes place during what era?",
							"A": "The Civil Rights Movement",
							"B": "The Gold Rush",
							"C": "The Great Depression",
							"D": "The Civil War",
							"answer": "C",
							"winningImage": "assets/images/grapes.gif",
							"incorrectImage": "assets/images/gif-so-boring-book-of-mormon.gif",
							"answerText": "The Great Depression"
							}

							],
				// Variable will hold the setInterval when the questions start
				showQuestion: null,

				// Count to keep track of the index for questions
				questionCounter: 0, 

				// Number used to decrement the seconds
				number: 15,

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
					$title.html("<h1>Classic Literature Trivia Game</h1><hr>");

					var btn = $("<button>");
					btn.addClass("btn btn-secondary startButton").text("Test Your Knowledge");
					btn.css("margin-top", "6rem");

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
						time.html("<h2>You have " + triviaObject.number + " seconds left</h2>");


						question.text(triviaObject.questions[triviaObject.questionCounter].question);


						answerA.addClass("col-md-10 my-2 p-1 btn-outline-info answer").attr("data-answer", "A").html("<h5>" + triviaObject.questions[triviaObject.questionCounter].A + "</h5>");
						answerB.addClass("col-md-10 my-2 p-1 btn-outline-info answer").attr("data-answer", "B").html("<h5>" + triviaObject.questions[triviaObject.questionCounter].B + "</h5>");
						answerC.addClass("col-md-10 my-2 p-1 btn-outline-info answer").attr("data-answer", "C").html("<h5>" + triviaObject.questions[triviaObject.questionCounter].C + "</h5>");
						answerD.addClass("col-md-10 my-2 p-1 btn-outline-info answer").attr("data-answer", "D").html("<h5>" + triviaObject.questions[triviaObject.questionCounter].D + "</h5>");

						
						container.append(time).append(question).append(answerA).append(answerB).append(answerC).append(answerD);;
						$title.append(container);

						triviaObject.correctOrIncorrectChoice();
				},

				decrementTime: function () {

						triviaObject.number--;

						$("#showTime").html("<h2>You have " + triviaObject.number + " seconds left</h2>");

						triviaObject.timesUpNoAnswerGiven();

				},

				timesUpNoAnswerGiven: function() {

					if (triviaObject.number === 0 && triviaObject.gameOn === false) {

							triviaObject.unanswered++;

							triviaObject.stopRound();

							$("#showTime").html("<h3>The correct answer was " + triviaObject.questions[triviaObject.questionCounter].answerText + "</h3>");
							$("h2").html("<img src='" + triviaObject.questions[triviaObject.questionCounter].incorrectImage + "' />");
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

					triviaObject.number = 15;
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
						time.html("<h2>You have " + triviaObject.number + " seconds left</h2>");


						question.text(triviaObject.questions[triviaObject.questionCounter].question);


						answerA.addClass("col-md-10 my-2 p-1 btn-outline-info answer").attr("data-answer", "A").html("<h5>" + triviaObject.questions[triviaObject.questionCounter].A + "</h5>");
						answerB.addClass("col-md-10 my-2 p-1 btn-outline-info answer").attr("data-answer", "B").html("<h5>" + triviaObject.questions[triviaObject.questionCounter].B + "</h5>");
						answerC.addClass("col-md-10 my-2 p-1 btn-outline-info answer").attr("data-answer", "C").html("<h5>" + triviaObject.questions[triviaObject.questionCounter].C + "</h5>");
						answerD.addClass("col-md-10 my-2 p-1 btn-outline-info answer").attr("data-answer", "D").html("<h5>" + triviaObject.questions[triviaObject.questionCounter].D + "</h5>");

						
						container.append(time).append(question).append(answerA).append(answerB).append(answerC).append(answerD);;
						$title.append(container);

						triviaObject.correctOrIncorrectChoice();

					} else {

						triviaObject.endGame();
					}

				},

				correctOrIncorrectChoice: function() {

					if (!triviaObject.gameOn) {
					
					return $(".answer").on("click", function() {

							var element = $(this);

							playerChoice = (element.attr("data-answer"));

							console.log(playerChoice);

							if (playerChoice === triviaObject.questions[triviaObject.questionCounter].answer) {

								triviaObject.correct++;
								triviaObject.stopRound();

								$("#showTime").html("<h3>You got it!</h3>");
								$("h2").html("<img src='" + triviaObject.questions[triviaObject.questionCounter].winningImage + "' />");
								$("button").remove();


								setTimeout(function() {

								triviaObject.nextQuestion();

								}, 5000);

							} else {

								triviaObject.incorrect++;	

								triviaObject.stopRound();

								$("#showTime").html("<h3>The correct answer was " + triviaObject.questions[triviaObject.questionCounter].answerText + "</h3>");
								$("h2").html("<img src='" + triviaObject.questions[triviaObject.questionCounter].incorrectImage + "' />");
								$("button").remove();


								setTimeout(function() {

								triviaObject.nextQuestion();

								}, 5000);
							}

					});

					}

				},	

				endGame: function() {

						triviaObject.gameOn = true;

						var wins = $("<h4>");
						var losses = $("<h4>");
						var noAnswer = $("<h4>");
						var playAgain = $("<button>");

						playAgain.addClass("btn btn-success my-2 mx-auto");
						playAgain.attr("id", "restart");
						playAgain.text("Try Again?");

						$("#showTime").html(wins.text("Correct Answers: " + 
							triviaObject.correct)).append(losses.text("Incorrect Answers: " + 
							triviaObject.incorrect)).append(noAnswer.text("Unanswered: " + 
							triviaObject.unanswered));

						$("h2").html(playAgain);

						triviaObject.stopRound();
						triviaObject.restart();
				},

				restart: function() {

					return $("#restart").on("click", function() {

						triviaObject.questionCounter = 0;
						triviaObject.gameOn = false;
						triviaObject.correct = 0;
						triviaObject.incorrect = 0;
						triviaObject.unanswered = 0;

						$("#container").remove();

						triviaObject.renderGame();
						triviaObject.startGame();
					});

				}

				}

$(document).ready(function() {

	$.backstretch([
          "assets/images/Lz1VBIH.png",
          "assets/images/JBBIvIr.png",
          "assets/images/NVSPDIX.png",
          "assets/images/PqhM60k.png",
          "assets/images/UnSC4tP.png",
          "assets/images/VnCp5xG.png",
          "assets/images/PQGcPIn.png",
          "assets/images/X5sQYNy.png",
          "assets/images/vRKf0IE.png",
          "assets/images/5gYdXIh.png",
          "assets/images/OhuSXTl.png",
        ], {
            duration: 12000,
            fade: 900
        });

	triviaObject.renderGame();
	triviaObject.startGame();

	console.log(triviaObject.questions.length);

});


