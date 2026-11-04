(() => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll("[data-theme-toggle]");
  const storedTheme = localStorage.getItem("rh-theme");
  if (storedTheme === "light" || storedTheme === "dark") root.dataset.theme = storedTheme;

  const updateThemeLabel = () => {
    const light = root.dataset.theme === "light";
    themeButtons.forEach(button => {
      button.setAttribute("aria-label", light ? "Aktifkan mode gelap" : "Aktifkan mode terang");
      const icon = button.querySelector("[data-theme-icon]");
      if (icon) icon.textContent = light ? "☾" : "☼";
    });
  };
  updateThemeLabel();
  themeButtons.forEach(button => button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("rh-theme", root.dataset.theme);
    updateThemeLabel();
  }));

  const menuButton = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Tutup navigasi" : "Buka navigasi");
      menuButton.textContent = open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    }));
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add("is-visible"));

  const toast = document.querySelector("[data-toast]");
  let toastTimer;
  const showToast = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  };
  document.querySelectorAll("[data-cv-download]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showToast("Tambahkan file CV kamu di assets/documents/cv.pdf terlebih dahulu.");
    });
  });
  document.querySelectorAll("[data-placeholder-link]").forEach(link => {
    link.addEventListener("click", event => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
        showToast("Tautan ini bisa kamu isi melalui file HTML.");
      }
    });
  });

  const cursorToggle = document.querySelector("[data-cursor-toggle]");
  const cursor = document.querySelector(".custom-cursor");
  const dot = document.querySelector(".custom-cursor-dot");
  const canUseCustomCursor = window.matchMedia("(pointer: fine)").matches;
  if (cursorToggle && cursor && dot && canUseCustomCursor) {
    const enabled = localStorage.getItem("rh-cursor") === "on";
    document.body.classList.toggle("cursor-enabled", enabled);
    cursorToggle.setAttribute("aria-pressed", String(enabled));
    cursorToggle.addEventListener("click", () => {
      const next = !document.body.classList.contains("cursor-enabled");
      document.body.classList.toggle("cursor-enabled", next);
      localStorage.setItem("rh-cursor", next ? "on" : "off");
      cursorToggle.setAttribute("aria-pressed", String(next));
      showToast(next ? "Custom cursor diaktifkan." : "Custom cursor dinonaktifkan.");
    });
    window.addEventListener("mousemove", event => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
    });
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
  } else if (cursorToggle) {
    cursorToggle.hidden = true;
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
