document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    if (!subjectInput || !messageInput) return;

    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    const email = "kerebors@gmail.com";
    const mailtoLink =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  });
});
