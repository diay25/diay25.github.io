const papers = document.querySelectorAll(".paper > details");

papers.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    papers.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
