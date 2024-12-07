document.addEventListener('DOMContentLoaded', () => {
    const quizCategoriesList = document.querySelector('#quiz-categories ul');

    // Loop through the quizzes object and add each category to the list
    for (let category in quizzes) {
        const listItem = document.createElement('li');
        listItem.textContent = category;
        listItem.addEventListener('click', () => loadQuestions(category));
        quizCategoriesList.appendChild(listItem);
    }
});
const quizzes = {
    "STEM": [
        { question: "What does DNA stand for?", correct: "Deoxyribonucleic Acid" },
        { question: "What planet is known as the Red Planet?", correct: "Mars" },
        { question: "What gas is used by plants for photosynthesis?", correct: "Carbon Dioxide" },
        { question: "What is the boiling point of water at sea level in Celsius?", correct: "100" },
        { question: "What force keeps planets in orbit around the Sun?", correct: "Gravity" },
        { question: "What is the chemical symbol for water?", correct: "H2O" },
        { question: "What organ pumps blood in the human body?", correct: "Heart" },
        { question: "What is the speed of light in a vacuum (m/s)?", correct: "299,792,458" },
        { question: "What element has the atomic number 1?", correct: "Hydrogen" },
        { question: "What is the main gas found in Earth's atmosphere?", correct: "Nitrogen" }
    ],
    "Health Oriented Education": [
        { question1: "What is the normal human body temperature in Celsius?", correct: "37" },
        { question1: "What vitamin is produced by the skin in sunlight?", correct: "Vitamin D" },
        { question1: "What organ filters blood in the human body?", correct: "Kidney" },
        { question1: "What is the medical term for high blood pressure?", correct: "Hypertension" },
        { question1: "Which type of nutrient is most abundant in eggs?", correct: "Protein" },
        { question1: "What is the largest organ in the human body?", correct: "Skin" },
        { question1: "What is the primary function of red blood cells?", correct: "Carry oxygen" },
        { question1: "What part of the brain controls balance and coordination?", correct: "Cerebellum" },
        { question1: "What is the term for a doctor specializing in the heart?", correct: "Cardiologist" },
        { question1: "What mineral is essential for strong bones and teeth?", correct: "Calcium" }
    ],
    "History": [
{ question: "Who was the first President of the United States?", correct: "George Washington" },
{ question: "What year did World War II end?", correct: "1945" },
{ question: "What ancient civilization built the Pyramids of Giza?", correct: "Egyptians" },
{ question: "In what year did the Berlin Wall fall?", correct: "1989" },
{ question: "Who discovered America in 1492?", correct: "Christopher Columbus" },
{ question: "What was the name of the ship that carried the Pilgrims to America in 1620?", correct: "Mayflower" },
{ question: "Who wrote the Declaration of Independence?", correct: "Thomas Jefferson" },
{ question: "What empire was ruled by Julius Caesar?", correct: "Roman Empire" },
{ question: "Who was the leader of Nazi Germany?", correct: "Adolf Hitler" },
{ question: "What treaty ended World War I?", correct: "Treaty of Versailles" }
],
"Astronomy": [
{ question: "What is the closest planet to the Sun?", correct: "Mercury" },
{ question: "What is the largest planet in our solar system?", correct: "Jupiter" },
{ question: "What galaxy is Earth located in?", correct: "Milky Way" },
{ question: "What is the name of our Moon?", correct: "Moon" },
{ question: "What is a supernova?", correct: "An exploding star" },
{ question: "What is the name of the first human-made satellite?", correct: "Sputnik" },
{ question: "What is the Sun primarily composed of?", correct: "Hydrogen" },
{ question: "What is the term for a planet outside our solar system?", correct: "Exoplanet" },
{ question: "What is the Kuiper Belt?", correct: "A region of icy bodies beyond Neptune" },
{ question: "What is the name of the rover on Mars in 2021?", correct: "Perseverance" }
],
"Biomedical Sciences": [
{ question: "What is the study of bacteria called?", correct: "Bacteriology" },
{ question: "What organ is affected by hepatitis?", correct: "Liver" },
{ question: "What is the term for white blood cells?", correct: "Leukocytes" },
{ question: "What is the genetic material of a cell?", correct: "DNA" },
{ question: "What is the process of cell division called?", correct: "Mitosis" },
{ question: "What is a pathogen?", correct: "A disease-causing organism" },
{ question: "What is a vaccine?", correct: "A substance that stimulates immunity" },
{ question: "What is the largest type of blood vessel?", correct: "Artery" },
{ question: "What is an antibiotic used to treat?", correct: "Bacterial infections" },
{ question: "What is the smallest unit of life?", correct: "Cell" }
],
"Computer Science": [
{ question: "Who is considered the father of computer science?", correct: "Alan Turing" },
{ question: "What does HTTP stand for?", correct: "HyperText Transfer Protocol" },
{ question: "What is the binary representation of 10?", correct: "1010" },
{ question: "What programming language is known as the 'language of the web'?", correct: "JavaScript" },
{ question: "What does CPU stand for?", correct: "Central Processing Unit" },
{ question: "What is the first electronic computer called?", correct: "ENIAC" },
{ question: "What does RAM stand for?", correct: "Random Access Memory" },
{ question: "What is the command to print in Python?", correct: "print()" },
{ question: "What is the maximum value of a byte?", correct: "255" },
{ question: "Which company developed Windows?", correct: "Microsoft" }
],
"Cyber Security": [
    { question: "What does HTTPS stand for?", correct: "HyperText Transfer Protocol Secure" },
    { question: "What is the main purpose of a firewall?", correct: "To block unauthorized access" },
    { question: "What is phishing?", correct: "A cyberattack to steal sensitive information" },
    { question: "What is the term for malicious software?", correct: "Malware" },
    { question: "What is the weakest point in cybersecurity?", correct: "Human error" },
    { question: "What does VPN stand for?", correct: "Virtual Private Network" },
    { question: "What is ransomware?", correct: "A malware that demands payment" },
    { question: "What is the purpose of encryption?", correct: "To secure data by converting it into a code" },
    { question: "What is the term for unauthorized access to a computer?", correct: "Hacking" },
    { question: "What is the most common form of authentication?", correct: "Password" }
],
"Computer Programming": [
    { question: "What does IDE stand for?", correct: "Integrated Development Environment" },
    { question: "What symbol is used to denote comments in Python?", correct: "#" },
    { question: "What is the value of 5 + '5' in JavaScript?", correct: "55" },
    { question: "What is a loop in programming?", correct: "A structure for repeating code" },
    { question: "Which keyword defines a function in JavaScript?", correct: "function" },
    { question: "What does SQL stand for?", correct: "Structured Query Language" },
    { question: "What is a variable?", correct: "A container for storing data values" },
    { question: "What is recursion?", correct: "A function calling itself" },
    { question: "What type of data does a Boolean represent?", correct: "True/False" },
    { question: "What is the first step in debugging?", correct: "Identify the problem" }
],
"Computer Engineering": [
    { question: "What does CPU stand for?", correct: "Central Processing Unit" },
    { question: "What is Moore's Law?", correct: "The doubling of transistors on a chip every two years" },
    { question: "What is the primary function of RAM?", correct: "To store temporary data" },
    { question: "What is the unit of electrical resistance?", correct: "Ohm" },
    { question: "What is the purpose of a motherboard?", correct: "To connect all components of a computer" },
    { question: "What is the smallest unit of data?", correct: "Bit" },
    { question: "What is the purpose of a heat sink?", correct: "To dissipate heat from components" },
    { question: "What is the binary representation of 8?", correct: "1000" },
    { question: "What is the function of an operating system?", correct: "To manage hardware and software resources" },
    { question: "What does PCIe stand for?", correct: "Peripheral Component Interconnect Express" }
],
"Social Education": [
    { question: "What does UNESCO stand for?", correct: "United Nations Educational, Scientific and Cultural Organization" },
    { question: "What is the primary goal of social education?", correct: "To develop social awareness and skills" },
    { question: "What is an example of a civic responsibility?", correct: "Voting" },
    { question: "What does empathy mean?", correct: "The ability to understand and share the feelings of others" },
    { question: "What is the Golden Rule?", correct: "Treat others as you want to be treated" },
    { question: "What does 'conflict resolution' mean?", correct: "Resolving disputes effectively" },
    { question: "What is social inequality?", correct: "Unequal opportunities or treatment in society" },
    { question: "What is the purpose of community service?", correct: "To help improve society" },
    { question: "What is active listening?", correct: "Fully concentrating and understanding someone when they speak" },
    { question: "What is cultural diversity?", correct: "The existence of different cultural or ethnic groups" }
],
"Arts and Humanities": [
    { question: "Who painted the Mona Lisa?", correct: "Leonardo da Vinci" },
    { question: "What is the study of ancient artifacts called?", correct: "Archaeology" },
    { question: "What is the primary purpose of art?", correct: "To express creativity and ideas" },
    { question: "What is a synonym for 'philosophy'?", correct: "Love of wisdom" },
    { question: "Who wrote 'Romeo and Juliet'?", correct: "William Shakespeare" },
    { question: "What is a sonnet?", correct: "A 14-line poem" },
    { question: "What does the term 'Renaissance' mean?", correct: "Rebirth" },
    { question: "What is the study of human languages called?", correct: "Linguistics" },
    { question: "What is a primary source in history?", correct: "An original document or artifact" },
    { question: "What is the term for visual storytelling?", correct: "Narrative art" }
],
"Business and Commerce": [
    { question: "What is the primary goal of a business?", correct: "To make a profit" },
    { question: "What does GDP stand for?", correct: "Gross Domestic Product" },
    { question: "What is supply and demand?", correct: "The relationship between availability and desire for goods" },
    { question: "What does SWOT stand for?", correct: "Strengths, Weaknesses, Opportunities, Threats" },
    { question: "What is a stock market?", correct: "A place where shares of companies are bought and sold" },
    { question: "What is an entrepreneur?", correct: "A person who starts a business" },
    { question: "What is the term for money owed by a business?", correct: "Debt" },
    { question: "What is inflation?", correct: "The rise in the general price level of goods and services" },
    { question: "What is a monopoly?", correct: "A market with one seller" },
    { question: "What is a business plan?", correct: "A document outlining a company's strategy" }
],
"Social Science": [
    { question: "What does sociology study?", correct: "Human society and social behavior" },
    { question: "What is the term for a group of people living in a specific area?", correct: "Community" },
    { question: "What is the study of population called?", correct: "Demography" },
    { question: "What does anthropology focus on?", correct: "Human cultures and societies" },
    { question: "What is the term for shared customs and beliefs?", correct: "Culture" },
    { question: "What is the study of the Earth's physical features called?", correct: "Geography" },
    { question: "What is an economy?", correct: "The system of production and consumption" },
    { question: "What is the term for a society ruled by the people?", correct: "Democracy" },
    { question: "What is a primary social group?", correct: "Family" },
    { question: "What is the term for the ability to influence others?", correct: "Power" }
]
};

