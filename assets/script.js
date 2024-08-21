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

    function updateRegionInfo(data, region) {
        document.getElementById('region-name').textContent = data[region].name;
        document.getElementById('region-description').textContent = data[region].description;
        document.getElementById('region-capital').textContent = data[region].capital;
        document.getElementById('region-landmark').textContent = data[region].landmark;
        document.getElementById('region-dress').textContent = data[region].dress;
        document.getElementById('region-festival').textContent = data[region].festival;
        document.getElementById('region-language').textContent = data[region].language;
        document.getElementById('region-population').textContent = data[region].population;
        document.getElementById('region-sport').textContent = data[region].sport;
        document.getElementById('region-image').src = data[region].image;
    }

    stateSelect.addEventListener('change', function () {
        fetchData('./assets/states.json').then(stateData => {
            updateRegionInfo(stateData, this.value);
        }).catch(error => console.error('Error loading state data:', error));
    });

    utSelect.addEventListener('change', function () {
        fetchData('./uts.json').then(utData => {
            updateRegionInfo(utData, this.value);
        }).catch(error => console.error('Error loading UT data:', error));
    });

    // Initialize the content with the selected region (Maharashtra by default)
    fetchData('./assets/states.json').then(stateData => {
        updateRegionInfo(stateData, stateSelect.value);
    }).catch(error => console.error('Error loading default state data:', error));

    // Initialize the content with the selected region (Delhi by default)
    // fetchData('./assets/ut.json').then(stateData => {
    //     updateRegionInfo(stateData, stateSelect.value);
    // }).catch(error => console.error('Error loading default state data:', error));

    
});