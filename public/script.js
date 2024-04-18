const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function showFav() {
    while (document.querySelector(".jobCard")) {
        document.querySelector(".checkbox").addEventListener("click", () => {
            let userFav = document.getElementById("favorite").checked
            console.log("Esto es el resultado checked: " + userFav);
        });
    }
}

/* ----- SEARCH RESULTS ----- */
document.querySelector("#search").addEventListener("click", () => {
    let userResult = document.getElementById("jobTitle").value
    //console.log(userResult);

    document.querySelector("#jobOffers").innerHTML = ``;

    fetch(`http://localhost:3000/api/search?title=${userResult}`)// Fetches the provided URL with parameters from the user
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                document.querySelector("#jobOffers").innerHTML += `
                <div class='jobCard'>
                <h2>Results:</h2>
                <h3>${data[i].title}</h3>
                <p>${data[i].company_name}</p>
                <p>${data[i].description}</p>
                <p>${data[i].location}</p>
                <img src=${data[i].logo}>
                <p>${data[i].logo}</p>
                <a href=${data[i].link}>More info.</a>
                <input type="checkbox" id="favorite${i}" class="checkbox" name="favorite">
                </div>
                `;
            }
            return data;
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                document.getElementById(`favorite${i}`).addEventListener("click", () => {
                    console.log(`Hola, estás guardando como favorito la oferta número: ${i}`);
                });
            }
        })
    });






