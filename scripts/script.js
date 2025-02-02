$(document).ready(function () {
  setActiveNav();
  $(window).scroll(function () {
    setActiveNav();
  });
});

function setActiveNav() {
  const navAbout = $("#nav-about");
  const navExperience = $("#nav-experience");
  const navProjects = $("#nav-projects");

  const sectionAbout = $("#about");
  const sectionExperience = $("#experience");
  const sectionProject = $("#projects");

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
