document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links li a");
  
  const navbar = document.querySelector(".navbar");
  const placeholder = document.createElement("div");
  placeholder.classList.add("navbar-placeholder");

  navbar.parentNode.insertBefore(placeholder, navbar);

  const stickyOffset = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > stickyOffset) {
      navbar.classList.add("sticky");
      placeholder.style.display = "block";
      setTimeout(() => {
        placeholder.style.height = `60px`;
        placeholder.style.visibility = 'visible';
        navbar.style.transform = 'translateY(0)'; // Smooth transition
    }, 50); // Slight delay to smoothen transition
      
    } else {
      navbar.classList.remove("sticky");
      placeholder.style.display = "none";
      setTimeout(() => {
        placeholder.style.display = 'none';
        placeholder.style.height = '0';
        placeholder.style.visibility = 'hidden';
    }, 1); // Duration matches CSS transition
    }
  });

  // Toggle navigation menu visibility
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  // Hide the menu when a link is clicked
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.classList.remove("active");
      heroContent.classList.remove("dimmed");
    });
  });

  // Hide the menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      navLinks.classList.remove("active");
      navToggle.classList.remove("active");
      heroContent.classList.remove("dimmed");
    }
  });
});

window.onscroll = function () {
  var topButton = document.getElementById("top");

  // Check if the user has scrolled to the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
    topButton.classList.add("show"); // Show the button
  } else {
    topButton.classList.remove("show"); // Hide the button
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the state and UT select elements
  const stateSelect = document.getElementById("state-select");
  const utSelect = document.getElementById("ut-select");

  // Function to fetch JSON data from a given URL
  function fetchData(url) {
    return fetch(url).then((response) => response.json());
  }

  // Function to update state information on the page
  function updateStateInfo(data, state) {
    document.getElementById("state-name").textContent = data[state].name;
    document.getElementById("state-description").textContent =
      data[state].description;
    document.getElementById("state-capital").textContent = data[state].capital;
    document.getElementById("state-landmark").textContent =
      data[state].landmark;
    document.getElementById("state-dress").textContent = data[state].dress;
    document.getElementById("state-festival").textContent =
      data[state].festival;
    document.getElementById("state-language").textContent =
      data[state].language;
    document.getElementById("state-population").textContent =
      data[state].population;
    document.getElementById("state-sport").textContent = data[state].sport;
    document.getElementById("state-image").src = data[state].image;
    document.getElementById("state-wiki-link").href = data[state].wiki_link;
    document.getElementById("state-official-link").href =
      data[state].official_link;
  }

  // Function to update UT (Union Territory) information on the page
  function updateUTInfo(data, ut) {
    document.getElementById("ut-name").textContent = data[ut].name;
    document.getElementById("ut-description").textContent =
      data[ut].description;
    document.getElementById("ut-capital").textContent = data[ut].capital;
    document.getElementById("ut-landmark").textContent = data[ut].landmark;
    document.getElementById("ut-dress").textContent = data[ut].dress;
    document.getElementById("ut-festival").textContent = data[ut].festival;
    document.getElementById("ut-language").textContent = data[ut].language;
    document.getElementById("ut-population").textContent = data[ut].population;
    document.getElementById("ut-sport").textContent = data[ut].sport;
    document.getElementById("ut-image").src = data[ut].image;
    document.getElementById("ut-link").href = data[ut].link;
  }

  // Event listener for when a state is selected from the dropdown
  stateSelect.addEventListener("change", function () {
    fetchData("./assets/json/states.json")
      .then((stateData) => {
        updateStateInfo(stateData, this.value);
      })
      .catch((error) => console.error("Error loading state data:", error));
  });

  // Event listener for when a UT is selected from the dropdown
  utSelect.addEventListener("change", function () {
    fetchData("./assets/json/uts.json")
      .then((utData) => {
        updateUTInfo(utData, this.value);
      })
      .catch((error) => console.error("Error loading UT data:", error));
  });

  // Initialize the content with the selected region (Maharashtra by default)
  fetchData("./assets/json/states.json")
    .then((stateData) => {
      updateStateInfo(stateData, stateSelect.value);
    })
    .catch((error) =>
      console.error("Error loading default state data:", error)
    );

  // Initialize the content with the selected region (Delhi by default)
  fetchData("./assets/json/uts.json")
    .then((utData) => {
      updateUTInfo(utData, utSelect.value);
    })
    .catch((error) =>
      console.error("Error loading default state data:", error)
    );
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const offset = navbar.offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition - offset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