let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;

document.getElementById("category-select").addEventListener("change", (event) => {
currentCategory = event.target.value;
currentQuestionIndex = 0;
score = 0;
displayQuestion();
});

function displayQuestion() {
const questions = quizData[currentCategory];
if (currentQuestionIndex < questions.length) {
const question = questions[currentQuestionIndex];
document.getElementById("question-container").innerText = question.question;
document.getElementById("answers-container").innerHTML = `
    <input type="text" id="answer-input" placeholder="Type your answer">
    <button onclick="checkAnswer()">Submit Answer</button>
`;
} else {
document.getElementById("quiz-container").style.display = "none";
document.getElementById("result-container").innerText = `Your score: ${score}`;
}
}

function checkAnswer() {
const answer = document.getElementById("answer-input").value;
const correctAnswer = quizData[currentCategory][currentQuestionIndex].correct;
if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
score++;
}
currentQuestionIndex++;
displayQuestion();
}

function nextQuestion() {
currentQuestionIndex++;
displayQuestion();
}

window.onload = () => {
currentCategory = document.getElementById("category-select").value;
displayQuestion();
};

// Function to calculate and display quiz results
function displayResults() {
    const resultData = JSON.parse(localStorage.getItem("quizResults"));

    if (resultData) {
        const { score, totalQuestions, correctAnswers } = resultData;

        // Update score
        document.getElementById("score").textContent = `Score: ${score}/${totalQuestions}`;

        // List correct answers
        const correctAnswersList = document.getElementById("correct-answers");
        correctAnswers.forEach((answer, index) => {
            const li = document.createElement("li");
            li.textContent = `Q${index + 1}: ${answer}`;
            correctAnswersList.appendChild(li);
        });
    } else {
        document.getElementById("result-container").innerHTML = "<p>No results available. Please complete a quiz!</p>";
    }
}

