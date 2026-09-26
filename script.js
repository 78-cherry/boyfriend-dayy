const PASSWORD = "2501";


/* =========================
   SHOW A PAGE
========================= */

function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {

    page.classList.remove("active");

  });


  const selectedPage =
    document.getElementById(pageId);


  if (selectedPage) {

    selectedPage.classList.add("active");

    window.scrollTo(0, 0);

  }

}


/* =========================
   CHECK PASSWORD
========================= */

function checkPassword() {

  const input =
    document.getElementById("passwordInput");

  const error =
    document.getElementById("passwordError");


  if (input.value === PASSWORD) {

    error.textContent = "";

    input.value = "";

    showPage("welcome");

  } else {

    error.textContent =
      "Wrong password ♡";

    input.value = "";

    input.focus();

  }

}


/* =========================
   ENTER KEY
========================= */

document
  .getElementById("passwordInput")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

      checkPassword();

    }

  });
