
/* ------------------------------
   ⏳ Counter: First Encounter
------------------------------ */
function updateCounter() {
  const startDate = new Date("2024-03-06T22:00:00+08:00");
  const now = new Date();
  const nowPHT = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));

  const diffMs = nowPHT - startDate;
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  // Calculate years, months, and days precisely
  let years = nowPHT.getFullYear() - startDate.getFullYear();
  let months = nowPHT.getMonth() - startDate.getMonth();
  let days = nowPHT.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(nowPHT.getFullYear(), nowPHT.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  // Plural & conditional display
  const part = (n, word) => (n > 0 ? `${n} ${word}${n === 1 ? "" : "s"}` : "");
  const parts = [part(years, "year"), part(months, "month"), part(days, "day")].filter(Boolean).join(", ");

  document.getElementById("counter").textContent =
    `${parts || "0 days"} (${totalDays} days total) ` +
    `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')} since first encounter`;
}

updateCounter();
setInterval(updateCounter, 1000);


/* ------------------------------
   ⏳ Counter: From October 05, 2025
------------------------------ */
function updateCounter2() {
  const startDate = new Date("2025-10-05T00:00:00+08:00");
  const now = new Date();
  const nowPHT = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));

  const diffMs = nowPHT - startDate;
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  // Calculate years, months, and days precisely
  let years = nowPHT.getFullYear() - startDate.getFullYear();
  let months = nowPHT.getMonth() - startDate.getMonth();
  let days = nowPHT.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(nowPHT.getFullYear(), nowPHT.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  // Plural & conditional display
  const part = (n, word) => (n > 0 ? `${n} ${word}${n === 1 ? "" : "s"}` : "");
  const parts = [part(years, "year"), part(months, "month"), part(days, "day")].filter(Boolean).join(", ");

  document.getElementById("counter2").textContent =
    `${parts || "0 days"} (${totalDays} days total) ` +
    `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')} since October 05, 2025`;
}

