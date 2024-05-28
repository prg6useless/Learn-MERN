const formSubmit = (e) => {
  e.preventDefault(); // prevent the page from reloading
  const contactForm = document.getElementById("contactForm");
  console.log(contactForm);
  const formData = new FormData(contactForm);
  for (const value of formData.values()) {
    console.log(value);
  }
  contactForm.reset(); // clear the values of the form
  document.getElementById("systemMsg").innerHTML =
    "Thank you for filling the form";
  setTimeout(() => {
    document.getElementById("systemMsg").innerHTML = "";
  }, 3000);
};
