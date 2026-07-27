const filmTitles = document.querySelectorAll('.movie-list li');
const filmTitleDisplay = document.querySelector('.film-details h2');
const filmDate = document.querySelector('.film-date');
const filmInfo = document.querySelector('.film-info');
const filmActors = document.querySelector('.actors');
const images = document.querySelector('.film-details img');


filmTitles.forEach((item) => {
    item.addEventListener("click", (e) => {
        const clickedTitle = e.target.dataset.title;
        filmTitleDisplay.textContent = clickedTitle;
        filmDate.textContent = e.target.dataset.date;
        filmInfo.textContent = e.target.dataset.info;
        images.src = e.target.dataset.image;

        filmTitles.forEach((item) => {
            item.classList.remove("active");
        })
        e.target.classList.add("active");

        filmActors.textContent = ""

        e.target.dataset.actors.split(",").forEach((actor) =>{
            const newSpan = document.createElement("span");
            newSpan.textContent = actor;
            filmActors.appendChild(newSpan);
        })
    })
})

filmTitles[0].click();
