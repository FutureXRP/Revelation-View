// app.js
(function () {
  const introEl = document.getElementById("intro");
  const quizEl = document.getElementById("quiz");
  const resultsEl = document.getElementById("results");

  const startBtn = document.getElementById("startBtn");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");
  const copyBtn = document.getElementById("copyBtn");

  const qTag = document.getElementById("qTag");
  const qTitle = document.getElementById("qTitle");
  const qPrompt = document.getElementById("qPrompt");
  const choicesEl = document.getElementById("choices");

  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");

  const resultTop = document.getElementById("resultTop");
  const rankedList = document.getElementById("rankedList");
  const whyList = document.getElementById("whyList");
  const viewDescriptions = document.getElementById("viewDescriptions");

  const QUESTIONS = window.QUESTIONS || [];
  const VIEWS = window.VIEWS || [];

  const viewMap = new Map(VIEWS.map(v => [v.key, v]));

  // State
  let idx = 0;
  const answersByQid = new Map(); // qid -> choiceId

  function initProgress() {
    progressText.textContent = `0 / ${QUESTIONS.length}`;
    progressFill.style.width = "0%";
  }

  function setProgress(currentIndex) {
    const done = currentIndex; // answered up to currentIndex (0-based)
    progressText.textContent = `${done} / ${QUESTIONS.length}`;
    progressFill.style.width = `${Math.round((done / QUESTIONS.length) * 100)}%`;
  }

  function show(el) { el.classList.remove("hidden"); }
  function hide(el) { el.classList
