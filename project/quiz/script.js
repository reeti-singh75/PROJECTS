const quizData = [
            {
                question: "Which HTML element is used to define the title of a document?",
                options: ["<header>", "<title>", "<meta>", "<body>"],
                answer: "<title>"
            },
            {
                question: "In JavaScript, what method is used to add an element to the end of an array?",
                options: ["shift()", "add()", "push()", "insert()"],
                answer: "push()"
            },
            {
                question: "Which CSS property is used to change the background color?",
                options: ["color", "bgcolor", "background-color", "text-color"],
                answer: "background-color"
            },
            {
                question: "What does DOM stand for?",
                options: ["Document Object Model", "Data Object Model", "Design Oriented Markup", "Digital Overlay Mapping"],
                answer: "Document Object Model"
            }
        ];

        // --- STATE VARIABLES ---
        let currentQuestionIndex = 0;
        let score = 0;

        // --- DOM ELEMENT REFERENCES ---
        const startButton = document.getElementById('start-button');
        const startScreen = document.getElementById('start-screen');
        const questionArea = document.getElementById('question-area');
        const questionTextElement = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');

        // Update total question count
        const totalQNum = document.getElementById('total-q-num');
        if (totalQNum) totalQNum.textContent = quizData.length;


        /**
         * Function for when the quiz ends (Feature 4 completion)
         */
        function showResults() {
            if (questionArea) questionArea.style.display = 'none';

            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = ''; // Clear everything

            const resultMessage = document.createElement('h2');
            resultMessage.className = 'text-3xl font-bold text-gray-900 mb-4';
            resultMessage.textContent = `🎉 Quiz Complete!`;

            const scoreDetail = document.createElement('p');
            scoreDetail.className = 'text-xl text-indigo-600 mb-8';
            scoreDetail.textContent = `Your final score: ${score} / ${quizData.length}`;

            const restartButton = document.createElement('button');
            restartButton.textContent = "Restart Quiz";
            restartButton.className = 'bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 shadow-md';

            restartButton.addEventListener('click', () => {
                window.location.reload();
            });

            quizContainer.appendChild(resultMessage);
            quizContainer.appendChild(scoreDetail);
            quizContainer.appendChild(restartButton);
        }

        /**
         * Checks the user's answer, updates the score, and navigates with visual feedback.
         * @param {HTMLElement} selectedButton - The button element the user clicked.
         */
        function checkAnswer(selectedButton) {
            const currentQuestion = quizData[currentQuestionIndex];
            const correctAnswer = currentQuestion.answer;
            const selectedOption = selectedButton.textContent.trim(); // Get text from button

            // 1. Disable all buttons immediately to prevent multiple clicks
            const allButtons = optionsContainer.querySelectorAll('button');
            allButtons.forEach(button => {
                button.classList.add('disabled-button');
            });

            // 2. Check Answer and Apply Visual Feedback
            if (selectedOption === correctAnswer) {
                score++;
                // Apply green color to the selected (correct) button
                selectedButton.classList.remove('hover:bg-indigo-100', 'bg-gray-50');
                selectedButton.classList.add('correct-answer');
            } else {
                // Apply red color to the selected (wrong) button
                selectedButton.classList.remove('hover:bg-indigo-100', 'bg-gray-50');
                selectedButton.classList.add('wrong-answer');

                // Find the correct button and mark it green
                allButtons.forEach(button => {
                    if (button.textContent.trim() === correctAnswer) {
                        button.classList.remove('hover:bg-indigo-100', 'bg-gray-50', 'disabled-button');
                        button.classList.add('correct-answer');
                    }
                });
            }

            // 3. Delay Navigation (1200ms) to allow user to see feedback
            setTimeout(() => {
                // Increment the question index
                currentQuestionIndex++;

                // Navigation check
                if (currentQuestionIndex < quizData.length) {
                    displayQuestion();
                } else {
                    showResults();
                }
            }, 1200); // 1.2 second delay
        }

        /**
         * Displays the current question and dynamically creates option buttons with event handlers.
         */
        function displayQuestion() {
            if (currentQuestionIndex >= quizData.length) {
                showResults();
                return;
            }

            const currentQuestion = quizData[currentQuestionIndex];

            optionsContainer.innerHTML = ''; // Clear previous options
            questionTextElement.textContent = currentQuestion.question; // Update question text

            // Update current question number
            const currentQNum = document.getElementById('current-q-num');
            if (currentQNum) currentQNum.textContent = currentQuestionIndex + 1;


            // Loop through the options array to create buttons
            currentQuestion.options.forEach(optionText => {
                const optionButton = document.createElement('button');
                optionButton.textContent = optionText;

                // Styling classes for option buttons
                optionButton.className = 'option-button p-4 bg-gray-50 text-gray-800 text-base rounded-lg hover:bg-indigo-100 transition duration-150 w-full text-left';

                // Add Event Handler: calls checkAnswer() with the button element
                optionButton.addEventListener('click', function () {
                    checkAnswer(this); // Pass the button element (this)
                });

                optionsContainer.appendChild(optionButton);
            });
        }


        /**
         * Initializes state and starts the quiz flow.
         */
        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;

            // Hide the start screen and show the quiz area
            if (startScreen) startScreen.style.display = 'none';
            if (questionArea) questionArea.style.display = 'block';

            displayQuestion();
        }

        // --- Event Listener Setup ---
        if (startButton) {
            startButton.addEventListener('click', startQuiz);
        }