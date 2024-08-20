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
    const regionSelect = document.getElementById('region-select');
    const regionData = {
        punjab: {
            name: "Punjab",
            description: "Known for its vibrant bhangra dance, colorful truck art, and delicious cuisine including sarson ka saag and makki di roti.",
            capital: "Lahore",
            landmark: "Badshahi Mosque",
            dress: "Shalwar Kameez with Turban",
            festival: "Basant",
            image: "./assets/images/temples/Somanath_mandir_cropped.jpeg"
        },
        sindh: {
            name: "Sindh",
            description: "Famous for its Ajrak cloth, Sindhi embroidery, and the ancient Indus Valley Civilization sites like Mohenjo-daro.",
            capital: "Karachi",
            landmark: "Mohatta Palace",
            dress: "Ajrak and Topi",
            festival: "Sindhi Topi Day",
            image: "./images/sindh-culture.jpg"
        },
        balochistan: {
            name: "Balochistan",
            description: "Known for its vast deserts, rugged mountains, and rich cultural heritage, including Balochi music and handicrafts.",
            capital: "Quetta",
            landmark: "Ziarat Juniper Forest",
            dress: "Shalwar Kameez and Turban for men, Shalwar Kameez for women",
            festival: "Kalash Festival",
            image: "./images/balochistan-culture.jpg"
        },
        kpk: {
            name: "Khyber Pakhtunkhwa",
            description: "Renowned for its historical significance, breathtaking landscapes, and Pashtun culture with its warm hospitality.",
            capital: "Peshawar",
            landmark: "Khyber Pass",
            dress: "Shalwar Kameez and Waistcoat for men, Shalwar Kameez for women",
            festival: "Basant",
            image: "./images/kpk-culture.jpg"
        },
        gilgit: {
            name: "Gilgit-Baltistan",
            description: "A paradise for adventure enthusiasts, offering stunning mountain peaks like K2, glaciers, and serene lakes.",
            capital: "Gilgit",
            landmark: "K2 Mountain",
            dress: "Shalwar Kameez and Cap for men, Shalwar Kameez for women",
            festival: "Hunza Festival",
            image: "./images/gilgit-culture.jpg"
        }
    };

    function updateRegionInfo(region) {
        const data = regionData[region];
        document.getElementById('region-name').textContent = data.name;
        document.getElementById('region-description').textContent = data.description;
        document.getElementById('region-capital').textContent = data.capital;
        document.getElementById('region-landmark').textContent = data.landmark;
        document.getElementById('region-dress').textContent = data.dress;
        document.getElementById('region-festival').textContent = data.festival;
        document.getElementById('region-image').src = data.image;
    }

    regionSelect.addEventListener('change', function () {
        updateRegionInfo(this.value);
    });

    // Initialize the content with the selected region (Punjab by default)
    updateRegionInfo(regionSelect.value);
});