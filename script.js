const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const photoFrame = document.querySelector(".photo-frame");
const profilePhoto = document.querySelector(".photo-frame img");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");
const contactSubmit = document.querySelector("#contact-submit");
const linkedinUrl = "https://www.linkedin.com/in/lucas-alejo-bellesi";

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (profilePhoto && photoFrame) {
  if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
    photoFrame.classList.add("photo-missing");
  }

  profilePhoto.addEventListener("error", () => {
    photoFrame.classList.add("photo-missing");
  });
}

document.querySelectorAll(".social-links a").forEach((link) => {
  if (link.textContent.trim().toLowerCase() === "linkedin") {
    link.href = linkedinUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formMessage.textContent = "";

    if (contactSubmit) {
      contactSubmit.disabled = true;
      contactSubmit.textContent = "Enviando...";
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje.");
      }

      formMessage.textContent = "Mensaje enviado correctamente. Gracias por contactarme.";
      contactForm.reset();
    } catch (error) {
      formMessage.textContent = "No se pudo enviar el mensaje. Intentalo nuevamente mas tarde.";
    } finally {
      if (contactSubmit) {
        contactSubmit.disabled = false;
        contactSubmit.textContent = "Enviar mensaje";
      }
    }
  });
}
