// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    margin: 24, // Adjust margin as needed
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for transparency.
    scrollOffset: 0 // Adjust scroll offset if needed
  });
});