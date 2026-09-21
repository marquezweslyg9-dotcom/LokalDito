const businesses = [
    {
        id: 1,
        name: "Tita Nena's Kakanin House",
        category: "Food",
        location: "San Ildefonso, Bulacan",
        distance: "0.4 km",
        description:
            "Traditional Filipino kakanin and homemade snacks."
    },

    {
        id: 2,
        name: "Kapitbahay Coffee Co.",
        category: "Coffee",
        location: "San Ildefonso, Bulacan",
        distance: "0.7 km",
        description:
            "A cozy neighborhood coffee shop featuring local drinks."
    },

    {
        id: 3,
        name: "Luntian Plants & Pots",
        category: "Plants",
        location: "Baliwag, Bulacan",
        distance: "1.2 km",
        description:
            "Local plants, pots and gardening supplies."
    },

    {
        id: 4,
        name: "Kuya Ben's Bike Repair",
        category: "Services",
        location: "Plaridel, Bulacan",
        distance: "1.5 km",
        description:
            "Affordable bicycle repair and maintenance."
    },

    {
        id: 5,
        name: "Sari-Sari Studio",
        category: "Retail",
        location: "Malolos, Bulacan",
        distance: "2.0 km",
        description:
            "A small local shop featuring everyday Filipino essentials."
    },

    {
        id: 6,
        name: "Brew & Bake Local",
        category: "Food",
        location: "Meycauayan, Bulacan",
        distance: "2.4 km",
        description:
            "Fresh baked goods and locally inspired coffee."
    },

    {
        id: 7,
        name: "Ate Liza's Homemade Delights",
        category: "Food",
        location: "Plaridel, Bulacan",
        distance: "2.8 km",
        description:
            "Homemade Filipino meals and desserts."
    },

    {
        id: 8,
        name: "Bahay Habi Crafts",
        category: "Crafts",
        location: "Guiguinto, Bulacan",
        distance: "3.1 km",
        description:
            "Handcrafted local products and Filipino-inspired decor."
    },

    {
        id: 9,
        name: "QuickFix Gadget Corner",
        category: "Technology",
        location: "Bocaue, Bulacan",
        distance: "3.7 km",
        description:
            "Basic gadget accessories and repair services."
    },

    {
        id: 10,
        name: "Farm2Table Fresh Mart",
        category: "Groceries",
        location: "San Miguel, Bulacan",
        distance: "4.1 km",
        description:
            "Fresh produce and locally sourced products."
    }
];


function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document
        .getElementById(screenId)
        .classList.add("active");

    window.scrollTo(0, 0);
}


function goHome() {
    showScreen("homeScreen");
}


function goBack() {
    goHome();
}


function openSearch() {

    showScreen("searchScreen");

    document
        .getElementById("searchInput")
        .focus();

    displayBusinesses(businesses);
}


function openSaved() {

    showScreen("savedScreen");

    displaySavedStores();
}


function openProfile() {
    showScreen("profileScreen");
}


function openSellerDashboard() {

    showScreen("sellerScreen");

    const savedName =
        localStorage.getItem("sellerName");

    const savedDescription =
        localStorage.getItem("sellerDescription");

    if (savedName) {

        document
            .getElementById("sellerName")
            .value = savedName;

    }

    if (savedDescription) {

        document
            .getElementById("sellerDescription")
            .value = savedDescription;

    }
}


function openMenu() {

    alert(
        "LoKalDiTo Menu\n\n" +
        "Search Businesses\n" +
        "Saved Stores\n" +
        "Profile\n" +
        "Seller Dashboard"
    );
}


function searchBusinesses() {

    const query =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const results = businesses.filter(store =>

        store.name
            .toLowerCase()
            .includes(query) ||

        store.category
            .toLowerCase()
            .includes(query) ||

        store.location
            .toLowerCase()
            .includes(query)

    );

    displayBusinesses(results);
}


function displayBusinesses(list) {

    const container =
        document.getElementById("searchResults");

    if (list.length === 0) {

        container.innerHTML = `
            <p style="text-align:center;padding:40px;">
                No local businesses found.
            </p>
        `;

        return;
    }


    container.innerHTML = list.map(store => `

        <div
            class="store-card"
            onclick="openStore(${store.id})"
        >

            <img
                src="lokaldoto-cover.jpg"
                class="store-card-image"
                alt="${store.name}"
            >

            <div>

                <h3>${store.name}</h3>

                <p>${store.category}</p>

                <p>📍 ${store.location}</p>

                <p>${store.distance}</p>

            </div>

        </div>

    `).join("");
}


function openStore(id) {

    const store =
        businesses.find(item => item.id === id);

    if (!store) return;


    showScreen("storeScreen");


    const saved =
        getSavedStores().includes(store.id);


    document.getElementById("storeDetails").innerHTML = `

        <div class="store-detail">

            <img
                src="lokaldoto-cover.jpg"
                class="store-detail-image"
                alt="${store.name}"
            >

            <h1>${store.name}</h1>

            <p>
                <strong>${store.category}</strong>
            </p>

            <p>
                📍 ${store.location}
            </p>

            <p>
                📏 ${store.distance}
            </p>

            <div class="info-box">

                <h3>About Us</h3>

                <p>
                    ${store.description}
                </p>

            </div>

            <div class="info-box">

                <h3>Business Hours</h3>

                <p>
                    Monday - Saturday:
                    8:00 AM - 7:00 PM
                </p>

                <p>
                    Sunday:
                    9:00 AM - 5:00 PM
                </p>

            </div>

            <div class="info-box">

                <h3>Products & Services</h3>

                <p>
                    Local products, services and
                    community-based offerings.
                </p>

            </div>

            <button
                class="save-button"
                onclick="toggleSaved(${store.id})"
            >
                ${saved ? "♥ Saved" : "♡ Save Store"}
            </button>

        </div>

    `;
}


function getSavedStores() {

    return JSON.parse(
        localStorage.getItem("savedStores") || "[]"
    );
}


function toggleSaved(id) {

    let saved = getSavedStores();

    if (saved.includes(id)) {

        saved =
            saved.filter(
                storeId => storeId !== id
            );

    } else {

        saved.push(id);

    }

    localStorage.setItem(
        "savedStores",
        JSON.stringify(saved)
    );

    openStore(id);
}


function displaySavedStores() {

    const saved = getSavedStores();

    const stores =
        businesses.filter(store =>
            saved.includes(store.id)
        );

    const container =
        document.getElementById("savedStores");


    if (stores.length === 0) {

        container.innerHTML = `
            <p style="text-align:center;padding:50px 20px;">
                You haven't saved any stores yet.
            </p>
        `;

        return;
    }


    displaySavedCards(stores);
}


function displaySavedCards(stores) {

    document.getElementById("savedStores").innerHTML =
        stores.map(store => `

            <div
                class="store-card"
                onclick="openStore(${store.id})"
            >

                <img
                    src="lokaldoto-cover.jpg"
                    class="store-card-image"
                    alt="${store.name}"
                >

                <div>

                    <h3>${store.name}</h3>

                    <p>${store.category}</p>

                    <p>📍 ${store.location}</p>

                </div>

            </div>

        `).join("");
}


function saveSeller() {

    const name =
        document
            .getElementById("sellerName")
            .value;

    const description =
        document
            .getElementById("sellerDescription")
            .value;


    localStorage.setItem(
        "sellerName",
        name
    );

    localStorage.setItem(
        "sellerDescription",
        description
    );


    alert(
        "Your store information has been saved!"
    );
      }
