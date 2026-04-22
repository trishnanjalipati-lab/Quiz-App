const button = document.getElementById('start');
const subject = document.querySelector(".type");



button.addEventListener("click", () => {

    subject.innerHTML =
        `
        <p class="subject">Programming 🧑‍💻</p>
        <p class="subject">Physics 🧲</p>
        <p class="subject">Aptitude💭</p>
        <p class="subject">Logical Reasoning 💡</p>
        `;

    const quizSubject = document.querySelectorAll(".subject")
    quizSubject.forEach((item) => {
        item.addEventListener("click", (e) => {
            const type = e.target.innerHTML;
            window.location.href = `quiz.html?type=${type}`;
        }

        )
    })
})
