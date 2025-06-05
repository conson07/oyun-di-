const cases = [
  {
    question: "Hasta gece uyandıran zonklayıcı bir ağrıdan şikayet ediyor.",
    options: ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"],
    correct: "Kanal Tedavisi",
    explanation: "Bu tip ağrı irreversibl pulpitis belirtisidir. Kanal tedavisi gereklidir."
    question: "The patient reports throbbing pain that wakes them up at night and worsens with heat.",
    correct: "Root Canal",
    explanation: "This indicates irreversible pulpitis, root canal is indicated."
  },
  {
    question: "Hasta yeni dolgu yaptırdı, dişini sıktığında ağrı oluyor.",
    options: ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"],
    correct: "Dolgu",
    explanation: "Yüksek dolgu nedeniyle nokta teması oluşmuş olabilir."
    question: "The patient feels a sharp pain only when biting hard food, especially after a recent filling.",
    correct: "Filling",
    explanation: "Possible occlusal high point after recent restoration."
  },
  {
    question: "Dişin yarısı yok ve ileri çürük var.",
    options: ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"],
    correct: "Diş Çekimi",
    explanation: "Diş restore edilemeyecek durumdaysa çekim gerekebilir."
    question: "The tooth has lost more than half its crown and is deeply decayed.",
    correct: "Extraction",
    explanation: "Tooth may not be restorable and needs to be removed."
  }
];

const options = ["Filling", "Root Canal", "Extraction"];
let current = 0;
let score = 0;

function loadCase() {
  const c = cases[current];
  document.getElementById("question").innerText = c.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  c.options.forEach(opt => {
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt, c.correct, c.explanation);
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("feedback").innerText = "";
  document.getElementById("next").style.display = "none";
}

function checkAnswer(selected, correct, explanation) {
  const feedback = selected === correct ? "✅ Doğru!" : "❌ Yanlış!";
  document.getElementById("feedback").innerText = feedback + " " + explanation;
function checkAnswer(selected) {
  const c = cases[current];
  const correct = selected === c.correct;
  if (correct) score++;
  document.getElementById("feedback").innerText =
    (correct ? "Correct!" : "Incorrect!") + " " + c.explanation;
  document.getElementById("next").style.display = "block";
  // disable option buttons
  Array.from(document.getElementById("options").children).forEach(b => b.disabled = true);
}

function nextCase() {
  current++;
  if (current < cases.length) {
    loadCase();
  } else {
    document.getElementById("question").innerText = "🎉 Tüm vakalar tamamlandı!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").innerText = "";
    showResults();
  }
}

function showResults() {
  document.getElementById("question").innerText =
    `You answered ${score} out of ${cases.length} correctly.`;
  document.getElementById("options").innerHTML = "";
  const feedback =
    score === cases.length ? "Excellent!" :
    score >= cases.length / 2 ? "Good job!" : "Keep practicing!";
  document.getElementById("feedback").innerText = feedback;
  document.getElementById("next").style.display = "none";
}

window.onload = loadCase;
