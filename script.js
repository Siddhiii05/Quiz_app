document.addEventListener("DOMContentLoaded", function () {

    let quizData = {
        sections: [
            {
                sectionTitle: "General Knowledge",
                questions: [
                    {
                        questionType: "mcq",
                        question: "What is the capital of Australia?",
                        options: ["Sydney", "Canberra", "Melbourne", "Perth"],
                        answer: "Canberra"
                    },
                    {
                        questionType: "text",
                        question: "Which country is known as the Land of the Rising Sun?",
                        answer: "Japan"
                    },
                    {
                        questionType: "number",
                        question: "How many continents are there in the world?",
                        answer: 7
                    },
                    {
                        questionType: "mcq",
                        question: "Which is the largest ocean in the world?",
                        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
                        answer: "Pacific"
                    },
                    {
                        questionType: "text",
                        question: "Who invented the telephone?",
                        answer: "Alexander Graham Bell"
                    },
                    {
                        questionType: "number",
                        question: "How many states are there in India?",
                        answer: 28
                    },
                    {
                        questionType: "mcq",
                        question: "Which is the national animal of India?",
                        options: ["Lion", "Tiger", "Elephant", "Leopard"],
                        answer: "Tiger"
                    },
                    {
                        questionType: "text",
                        question: "What is the currency of Japan?",
                        answer: "Yen"
                    },
                    {
                        questionType: "number",
                        question: "How many players are there in a football team on the field?",
                        answer: 11
                    },
                    {
                        questionType: "mcq",
                        question: "Which desert is the largest hot desert in the world?",
                        options: ["Gobi", "Kalahari", "Sahara", "Thar"],
                        answer: "Sahara"
                    }
                ]
            },

            {
                sectionTitle: "Science",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Which gas do plants absorb from the atmosphere?",
                        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                        answer: "Carbon Dioxide"
                    },
                    {
                        questionType: "text",
                        question: "What is the chemical symbol for gold?",
                        answer: "Au"
                    },
                    {
                        questionType: "number",
                        question: "How many planets are there in our Solar System?",
                        answer: 8
                    },
                    {
                        questionType: "mcq",
                        question: "Which organ pumps blood throughout the human body?",
                        options: ["Lungs", "Kidney", "Heart", "Liver"],
                        answer: "Heart"
                    },
                    {
                        questionType: "text",
                        question: "What is the hardest natural substance on Earth?",
                        answer: "Diamond"
                    },
                    {
                        questionType: "number",
                        question: "How many bones are there in an adult human body?",
                        answer: 206
                    },
                    {
                        questionType: "mcq",
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Mars", "Jupiter", "Mercury"],
                        answer: "Mars"
                    },
                    {
                        questionType: "text",
                        question: "What is the SI unit of force?",
                        answer: "Newton"
                    },
                    {
                        questionType: "number",
                        question: "How many chambers does the human heart have?",
                        answer: 4
                    },
                    {
                        questionType: "mcq",
                        question: "Which vitamin is produced by the human body when exposed to sunlight?",
                        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
                        answer: "Vitamin D"
                    }
                ]
            },

            {
                sectionTitle: "Mathematics",
                questions: [
                    {
                        questionType: "mcq",
                        question: "What is the value of π (approximately)?",
                        options: ["2.14", "3.14", "3.41", "4.14"],
                        answer: "3.14"
                    },
                    {
                        questionType: "text",
                        question: "What is the name of a triangle with all three sides equal?",
                        answer: "Equilateral Triangle"
                    },
                    {
                        questionType: "number",
                        question: "What is the square root of 144?",
                        answer: 12
                    },
                    {
                        questionType: "mcq",
                        question: "How many degrees are there in a right angle?",
                        options: ["45", "90", "180", "360"],
                        answer: "90"
                    },
                    {
                        questionType: "text",
                        question: "What is the mathematical term for the result of a multiplication?",
                        answer: "Product"
                    },
                    {
                        questionType: "number",
                        question: "What is 25 × 8?",
                        answer: 200
                    },
                    {
                        questionType: "mcq",
                        question: "Which of the following is a prime number?",
                        options: ["9", "15", "17", "21"],
                        answer: "17"
                    },
                    {
                        questionType: "text",
                        question: "What is the name of a polygon with eight sides?",
                        answer: "Octagon"
                    },
                    {
                        questionType: "number",
                        question: "What is 15% of 200?",
                        answer: 30
                    },
                    {
                        questionType: "mcq",
                        question: "How many sides does a hexagon have?",
                        options: ["5", "6", "7", "8"],
                        answer: "6"
                    }
                ]
            },

            {
                sectionTitle: "Indian History",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Who was the first Prime Minister of independent India?",
                        options: [
                            "Sardar Vallabhbhai Patel",
                            "Jawaharlal Nehru",
                            "Rajendra Prasad",
                            "Subhas Chandra Bose"
                        ],
                        answer: "Jawaharlal Nehru"
                    },
                    {
                        questionType: "text",
                        question: "Who is known as the Father of the Nation in India?",
                        answer: "Mahatma Gandhi"
                    },
                    {
                        questionType: "number",
                        question: "In which year did India gain independence?",
                        answer: 1947
                    },
                    {
                        questionType: "mcq",
                        question: "Who built the Taj Mahal?",
                        options: [
                            "Akbar",
                            "Shah Jahan",
                            "Babur",
                            "Aurangzeb"
                        ],
                        answer: "Shah Jahan"
                    },
                    {
                        questionType: "text",
                        question: "Who founded the Maurya Empire?",
                        answer: "Chandragupta Maurya"
                    },
                    {
                        questionType: "number",
                        question: "In which year did the Battle of Plassey take place?",
                        answer: 1757
                    },
                    {
                        questionType: "mcq",
                        question: "Which movement was launched by Mahatma Gandhi in 1942?",
                        options: [
                            "Non-Cooperation Movement",
                            "Civil Disobedience Movement",
                            "Quit India Movement",
                            "Swadeshi Movement"
                        ],
                        answer: "Quit India Movement"
                    },
                    {
                        questionType: "text",
                        question: "Who was known as the Iron Man of India?",
                        answer: "Sardar Vallabhbhai Patel"
                    },
                    {
                        questionType: "number",
                        question: "In which year did the Constitution of India come into effect?",
                        answer: 1950
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first President of India?",
                        options: [
                            "Rajendra Prasad",
                            "Sarvepalli Radhakrishnan",
                            "Jawaharlal Nehru",
                            "Zakir Husain"
                        ],
                        answer: "Rajendra Prasad"
                    }
                ]
            }
        ]
    };

    // INITIALIZE SECTIONS

    initSections();
    function initSections() {
        let sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
            section.addEventListener("click", () => {
                let sectionNumber = parseInt(
                    section.getAttribute("data-section")
                );
                startQuiz(sectionNumber);
            });
        });
    }

    // START QUIZ

    function startQuiz(index) {
        const currentQuestions = quizData.sections[index].questions;
        let currentQuestionIndex = 0;
        let score = 0;
        let answerSelected = false;

        const quizContainer = document.getElementById("quiz-container");
        const questionContainer = document.getElementById("question-container");
        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");
        const scoreElement = document.getElementById("score");
        const nextButton = document.getElementById("next-button");

        // Hide categories
        quizContainer.style.display = "none";

        // Show questions
        questionContainer.style.display = "block";

        // Hide score initially
        scoreElement.style.display = "none";

        showQuestion();

        function showQuestion() {
            const question = currentQuestions[currentQuestionIndex];
            answerSelected = false;
            questionElement.textContent = question.question;
            optionsElement.innerHTML = "";

            // Hide score until answer is submitted
            scoreElement.style.display = "none";

            // MCQ
            if (question.questionType === "mcq") {
                question.options.forEach(function (option) {
                    const optionElement = document.createElement("div");
                    optionElement.textContent = option;
                    optionElement.classList.add("option");
                    optionElement.addEventListener("click", function () {
                        if (answerSelected) {
                            return;
                        }
                        answerSelected = true;
                        optionElement.classList.add("selected");
                        checkAnswer(
                            option,
                            question.answer
                        );
                    });
                    optionsElement.appendChild(optionElement);
                });
            }

            // TEXT / NUMBER
            else {
                const inputElement = document.createElement("input");
                inputElement.type =
                    question.questionType === "number"
                        ? "number"
                        : "text";
                inputElement.placeholder = "Enter your answer";

                const submitButton =
                    document.createElement("button");
                    submitButton.textContent = "Submit Answer";
                    submitButton.addEventListener("click", function () {
                        if (answerSelected) {
                            return;
                        }
                        const userAnswer =
                            inputElement.value.trim();

                        if (userAnswer === "") {
                            alert("Please enter an answer.");
                            return;
                        }

                        answerSelected = true;

                        checkAnswer(
                            userAnswer,
                            question.answer
                        );
                    });

                optionsElement.appendChild(inputElement);
                optionsElement.appendChild(submitButton);
            }
        }

        function checkAnswer(givenAnswer, correctAnswer) {
            const feedbackElement = document.createElement("div");
            feedbackElement.id = "feedback";
            const given =
                String(givenAnswer)
                    .trim()
                    .toLowerCase();

            const correct =
                String(correctAnswer)
                    .trim()
                    .toLowerCase();

            if (given === correct) {
                score++;
                feedbackElement.textContent = "Correct!";
                feedbackElement.style.color = "green";
            }
            else {
                feedbackElement.textContent = `Wrong! Correct answer: ${correctAnswer}`;
                feedbackElement.style.color = "red";
            }
            optionsElement.appendChild(feedbackElement);

            // Show score AFTER answering
            scoreElement.style.display = "block";
            scoreElement.textContent = "Score: " + score;
    }

    nextButton.onclick = function () {
        if (!answerSelected) {
            alert("Please answer the question first.");
            return;
        }
        if (currentQuestionIndex === currentQuestions.length - 1) {
            endQuiz();
        }
        else {
            currentQuestionIndex++;
            showQuestion();
        }
    };

    function endQuiz() {
        questionContainer.innerHTML = `
            <h2>Quiz Over!</h2>
            <p>
                Your final score is:
                ${score}/${currentQuestions.length}
            </p>
            <button id="home-button">
                Go Home
            </button>
        `;
        document
            .getElementById("home-button")
            .addEventListener("click", function () {
                questionContainer.style.display = "none";
                quizContainer.style.display = "block";
                // Reload the page to restore question container
                location.reload();
            });
    }
}
});