const button = document.getElementById('start');
const subject = document.querySelector(".type");



button.addEventListener("click", () => {

    subject.innerHTML =
        `
        <p class="subject" data-type="Programming">Programming 👨‍💻</p>
        <p class="subject" data-type="Physics">Physics 🧲</p>
        <p class="subject" data-type="Aptitude">Aptitude ☁️</p>
        <p class="subject" data-type="Logical Reasoning">Logical Reasoning 💡</p>
        `;

    const quizSubject = document.querySelectorAll(".subject")
    quizSubject.i
    quizSubject.forEach((item) => {
        item.addEventListener("click", (e) => {
            const type = e.target.dataset.type;
            window.location.href = `quiz.html?type=${type}`;
        }

        )
    })
})
