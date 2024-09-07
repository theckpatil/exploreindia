/*----------------------------------------------------------------------------
                  Copyright : Chandrakant Patil
----------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links li a");
  const navbar = document.querySelector(".navbar");
  const placeholder = document.createElement("div");
  placeholder.classList.add("navbar-placeholder");
  navbar.parentNode.insertBefore(placeholder, navbar);
  const stickyOffset = navbar.offsetTop;

  //----------------------------------------------------------------------------

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > stickyOffset) {
      navbar.classList.add("sticky");
      placeholder.style.display = "block";
      setTimeout(() => {
        placeholder.style.height = `60px`;
        placeholder.style.visibility = "visible";
        navbar.style.transform = "translateY(0)"; // Smooth transition
      }, 50); // Slight delay to smoothen transition
    } else {
      navbar.classList.remove("sticky");
      placeholder.style.display = "none";
      setTimeout(() => {
        placeholder.style.display = "none";
        placeholder.style.height = "0";
        placeholder.style.visibility = "hidden";
      }, 1); // Duration matches CSS transition
    }
  });

  //----------------------------------------------------------------------------

  // Toggle navigation menu visibility
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  //----------------------------------------------------------------------------

  // Hide the menu when a link is clicked
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });

  //----------------------------------------------------------------------------

  // Hide the menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      navLinks.classList.remove("active");
      navToggle.classList.remove("active");
    }
  });
});

  //----------------------------------------------------------------------------

  //go to top function
  window.onscroll = function () {
    var topButton = document.getElementById("top");

    // Check if the user has scrolled to the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
      topButton.classList.add("show"); // Show the button
    } else {
      topButton.classList.remove("show"); // Hide the button
    }
  };

  //----------------------------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
  
  function updateContent(selectElementId, jsonFilePath, updateFunction) {
    const selectElement = document.getElementById(selectElementId);
    selectElement.addEventListener("change", function () {
      fetchData(jsonFilePath)
        .then((data) => updateFunction(data, this.value))
        .catch((error) => console.error(`Error loading data: ${error}`));
    });
  
    // Initialize the content with the default selection
    fetchData(jsonFilePath)
      .then((data) => updateFunction(data, selectElement.value))
      .catch((error) => console.error(`Error loading default data: ${error}`));
  }
    
  // Function to fetch JSON data from a given URL
  function fetchData(url) {
    return fetch(url).then((response) => response.json());
  }

  // Function to update state information on the page
  function updateStateInfo(data, state) {
    document.getElementById("state-name").textContent = data[state].name;
    document.getElementById("state-description").textContent = data[state].description;
    document.getElementById("state-capital").textContent = data[state].capital;
    document.getElementById("state-landmark").textContent = data[state].landmark;
    document.getElementById("state-dress").textContent = data[state].dress;
    document.getElementById("state-festival").textContent = data[state].festival;
    document.getElementById("state-language").textContent = data[state].language;
    document.getElementById("state-population").textContent = data[state].population;
    document.getElementById("state-sport").textContent = data[state].sport;
    document.getElementById("state-image").src = data[state].image;
    document.getElementById("state-wiki-link").href = data[state].wiki_link;
    document.getElementById("state-official-link").href = data[state].official_link;
  }

  // Function to update UT (Union Territory) information on the page
  function updateUTInfo(data, ut) {
    document.getElementById("ut-name").textContent = data[ut].name;
    document.getElementById("ut-description").textContent = data[ut].description;
    document.getElementById("ut-capital").textContent = data[ut].capital;
    document.getElementById("ut-landmark").textContent = data[ut].landmark;
    document.getElementById("ut-dress").textContent = data[ut].dress;
    document.getElementById("ut-festival").textContent = data[ut].festival;
    document.getElementById("ut-language").textContent = data[ut].language;
    document.getElementById("ut-population").textContent = data[ut].population;
    document.getElementById("ut-sport").textContent = data[ut].sport;
    document.getElementById("ut-image").src = data[ut].image;
    // document.getElementById("ut-link").href = data[ut].link;
    document.getElementById("ut-wiki-link").href = data[ut].wiki_link;
    document.getElementById("ut-official-link").href = data[ut].official_link;
  }
    // Call this function for states and UTs
      updateContent("state-select", "./assets/json/states.json", updateStateInfo);
      updateContent("ut-select", "./assets/json/uts.json", updateUTInfo);

  });

  //----------------------------------------------------------------------------

  // function for navbar links smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-links a");
  const offset = navbar.offsetHeight;

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});