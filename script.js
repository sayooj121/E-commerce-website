function showImages(category) {
  // Hide all image containers
  const containers = document.querySelectorAll(".image-container");
  containers.forEach((container) => {
    container.style.display = "none";
  });

  // Show the selected category's image container
  const selectedContainer = document.getElementById(category + "-images");
  if (selectedContainer) {
    selectedContainer.style.display = "block";
  }
}

// Show all images by default
showImages("all");
