window.global = window;
// Fix issue with notification bell on hover
function toggleImage() {
  var button = document.getElementById("notification");
  var image = button.querySelector("img");

  if (image) {
    var currentSrc = image.src;
    var newSrc = "";

    if (currentSrc.endsWith("Notifications.svg")) {
      console.log("this")
      newSrc = currentSrc.replace("Notifications.svg", "Notifications2.svg");
    } else if (currentSrc.endsWith("Notifications2.svg")) {
      newSrc = currentSrc.replace("Notifications2.svg", "Notifications.svg");
    }

    if (newSrc) {
      image.src = newSrc;
    }
  }
}

function toggleTab(tab) {
  const tabs = document.querySelectorAll(".toggle-tab");
  const img = document.getElementById("generateIcon"); // Get the image element outside the loop
  tabs.forEach((t) => {
    console.log(`Tab Text: '${t.textContent.trim()}'`); // Log textContent for debugging
    t.classList.remove("active"); // Remove 'active' from all tabs
    if (t.textContent.trim() === tab) {
      // Trim whitespace and compare
      t.classList.add("active"); // Set 'active' on the matching tab
      if (tab === "Generate" && t.id === "generate") {
        // Fade out, change src to white version, then fade in
        img.style.opacity = 0;
        setTimeout(() => {
          img.src = "./Sparkles SVG White.svg"; // Change the image source to white version
          img.style.opacity = 1;
        }, 150); // Matches the transition time
      } else {
        // Fade out, change src to original version, then fade in
        img.style.opacity = 0;
        setTimeout(() => {
          img.src = "./Sparkles SVG.svg"; // Change the image source back to the original
          img.style.opacity = 1;
        }, 150); // Matches the transition time
      }
    }
  });
}