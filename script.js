const panelTitle = document.querySelector("#panel-title");
const panelDetail = document.querySelector("#panel-detail");
const hotspots = document.querySelectorAll("[data-title][data-detail]");
const newsModal = document.querySelector("#news-modal");
const newsClose = document.querySelector("#news-close");
const newspaper = document.querySelector(".newspaper");

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    panelTitle.textContent = hotspot.dataset.title;
    panelDetail.textContent = hotspot.dataset.detail;

    hotspots.forEach((item) => item.classList.remove("is-active"));
    hotspot.classList.add("is-active");

    if (hotspot === newspaper) {
      newsModal.classList.add("is-open");
      newsModal.setAttribute("aria-hidden", "false");
    }
  });
});

function closeNewsModal() {
  newsModal.classList.remove("is-open");
  newsModal.setAttribute("aria-hidden", "true");
}

newsClose.addEventListener("click", closeNewsModal);

newsModal.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && target.dataset.closeNews === "true") {
    closeNewsModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNewsModal();
  }
});
