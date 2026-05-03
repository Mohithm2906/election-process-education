function startQuiz() {
  document.getElementById("quiz").hidden = false;
}

function answer(isCorrect) {
  const result = document.getElementById("result");
  result.textContent = isCorrect
    ? "Correct! Voting helps citizens participate in democracy."
    : "Try again. Voting is an important democratic responsibility.";
}
