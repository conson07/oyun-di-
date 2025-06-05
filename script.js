const cases = [
  {
    question: "Hasta gece uyandıran zonklayıcı bir ağrıdan şikayet ediyor.",
    options: ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"],
    question: "Hasta gece uyandıran zonklayıcı ağrının ısıyla arttığını söylüyor.",
    correct: "Kanal Tedavisi",
    explanation: "Bu tip ağrı irreversibl pulpitis belirtisidir. Kanal tedavisi gereklidir."
    explanation: "Bu durum irreversibl pulpitis olup kanal tedavisi gerekir."
  },
  {
    question: "Hasta yeni dolgu yaptırdı, dişini sıktığında ağrı oluyor.",
    options: ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"],
    question: "Yakın zamanda dolgu yapıldıktan sonra sert bir şey ısırınca keskin ağrı oluyor.",
    correct: "Dolgu",
    explanation: "Yüksek dolgu nedeniyle nokta teması oluşmuş olabilir."
    explanation: "Yüksek nokta temasından kaynaklı olabilir."
  },
  {
    question: "Dişin yarısı yok ve ileri çürük var.",
    options: ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"],
    question: "Dişin yarısından fazlası kayıp ve ileri derecede çürük var.",
    correct: "Diş Çekimi",
    explanation: "Diş restore edilemeyecek durumdaysa çekim gerekebilir."
    explanation: "Diş restore edilemeyecek durumda, çekim önerilir."
  }
];

const options = ["Dolgu", "Kanal Tedavisi", "Diş Çekimi"];
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
  const opts = document.getElementById("options");
  opts.innerHTML = "";
  options.forEach(opt => {
    const b = document.createElement("button");
    b.innerText = opt;
    b.onclick = () => selectAnswer(opt);
    opts.appendChild(b);
  });
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(selected, correct, explanation) {
  const feedback = selected === correct ? "✅ Doğru!" : "❌ Yanlış!";
  document.getElementById("feedback").innerText = feedback + " " + explanation;
function selectAnswer(choice) {
  const c = cases[current];
  const result = choice === c.correct ? "Doğru" : "Yanlış";
  document.getElementById("feedback").innerText = `${result}! ${c.explanation}`;
  // disable buttons after an answer
  Array.from(document.getElementById("options").children).forEach(btn => btn.disabled = true);
}

function nextCase() {
  current++;
  if (current < cases.length) {
    loadCase();
  } else {
    document.getElementById("question").innerText = "🎉 Tüm vakalar tamamlandı!";
    document.getElementById("question").innerText = "Tüm vakalar tamamlandı";
    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").innerText = "";
  }
}

window.onload = loadCase;
