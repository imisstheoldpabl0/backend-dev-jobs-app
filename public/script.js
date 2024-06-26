const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

/* HOME PAGE - SEARCH */

document.querySelector("#search").addEventListener("click", () => {
    let userResult = document.getElementById("jobTitle").value;
    console.log(userResult);

    document.querySelector("#jobOffers").innerHTML = ``;

    fetch(`http://localhost:3000/api/search?title=${userResult}`)// Fetches the provided URL with parameters from the user
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                document.querySelector("#jobOffers").innerHTML += `
                <div class='jobCard'>
                    <h3>${data[i].title}</h3>
                    <div class='jobCardInfo'>
                        <p>${data[i].company_name}</p>
                        <p>${data[i].location}</p>
                    <p>${data[i].description}</p>
                    <img src=${data[i].logo}>
                    <a href=${data[i].link}>MORE INFO</a>
                </div>
                `;
            }
        })
});