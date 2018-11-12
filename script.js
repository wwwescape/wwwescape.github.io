(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var statsCard = document.getElementById("stats-card");
  var langsCard = document.getElementById("langs-card");
  var stored = localStorage.getItem("theme");
  var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  var theme = stored || (prefersLight ? "light" : "dark");

  function applyTheme(next) {
    theme = next;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    var ghTheme = theme === "light" ? "default" : "github_dark";
    statsCard.src = statsCard.src.replace(/theme=[^&]+/, "theme=" + ghTheme);
    langsCard.src = langsCard.src.replace(/theme=[^&]+/, "theme=" + ghTheme);
  }

  applyTheme(theme);

  toggle.addEventListener("click", function () {
    applyTheme(theme === "light" ? "dark" : "light");
  });

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
