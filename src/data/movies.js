import deathstalkerPoster from "../assets/deathstalker-poster.jpeg";
import deathstalkerModalPhoto from "../assets/deathstalker_modalcover.png";
import stalker_modalcover from "../assets/stalker_modalcover.avif";
import stalkerPoster from "../assets/stalkerPoster.jpg";

const movies = [
  {
    id: 1,
    title: "Deathstalker",
    coverPhoto: deathstalkerModalPhoto,
    year: 1983,
    director: "James Sbardellati",
    cast: ["Rick Hill", "Barbi Benton", "Richard Brooker", "Lana Clarkson"],
    synopsis: "A lone warrior is tasked by a witch to find three magical artefacts — a sword, a chalice and an amulet — and must confront the evil sorcerer Munkar in a deadly tournament.",
    whyWatch: "A gloriously cheesy 80s sword-and-sorcery romp — perfect if you love campy practical effects, relentless action, and movies that never take themselves too seriously.",
    posterUrl: deathstalkerPoster,
    rating: "4.6/10", 
    genres: ["Fantasy, ", "Sword & Sorcery ", ],
    duration: "80 min",
    language: "English",
    link: "https://tubitv.com/movies/463724/deathstalker",
    },

    {
    id: 2,
    title: "Stalker",
    coverPhoto: stalker_modalcover,
    year: 1979,
    director: "Andrei Tarkovsky",
    cast: ["Alisa Freyndlikh", "Aleksandr Kaydanovskiy", "Anatoliy Solonitsyn",],
    synopsis: "A guide leads two men through an area known as the Zone to find a room that grants wishes.",
    whyWatch: "One of the most atmospheric and visually striking films ever made, immersing you in a mysterious, haunting world that feels almost alive. It’s philosophical without being pretentious, exploring universal themes like desire, purpose, and fear through mood rather than exposition. The film’s slow, deliberate pacing rewards attention, its imagery is unforgettable, and its emotional core is surprisingly powerful. It’s also hugely influential — shaping modern sci-fi, games, and filmmaking — making it a unique experience that lingers with you long after it ends.",
    posterUrl: stalkerPoster,
    rating: "8.0/10", 
    genres: ["Dystopian Sci Fi, ", "Psychological Drama ", "Epic", ],
    duration: "162 min",
    language: "Russian (with English subs) ",
    link: "https://www.youtube.com/watch?v=Q3hBLv-HLEc",
    }


];

export default movies;
