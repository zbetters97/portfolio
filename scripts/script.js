$(document).ready(function () {
  loadPage();
});

function loadPage() {
  setActiveNav();
  $(window).scroll(() => setActiveNav());
}

function setActiveNav() {
  const navAbout = $("#nav-about");
  const navExperience = $("#nav-experience");
  const navProjects = $("#nav-projects");

  const sectionAbout = $("#about-section");
  const sectionExperience = $("#experience-section");
  const sectionProject = $("#projects-section");

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

function isOnScreen(section) {
  const sectionTop = section.offset().top;
  const sectionBottom = sectionTop + section.outerHeight();

  const viewportTop = $(window).scrollTop();
  const viewportBottom = viewportTop + $(window).height();

  const isOnScreen = sectionBottom > viewportTop && sectionTop < viewportBottom;

  return isOnScreen;
}

function setActive(element) {
  element.addClass("current-section");
}
function removeActive(element) {
  element.removeClass("current-section");
}
