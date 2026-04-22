const params = new URLSearchParams(window.location.search)
const type = params.get("type")
const quesContainer = document.querySelector(".ques-container")
const optn = document.getElementById("option")
const answer = document.getElementById("answer")
const label = document.getElementById("label")

const prgm = [
    {
        question: "What is JavaScript?",
        options: ["Programming Language", "Database", "Operating System", "Browser"],
        correct: 0
    },
    {
        question: "What is the correct file extension for Python files?",
        options: [".pt", ".py", ".pyt", ".python"],
        correct: 1
    },
    {
        question: "Which function is the entry point of a C program?",
        options: ["start()", "main()", "init()", "run()"],
        correct: 1
    },
    {
        question: "Which keyword is used to create a class in Java?",
        options: ["function", "define", "class", "object"],
        correct: 2
    },
    {
        question: "Which method is used to display output in the console?",
        options: ["print()", "console.log()", "echo()", "write()"],
        correct: 1
    },
    {
        question: "Which of the following is used to take input from user in Python?",
        options: ["scan()", "input()", "get()", "read()"],
        correct: 1
    },
    {
        question: "Which symbol is used to end a statement in C?",
        options: [".", ":", ";", ","],
        correct: 2
    },
    {
        question: "Which keyword is used to declare a variable in modern JavaScript?",
        options: ["var", "int", "let", "define"],
        correct: 2
    },
    {
        question: "Which symbol is used for comments in C?",
        options: ["//", "/* */", "##", "<!-- -->"],
        correct: 1
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        correct: 1
    }
];
const phy = [
    {
        question: "What is the unit of force?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        correct: 2
    },
    {
        question: "What is the speed of light?",
        options: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 m/s", "3 × 10^7 m/s"],
        correct: 0
    },
    {
        question: "Which force pulls objects toward Earth?",
        options: ["Magnetic force", "Gravitational force", "Friction", "Tension"],
        correct: 1
    },
    {
        question: "What is the unit of energy?",
        options: ["Watt", "Joule", "Newton", "Volt"],
        correct: 1
    },
    {
        question: "Which instrument measures temperature?",
        options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
        correct: 1
    },
    {
        question: "What is the unit of power?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correct: 2
    },
    {
        question: "Which form of energy is stored in a stretched spring?",
        options: ["Kinetic energy", "Potential energy", "Thermal energy", "Electrical energy"],
        correct: 1
    },
    {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correct: 1
    },
    {
        question: "What is the unit of voltage?",
        options: ["Ampere", "Volt", "Ohm", "Watt"],
        correct: 1
    },
    {
        question: "Which device is used to measure electric current?",
        options: ["Voltmeter", "Ammeter", "Thermometer", "Barometer"],
        correct: 1
    }
];
const logical = [
    {
        question: "What comes next in the series: 1, 3, 6, 10, 15, ?",
        options: ["18", "20", "21", "25"],
        correct: 2
    },
    {
        question: "Find the odd one out:",
        options: ["Dog", "Cat", "Cow", "Tiger"],
        correct: 3
    },
    {
        question: "If ALL PENS are BOOKS and ALL BOOKS are TABLES, then:",
        options: ["Some tables are pens", "All tables are pens", "Some pens are not tables", "None"],
        correct: 0
    },
    {
        question: "A is taller than B, B is taller than C. Who is shortest?",
        options: ["A", "B", "C", "Cannot say"],
        correct: 2
    },
    {
        question: "What comes next: A, C, F, J, O, ?",
        options: ["S", "T", "U", "V"],
        correct: 2
    },
    {
        question: "If 5 + 3 = 28 and 9 + 1 = 82, then 6 + 2 = ?",
        options: ["36", "44", "48", "62"],
        correct: 2
    },
    {
        question: "Find the missing number: 2, 6, 12, 20, ?",
        options: ["28", "30", "32", "34"],
        correct: 1
    },
    {
        question: "A man walks 10m east, then 10m north, then 10m west. How far from start?",
        options: ["0m", "5m", "10m", "20m"],
        correct: 2
    },
    {
        question: "What comes next in the series: 2, 5, 10, 17, ?",
        options: ["24", "26", "28", "30"],
        correct: 1
    },
    {
        question: "If CAT = 24, DOG = 26, then BAT = ?",
        options: ["21", "23", "22", "23"],
        correct: 1
    }
];
const aptitude = [
    {
        question: "What is 20% of 150?",
        options: ["25", "30", "35", "40"],
        correct: 1
    },
    {
        question: "If a train travels 60 km in 1 hour, what is its speed?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        correct: 1
    },
    {
        question: "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?",
        options: ["10", "15", "20", "25"],
        correct: 2
    },
    {
        question: "What is the average of 10, 20, and 30?",
        options: ["15", "20", "25", "30"],
        correct: 1
    },
    {
        question: "If cost price is 100 and selling price is 120, what is the profit?",
        options: ["10", "15", "20", "25"],
        correct: 2
    },
    {
        question: "A number is increased by 25%. What is the new value of 80?",
        options: ["90", "95", "100", "105"],
        correct: 2
    },
    {
        question: "If 5 workers complete a job in 10 days, how many days will 10 workers take?",
        options: ["2", "5", "10", "20"],
        correct: 1
    },
    {
        question: "What comes next in the series: 2, 4, 8, 16, ?",
        options: ["18", "24", "32", "30"],
        correct: 2
    },
    {
        question: "What is 25% of 200?",
        options: ["40", "50", "60", "75"],
        correct: 1
    },
    {
        question: "If a car travels 120 km in 2 hours, what is its speed?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        correct: 1
    }
];
let currentQues = 0
let score = 0
let timer;
function startTimer() {
    clearInterval(timer)
    let time = 10;
    let clock = document.getElementById("stopwatch")
    clock.innerHTML = `00:${time < 10 ? "0" : ""}${time}`
    timer = setInterval(() => {
        time--
        if (time >= 0)
            clock.innerHTML = `00:${time < 10 ? "0" : ""}${time}`

        else {
            clearInterval(timer)
            answerSelected(null)
        }
    }, 1000)
}
function loadQuestion() {
    startTimer()
    optn.innerHTML = ""
    answer.innerHTML = ""
    label.innerHTML = `Question ${currentQues + 1} `;
    console.log(label.innerText)
    console.log(subject[currentQues].question)
    document.getElementById("quesn").innerHTML = subject[currentQues].question
    subject[currentQues].options.forEach((element, index) => {
        const option = document.createElement("button")
        option.textContent = element;
        optn.appendChild(option);
        option.addEventListener("click", () => {

            option.style.color = "black"
            option.style.borderColor = "black"
            answerSelected(index, option, optn)
        })
    });

}
function answerSelected(index, option,) {
    clearInterval(timer);
    let correctOptn = optn.children[subject[currentQues].correct]
    const btn = document.querySelectorAll("#option button")
    btn.forEach((e) => {
        e.disabled = true;
    })
    if (index == subject[currentQues].correct) {
        score++
        option.style.backgroundColor = "green"
        answer.style.color = "green"
        answer.innerHTML = "Correct Answer!!"

    }
    else if (index == null) {
        answer.style.color = "black"
        answer.innerHTML = "Not Answered!!"
        markCorrect(correctOptn)
    }
    else {
        option.style.backgroundColor = "red"
        answer.style.color = "red"
        answer.innerHTML = "Incorrect Answer!!"
        markCorrect(correctOptn)


    }
    currentQues++
    if (currentQues < subject.length) {

        setTimeout(loadQuestion, 2000)
    }
    else {
        setTimeout(showResult, 1500);
    }

}
function markCorrect(correctOptn) {
    correctOptn.style.backgroundColor = "green"
    correctOptn.style.color = "black"
    correctOptn.style.borderColor = "black"
}
function showResult() {
    document.getElementById("result").style.display = "flex"
    const finalScore = document.getElementById("score")
    const comment = document.getElementById("comment")

    finalScore.innerHTML = `${score}/${subject.length}`
    if (score > 8) {
        comment.innerHTML = "Very Good 👏"
    }
    else if (score > 5) {
        comment.innerHTML = "Well Done 👍"
    }
    else if (score > 3) {
        comment.innerHTML = "Good 😀"
    }
    else {
        comment.innerHTML = "Fail!! ❌"
    }
    const home = document.getElementById("home")
    const retry = document.getElementById("retry")
    home.addEventListener("click", () => {
        window.location.href = "index.html"
    })
    retry.addEventListener("click", () => {
        window.location.reload()
    })
    quesContainer.style.display = "none"
}
const quizData = {
    "Programming": prgm,
    "Physics": phy,
    "Logical Reasoning": logical,
    "Aptitude": aptitude
}
const subject = quizData[type];
loadQuestion()
