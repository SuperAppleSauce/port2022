document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
              }
          });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
  });
});