updateCounter2();
setInterval(updateCounter2, 1000);



    /* ------------------------------
      📅 Current Year
    ------------------------------ */
    document.getElementById("current-year").textContent =
      new Date().toLocaleString("en-US", { timeZone: "Asia/Manila", year: "numeric" });


    /* ------------------------------
      🎨 Fade-in Animation on Scroll
    ------------------------------ */
    const sections = document.querySelectorAll(".section");
    function revealOnScroll() {
      const triggerBottom = window.innerHeight * 0.85;
      sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          section.classList.add("show");
        }
      });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    /* ------------------------------
      🌸 Falling Petals Effect
    ------------------------------ */
    const petalShapes = ["✿", "❀", "❁", "❃"];
    const petalColors = ["#FFC0CB", "#FFB6C1", "#FF69B4", "#F8BBD0"];

    function createPetal() {
      const container = document.createElement("div");
      container.classList.add("petal-container");
      container.style.left = Math.random() * window.innerWidth + "px";

      const petal = document.createElement("div");
      petal.classList.add("petal");
      petal.textContent = petalShapes[Math.floor(Math.random() * petalShapes.length)];
      petal.style.color = petalColors[Math.floor(Math.random() * petalColors.length)];

      const size = 18 + Math.random() * 12;
      petal.style.fontSize = size + "px";

      const fallDuration = 6 + Math.random() * 5; // 6–11s
      const swayDuration = 3 + Math.random() * 2; // 3–5s
      container.style.animationDuration = `${fallDuration}s`;
      petal.style.animationDuration = `${swayDuration}s`;

      container.appendChild(petal);
      document.body.appendChild(container);

      setTimeout(() => container.remove(), fallDuration * 1000);
    }
    setInterval(createPetal, 1150);


    /* ------------------------------
      ⬆️ Back to TOC Button
    ------------------------------ */
    const backToToc = document.getElementById("backToToc");
    const toc = document.querySelector(".toc");
    const hero = document.querySelector(".intro-hero");

    function toggleBackToToc() {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const tocBottom = toc.getBoundingClientRect().bottom;

      if (heroBottom <= 0 && tocBottom <= 0) {
        backToToc.classList.add("show");
      } else {
        backToToc.classList.remove("show");
      }
    }
    window.addEventListener("scroll", toggleBackToToc);

    backToToc.addEventListener("click", () => {
      toc.scrollIntoView({ behavior: "smooth" });
    });


    /* ------------------------------
      💕 Monthsary / Anniversary
    ------------------------------ */
    function updateMonthsary() {
      const startDate = new Date("2025-10-05T00:00:00+08:00");
      const now = new Date();
      const nowPHT = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));

      let months =
        (nowPHT.getFullYear() - startDate.getFullYear()) * 12 +
        (nowPHT.getMonth() - startDate.getMonth());

      if (nowPHT.getDate() < 5) {
        months--; // Not yet reached this month’s 22nd day
      }

      const years = Math.floor(months / 12);
      const monthsaryDiv = document.getElementById("monthsary");

      // Function to get ordinal suffix (1st, 2nd, 3rd…)
      function getOrdinal(n) {
        if (n % 100 >= 11 && n % 100 <= 13) return n + "th";
        switch (n % 10) {
          case 1: return n + "st";
          case 2: return n + "nd";
          case 3: return n + "rd";
          default: return n + "th";
        }
      }

      // Hide by default
      monthsaryDiv.style.display = "none";
      monthsaryDiv.textContent = "";

      // 🎉 Special message ONLY on the exact start date
      if (
        nowPHT.getFullYear() === startDate.getFullYear() &&
        nowPHT.getMonth() === startDate.getMonth() &&
        nowPHT.getDate() === startDate.getDate()
      ) {
        monthsaryDiv.textContent =
          "✨ New chapter began to unfold, birthdate found its real purpose — October 05, 2025 ✨";
        monthsaryDiv.style.display = "block";
        return; // stop here, don’t run monthsary logic
      }

      // 🎊 Monthsary / Anniversary every 5th AFTER start date
      if (nowPHT.getDate() === 5 && nowPHT > startDate) {
        if (months > 0) {
          if (months % 12 === 0 && years > 0) {
            monthsaryDiv.textContent = `Happy ${getOrdinal(years)} Anniversary to us! ✨`;
          } else {
            monthsaryDiv.textContent = `Happy ${getOrdinal(months)} Monthsary to us! ✨`;
          }
        } else if (months === 0) {
          monthsaryDiv.textContent = "Happy 1st Monthsary to us! ✨";
        }
        monthsaryDiv.style.display = "block";
      }

    }

      updateMonthsary();
      setInterval(updateMonthsary, 1000 * 60 * 60); // refresh hourly





      // Video Scroll Logic
const initVideoScroll = () => {
    const videoContainer = document.querySelector('.video-container');
    const video = videoContainer?.querySelector('video');

    if (!video) return;

    // Set initial state for fade-in effect via JS if not in CSS
    videoContainer.style.opacity = '0';
    videoContainer.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
    videoContainer.style.transform = 'translateY(20px)';

    const observerOptions = {
        threshold: 0.5 // Trigger when 50% of the video is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in and move up
                videoContainer.style.opacity = '1';
                videoContainer.style.transform = 'translateY(0)';
                video.play();
            } else {
                // Optional: Pause video when user scrolls away to save CPU
                video.pause();
            }
        });
    }, observerOptions);

    observer.observe(videoContainer);
};

// Run after DOM is loaded
document.addEventListener('DOMContentLoaded', initVideoScroll);

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.dark-video-wrapper video');
    if (!video) return;

    // Optional: Subtle pulse effect to the glow on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        const container = document.querySelector('.video-container');
        if (container) {
            // Glow pulses slightly as you scroll
            const opacity = 0.15 + (Math.sin(scrollPos / 100) * 0.05);
            container.style.boxShadow = `0 10px 40px rgba(0,0,0,0.8), 0 0 30px rgba(255,183,197,${opacity})`;
        }
    });
});