// Call displayResults on result page load
if (window.location.pathname.includes("result.html")) {
    displayResults();
}


// Example function to simulate taking a quiz and storing results
function simulateQuiz() {
    const score = 2; // Example score
    const totalQuestions = 2; // Example total
    const correctAnswers = ["Deoxyribonucleic Acid", "Mars"]; // Example correct answers

    // Save results to localStorage
    localStorage.setItem("quizResults", JSON.stringify({ score, totalQuestions, correctAnswers }));

    // Redirect to results page
    window.location.href = "result.html";
}

// Function to handle login
function loginUser(email, password) {
    // This is a basic check. In a real application, you would verify credentials with a server.
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Set a flag in localStorage to indicate the user is logged in
        localStorage.setItem("loggedIn", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the homepage or quiz page
    } else {
        alert("Invalid email or password.");
    }
}

// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    loginUser(email, password);
});

const users = JSON.parse(localStorage.getItem("users")) || [];
users.push({ email, password });
localStorage.setItem("users", JSON.stringify(users));


// Logout functionality
document.getElementById("logout")?.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    alert("Logged out successfully!");
});

// Protect result page (user must be logged in)
if (window.location.pathname.includes("result.html")) {
    if (!localStorage.getItem("loggedIn")) {
        alert("Please log in to view your quiz results.");
        window.location.href = "login.html";
    }
}

// Logout functionality
document.getElementById("logout")?.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    alert("Logged out successfully!");
});

