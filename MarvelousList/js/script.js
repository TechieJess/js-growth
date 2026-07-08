const filmTitles = document.querySelectorAll('.movie-list li');
const filmTitleDisplay = document.querySelector('.film-details h2');
const filmDate = document.querySelector('.film-date');
const filmInfo = document.querySelector('.film-info');
const filmActors = document.querySelector('.actors');
const images = document.querySelector('.film-details img');

const films = {
    "Avengers: Endgame": {
        date: "April 22, 2019",
        actors: [
        "Robert Downey Jr.",
        "Chris Evans",
        "Mark Ruffalo",
        "Chris Hemsworth",
        "Scarlett Johansson"
        ],
        info: "After the devastating events of Avengers: Infinity War, the universe has been left in ruins because of Thanos' actions. With half of all life wiped out, the remaining Avengers must reunite for one final mission. Together with old allies, they travel through time in a desperate attempt to reverse the snap, restore hope to humanity, and defeat Thanos once and for all.", 
        image:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    "Doctor Strange": {
        date: "November 4, 2016",
        actors: [
        "Benedict Cumberbatch",
        "Chiwetel Ejiofor",
        "Rachel McAdams",
        "Benedict Wong",
        "Tilda Swinton"
        ],
        info:
        "Dr. Stephen Strange is a brilliant but arrogant neurosurgeon whose life changes forever after a terrible car accident damages his hands. While searching for a cure, he discovers the hidden world of mystic arts and powerful sorcerers. Forced to embrace his new destiny, Strange learns to protect Earth from dangerous threats that exist beyond time and space.",
        image:
        "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"
    },

    "Black Panther": {
        date: "February 16, 2018",
        actors: [
        "Chadwick Boseman",
        "Michael B. Jordan",
        "Lupita Nyong'o",
        "Danai Gurira",
        "Letitia Wright"
        ],
        info:
        "Following the death of his father, T'Challa returns to the technologically advanced nation of Wakanda to take his rightful place as king. However, his leadership is challenged by a powerful enemy with a personal connection to Wakanda's past. As Black Panther, T'Challa must protect his people, defend his kingdom, and decide what kind of ruler he wants to become.",
        image:
        "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
    },

    "Spider-Man: Homecoming": {
        date: "July 7, 2017",
        actors: [
        "Tom Holland",
        "Michael Keaton",
        "Zendaya",
        "Jacob Batalon",
        "Robert Downey Jr."
        ],
        info:
        "After fighting alongside the Avengers, Peter Parker returns to his everyday life as a high school student in Queens. Eager to prove that he is more than just a neighborhood superhero, Peter takes on the dangerous Vulture, whose powerful alien technology threatens the city. Along the way, he learns that being a true hero means accepting responsibility and making difficult choices.",
        image:
        "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg"
    }
}

filmTitles.forEach((item) => {
    item.addEventListener("click", (e) => {
        const clickedTitle = e.target.dataset.title;
        const filmData = films[clickedTitle];
        filmTitleDisplay.textContent = clickedTitle;
        filmDate.textContent = filmData.date;
        filmInfo.textContent = filmData.info;
        filmActors.textContent = "";
        images.src = filmData.image;

        filmTitles.forEach((item) => {
            item.classList.remove("active");
        })
        e.target.classList.add("active");

        filmData.actors.forEach((actor) =>{
            const newSpan = document.createElement("span");
            newSpan.textContent = actor;
            filmActors.appendChild(newSpan);
        })
    })
})

