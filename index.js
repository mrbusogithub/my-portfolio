// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add a scroll event listener to the document
  document.addEventListener("scroll", () => {
    // Select the header element
    const header = document.querySelector("header");

    // Check if the window has been scrolled
    if (window.scrollY > 0) {
      // If scrolled, add the "scrolled" class to the header
      header.classList.add("scrolled");
    } else {
      // If not scrolled, remove the "scrolled" class from the header
      header.classList.remove("scrolled");
    }
  });

  // Toggle the mobile menu on button click
  const mobileMenuButton = document.getElementById("mobile-menu");
  const navLinks = document.querySelector("nav");

  mobileMenuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
  });
});

var tabLinks = document.getElementsByClassName("tab-links"); // For getting the elements created of the classes in the html file
var tabContents = document.getElementsByClassName("tab-contents");

// To loop through the elements to hide the content under skills and experiences
function opentab(tabName) {
  for (tabLink of tabLinks) {
    // To loop through the elements to show the content and underline under skills and experiences
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  // To loop through the elements to show the content and underline under skills and experiences
  event.currentTarget.classList.add("active-link");
  // When there's a click on the tab 'experience' then the active-tab will be added (content will be shown)
  document.getElementById(tabName).classList.add("active-tab");
}
