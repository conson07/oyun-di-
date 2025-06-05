const cases = [
  {
    question: "Hasta gece uyandıran zonklayıcı bir ağrıdan şikayet ediyor.",
    options: ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"],
    correct: "Kanal Tedavisi",
    explanation: "Bu tip ağrı irreversibl pulpitis belirtisidir. Kanal tedavisi gereklidir."
  },
  {
    question: "Hasta yeni dolgu yaptırdı, dişini sıktığında ağrı oluyor.",
    options: ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"],
    correct: "Dolgu",
    explanation: "Yüksek dolgu nedeniyle nokta teması oluşmuş olabilir."
  },
  {
    question: "Dişin yarısı yok ve ileri çürük var.",
    options: ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"],
    correct: "Diş Çekimi",
    explanation: "Diş restore edilemeyecek durumdaysa çekim gerekebilir."
  }
];

let current = 0;

function loadCase() {
  const c = cases[current];
  document.getElementById("question").innerText = c.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  c.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt, c.correct, c.explanation);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(selected, correct, explanation) {
  const feedback = selected === correct ? "✅ Doğru!" : "❌ Yanlış!";
  document.getElementById("feedback").innerText = feedback + " " + explanation;
}

function nextCase() {
  current++;
  if (current < cases.length) {
    loadCase();
  } else {
    document.getElementById("question").innerText = "🎉 Tüm vakalar tamamlandı!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").innerText = "";
  }
}

window.onload = loadCase;
