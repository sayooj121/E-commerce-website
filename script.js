function showImages(category, event) {
  if (event) {
    event.preventDefault(); // Prevent the default link behavior
  }

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
// accordain
function toggleSection(sectionNumber) {
  var section = document.getElementsByClassName("section")[sectionNumber - 1];
  var content = section.getElementsByClassName("section-content")[0];

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
