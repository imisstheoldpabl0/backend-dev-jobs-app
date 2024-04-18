const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/* const getJob = async (id = "") => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`); //{} o [{},{},{},{}]
    let products = await response.json(); //{} o [{},{},{},{}]

    if (Array.isArray(products)) return products;
    else return [products]; // Siempre sea un [{}]
}; */

/* HOME PAGE - SEARCH */

document.querySelector("#search").addEventListener("click", () => {
    let userResult = document.getElementById("jobTitle").value
    console.log(userResult);

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
                <a href=${data[i].link}>MORE INFO</a>
                </div>
                `;
            }
        })

    
});


module.exports = {
    getSearchData,
}
