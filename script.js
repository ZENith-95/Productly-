// Function to toggle the dropdown menu
function toggleMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const isMenuOpen = dropdownMenu.style.display === "flex";

  if (isMenuOpen) {
    hideMenu();
  } else {
    dropdownMenu.style.display = "flex";

    // Add an event listener to close the menu when clicking outside
    document.addEventListener("click", outsideClickHandler);
  }
}

// Function to close the menu
function hideMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.style.display = "none";

  // Remove the event listener when the menu is closed
  document.removeEventListener("click", outsideClickHandler);
}

// Function to handle clicks outside the dropdown menu
function outsideClickHandler(event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const hamburger = document.querySelector(".hamburger");

  // Check if the click is outside the menu and the hamburger button
  if (
    !dropdownMenu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    hideMenu();
  }
}

// Add click event to dropdown menu options to close the menu
document.querySelectorAll(".drop-down a").forEach((option) => {
  option.addEventListener("click", hideMenu);
});


// Get elements
const watchVideoBtn = document.getElementById("watchVideoBtn");
const videoModal = document.getElementById("videoModal");
const closeVideoModal = document.getElementById("closeVideoModal");

// Show the modal when the "Watch the video" button is clicked
watchVideoBtn.addEventListener("click", () => {
  videoModal.style.display = "flex"; 
});

// Hide the modal when the close button is clicked
closeVideoModal.addEventListener("click", () => {
  videoModal.style.display = "none";
});

// Hide the modal when clicking outside the video
videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    videoModal.style.display = "none"; 
  }
});
