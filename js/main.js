// Header: スマートフォン用メニューを開閉する
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation a");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });
}

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Hero slider: 写真を5秒ごとに切り替える
const slides = [...document.querySelectorAll(".slide")];
const sliderDots = [...document.querySelectorAll(".slider-dot")];
const previousButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const slider = document.querySelector(".slider");

let currentSlide = 0;
let sliderTimer;
let wheelLocked = false;

function showSlide(nextIndex) {
  currentSlide = (nextIndex + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === currentSlide);
  });

  sliderDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentSlide);
  });
}

function startSlider() {
  if (!slides.length) {
    return;
  }

  window.clearInterval(sliderTimer);
  sliderTimer = window.setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

if (slider && previousButton && nextButton && slides.length) {
  previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startSlider();
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startSlider();
  });

  sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlider();
    });
  });

  slider.addEventListener("mouseenter", () => {
    window.clearInterval(sliderTimer);
  });

  slider.addEventListener("mouseleave", startSlider);

  // Hero wheel navigation: 縦・横スクロールを1回ずつスライド操作へ変換
  slider.addEventListener(
    "wheel",
    (event) => {
      const wheelAmount = Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

      if (Math.abs(wheelAmount) < 12) {
        return;
      }

      event.preventDefault();

      if (wheelLocked) {
        return;
      }

      wheelLocked = true;
      showSlide(currentSlide + (wheelAmount > 0 ? 1 : -1));
      startSlider();

      window.setTimeout(() => {
        wheelLocked = false;
      }, 700);
    },
    { passive: false },
  );

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(sliderTimer);
    } else {
      startSlider();
    }
  });

  startSlider();
}

// Works: ALL / INTERIOR / SPEAKERで実績を絞り込む
const filterButtons = document.querySelectorAll(".filter-button");
const worksCards = document.querySelectorAll(".works-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    worksCards.forEach((card) => {
      const shouldShow =
        selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

// Contact: カンプ段階では実際に送信せず、送信機能が未接続であることを保つ
const contactForm = document.querySelector(".contact-form");
const categorySelect = document.querySelector(".category-select");
const categorySelected = document.querySelector(".category-selected");
const categoryOptions = document.querySelectorAll(
  '.category-options input[name="subject"]',
);

categoryOptions.forEach((option) => {
  option.addEventListener("invalid", () => {
    categorySelect?.setAttribute("open", "");
  });

  option.addEventListener("change", () => {
    const optionLabel = option.closest("label");

    if (categorySelected && optionLabel) {
      categorySelected.innerHTML = `
        <span class="category-en">${optionLabel.querySelector(".category-en").textContent}</span>
        <span class="category-ja">${optionLabel.querySelector(".category-ja").textContent}</span>
      `;
    }

    categorySelect?.removeAttribute("open");
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
