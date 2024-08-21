let navToggle = document.getElementsByClassName("nav-toggle")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];
let heroContent = document.getElementsByClassName('hero-content')[0];

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("active");

    if (navLinks.classList.contains('active')) {
        heroContent.classList.add('dimmed');
    } else {
        heroContent.classList.remove('dimmed');
    }
})

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});

  document.addEventListener('DOMContentLoaded', function () {
    const stateSelect = document.getElementById('state-select');
    const utSelect = document.getElementById('ut-select');
   
    function fetchData(url) {
        return fetch(url).then(response => response.json());
    }


    function updateStateInfo(data, state) {
        document.getElementById('state-name').textContent = data[state].name;
        document.getElementById('state-description').textContent = data[state].description;
        document.getElementById('state-capital').textContent = data[state].capital;
        document.getElementById('state-landmark').textContent = data[state].landmark;
        document.getElementById('state-dress').textContent = data[state].dress;
        document.getElementById('state-festival').textContent = data[state].festival;
        document.getElementById('state-language').textContent = data[state].language;
        document.getElementById('state-population').textContent = data[state].population;
        document.getElementById('state-sport').textContent = data[state].sport;
        document.getElementById('state-image').src = data[state].image;
    }

    function updateUTInfo(data, ut) {
            document.getElementById('ut-name').textContent = data[ut].name;
            document.getElementById('ut-description').textContent = data[ut].description;
            document.getElementById('ut-capital').textContent = data[ut].capital;
            document.getElementById('ut-landmark').textContent = data[ut].landmark;
            document.getElementById('ut-dress').textContent = data[ut].dress;
            document.getElementById('ut-festival').textContent = data[ut].festival;
            document.getElementById('ut-language').textContent = data[ut].language;
            document.getElementById('ut-population').textContent = data[ut].population;
            document.getElementById('ut-sport').textContent = data[ut].sport;
            document.getElementById('ut-image').src = data[ut].image;
    }

    stateSelect.addEventListener('change', function () {
        fetchData('./assets/json/states.json').then(stateData => {
            updateStateInfo(stateData, this.value);
        }).catch(error => console.error('Error loading state data:', error));
    });

    utSelect.addEventListener('change', function () {
        fetchData('./assets/json/uts.json').then(utData => {
            updateUTInfo(utData, this.value);
        }).catch(error => console.error('Error loading UT data:', error));
    });

    // Initialize the content with the selected region (Maharashtra by default)
    fetchData('./assets/json/states.json').then(stateData => {
        updateStateInfo(stateData, stateSelect.value);
    }).catch(error => console.error('Error loading default state data:', error));

    // Initialize the content with the selected region (Delhi by default)
    fetchData('./assets/json/uts.json').then(utData => {
        updateUTInfo(utData, utSelect.value);
    }).catch(error => console.error('Error loading default state data:', error));

    
});