const scores = {
      fresh: 0,
      romantic: 0,
      bold: 0,
      mystic: 0
    };

    let currentQuestion = 1;

    function selectAnswer(type) {
      scores[type]++;
      document.getElementById("question" + currentQuestion).style.display = "none";
      currentQuestion++;

      if (currentQuestion <= 4) {
        document.getElementById("question" + currentQuestion).style.display = "block";
      } else {
        showResult();
      }
    }

    function showResult() {
      const resultBox = document.getElementById("result");
      document.getElementById("result").style.display = "block";

      const topScent = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
      let message = "";

      switch (topScent) {
        case "fresh":
          message = "✨ <strong>Ocean Drift</strong>: Clean, energizing, and refreshing. Perfect for daytime and minimalist lovers.";
          break;
        case "romantic":
          message = "🌸 <strong>Midnight Bloom</strong>: Soft florals and dreamy tones for a romantic soul.";
          break;
        case "bold":
          message = "🔥 <strong>Noir Muse</strong>: Bold, seductive, and unapologetically confident.";
          break;
        case "mystic":
          message = "🌙 <strong>Velvet Shadow</strong>: A mysterious blend of spice, wood, and dark floral energy.";
          break;
      }

      resultBox.innerHTML = `<h3>Your Scent Match:</h3><p>${message}</p><br><a class="btn" href="catalog.html">View in Shop</a>`;
    }
    function filterPerfumes(category) {
      const cards = document.querySelectorAll('.perfume-card');

      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }