$(function () {
  // Array of quiz questions, each with options, correct answer index, and explanation
  const quizData = [
    {
      question: "Které zvíře je nejrychlejší na souši?",
      options: ["Klokan", "Gepard", "Kůň", "Lev"],
      answer: 1,
      explanation: "Gepard dokáže dosáhnout až 112 km/h.",
    },
    {
      question: "Které zvíře má největší mozek?",
      options: ["Slon", "Vorvaň", "Člověk", "Gorila"],
      answer: 1,
      explanation: "Vorvaň má mozek vážící až 9 kg.",
    },
    {
      question: "Jaké zvíře spí až 20 hodin denně?",
      options: ["Pes", "Netopýr", "Lev", "Koala"],
      answer: 3,
      explanation: "Koala spí kvůli nízké výživě eukalyptu.",
    },
    {
      question: "Který pták neumí létat, ale běhá rychle?",
      options: ["Emu", "Kiwi", "Tučňák", "Pštros"],
      answer: 3,
      explanation: "Pštros běhá až 70 km/h.",
    },
    {
      question: "Které zvíře mění barvu?",
      options: ["Krokodýl", "Chameleon", "Žába", "Ještěrka"],
      answer: 1,
      explanation: "Chameleon mění barvu pomocí chromatoforů.",
    },
    {
      question: "Které zvíře má nejdelší krk?",
      options: ["Žirafa", "Slon", "Pštros", "Kůň"],
      answer: 0,
      explanation: "Krk žirafy může měřit až 2 metry.",
    },
    {
      question: "Které zvíře je nejpomalejší?",
      options: ["Koala", "Lenochod", "Želva", "Hroch"],
      answer: 1,
      explanation: "Lenochod se pohybuje extrémně pomalu.",
    },
    {
      question: "Které zvíře má největší rozpětí křídel?",
      options: ["Orel", "Albatros", "Kondor", "Plameňák"],
      answer: 1,
      explanation: "Albatros má rozpětí až 3,5 metru.",
    },
    {
      question: "Které zvíře staví hráze?",
      options: ["Bobr", "Vydra", "Kachna", "Křeček"],
      answer: 0,
      explanation: "Bobři staví hráze z větví a bláta.",
    },
    {
      question: "Které zvíře má nejvíce nohou?",
      options: ["Stonožka", "Pavouk", "Krab", "Mravenec"],
      answer: 0,
      explanation: "Některé stonožky mají přes 300 nohou.",
    },
    {
      question: "Které zvíře je největší?",
      options: ["Slon", "Modrá velryba", "Žralok", "Vorvaň"],
      answer: 1,
      explanation: "Modrá velryba váží přes 180 tun.",
    },
    {
      question: "Které zvíře létá pozpátku?",
      options: ["Včela", "Kolibřík", "Komár", "Vážka"],
      answer: 1,
      explanation: "Kolibřík je jediný pták, který to dokáže.",
    },
    {
      question: "Které zvíře má nejostřejší zrak?",
      options: ["Kočka", "Orel", "Pes", "Sova"],
      answer: 1,
      explanation: "Orel vidí až 8× lépe než člověk.",
    },
    {
      question: "Které zvíře má nejdelší jazyk?",
      options: ["Mravenečník", "Žába", "Chameleon", "Pes"],
      answer: 2,
      explanation: "Jazyk chameleona může být až 2× delší než jeho tělo.",
    },
    {
      question: "Které zvíře regeneruje části těla?",
      options: ["Želva", "Ještěrka", "Ryba", "Krab"],
      answer: 1,
      explanation: "Ještěrky dokážou regenerovat ztracený ocas.",
    },
    {
      question: "Které zvíře má nejlepší paměť?",
      options: ["Pes", "Slon", "Kočka", "Delfín"],
      answer: 1,
      explanation: "Sloni si pamatují místa i tváře po mnoho let.",
    },
    {
      question: "Které zvíře má nejvíce zubů?",
      options: ["Žralok", "Delfín", "Hroch", "Krokodýl"],
      answer: 0,
      explanation: "Žraloci mají stovky zubů, které se neustále obnovují.",
    },
    {
      question: "Které zvíře je nejhlasitější?",
      options: ["Lev", "Slon", "Vorvaň", "Hyena"],
      answer: 2,
      explanation: "Zvuk vorvaně může dosáhnout až 230 decibelů.",
    },
    {
      question: "Které zvíře žije nejdéle?",
      options: ["Želva", "Velryba", "Papoušek", "Krokodýl"],
      answer: 0,
      explanation: "Galapážská želva se může dožít přes 150 let.",
    },
    {
      question: "Které zvíře má největší oči?",
      options: ["Sova", "Vorvaň", "Krakatice", "Kočka"],
      answer: 2,
      explanation: "Krakatice má oči o průměru až 30 cm.",
    },
  ];

  // Function to render all quiz questions on the page
  function renderQuestions() {
    $("#quiz").empty(); // Clear any existing content
    quizData.forEach((q, i) => {
      // Create question block
      const $question = $(`
        <div class="question">
          <p>${i + 1}. ${q.question}</p>
          <div class="options"></div>
        </div>
      `);

      // Add answer options as radio buttons
      q.options.forEach((opt, j) => {
        $question.find(".options").append(`
          <label>
            <input type="radio" name="q${i}" value="${j}" />
            ${opt}
          </label>
        `);
      });

      // Append question block to the quiz container
      $("#quiz").append($question);
    });
  }

  // When the user clicks "Vyhodnotit" (Evaluate)
  $("#submit").on("click", function () {
    let score = 0;
    let output = "";

    // Loop through all questions and check selected answers
    quizData.forEach((q, i) => {
      const selected = $(`input[name="q${i}"]:checked`).val();

      if (parseInt(selected) === q.answer) {
        score++;
        output += `<p><strong>${i + 1}. Correct!</strong> ${q.explanation}</p>`;
      } else if (selected !== undefined) {
        output += `<p><strong>${i + 1}. Incorrect.</strong> ${
          q.explanation
        }</p>`;
      } else {
        output += `<p><strong>${i + 1}. Unanswered.</strong> ${
          q.explanation
        }</p>`;
      }
    });

    // Display the final score and explanations
    $("#result")
      .html(
        `
        <p>Your score: <strong>${score} out of ${quizData.length}</strong></p>
        ${output}
      `
      )
      .slideDown(); // Show result with animation
  });

  // When the user clicks "Skrýt odpovědi" (Hide answers)
  $("#hide").on("click", function () {
    $("#result").slideUp(); // Hide the result section
  });

  // When the user clicks "Spustit znovu" (Restart)
  $("#restart").on("click", function () {
    $("input[type=radio]").prop("checked", false); // Uncheck all answers
    $("#result").empty().hide(); // Clear and hide the result section
  });

  // Initial rendering of all questions when the page loads
  renderQuestions();
});
