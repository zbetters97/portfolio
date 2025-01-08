$(document).ready(function () {
  setActiveNav();
  $(window).scroll(function () {
    setActiveNav();
  });
});

function setActiveNav() {
  const navAbout = document.getElementById("nav-about");
  const navExperience = document.getElementById("nav-experience");
  const navProjects = document.getElementById("nav-projects");

  const sectionAbout = document.getElementById("about");
  const sectionExperience = document.getElementById("experience");
  const sectionProject = document.getElementById("projects");

  if (isOnScreen(sectionAbout)) {
    setActive(navAbout);
    removeActive(navExperience);
    removeActive(navProjects);
  } else if (isOnScreen(sectionExperience)) {
    removeActive(navAbout);
    setActive(navExperience);
    removeActive(navProjects);
  } else if (isOnScreen(sectionProject)) {
    removeActive(navAbout);
    removeActive(navExperience);
    setActive(navProjects);
  }
}

function isOnScreen(element) {
  const rect = element.getBoundingClientRect();
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function setActive(element) {
  element.classList.add("current-section");
}
function removeActive(element) {
  element.classList.remove("current-section");
}
