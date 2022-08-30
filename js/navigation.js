const navigation = document.querySelector(".navigation");
const navigationToggle = document.querySelector(".mobile-navigation-toggle");

navigationToggle.addEventListener("click", () => {
    const visibitily = navigation.getAttribute("data-visible");

    if (visibitily === "false") {
        navigation.setAttribute("data-visible", true);
        navigationToggle.setAttribute("aria-expanded", true);
    } else {
        navigation.setAttribute("data-visible", false);
        navigationToggle.setAttribute("aria-expanded", false);
    }
});