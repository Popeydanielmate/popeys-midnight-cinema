import deathstalkerPoster from "../assets/deathstalker-poster.jpeg";
import deathstalkerModalPhoto from "../assets/deathstalker_modalcover.png";
import stalker_modalcover from "../assets/stalker_modalcover.avif";
import stalkerPoster from "../assets/stalkerPoster.jpg";
import kasparPoster from "../assets/kasparPoster.jpg";
import kaspar_modalcover from "../assets/kaspar_modalcover.avif";
import stroszekPoster from "../assets/stroszekPoster.jpg";
import stroszek_modalcover from "../assets/stroszek_modalcover.avif";
import blackRainbowPoster from "../assets/blackRainbowPoster.jpeg";
import blackrainbow_modalcover from "../assets/blackrainbow_modalcover.webp";

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
    genres: ["Dystopian Sci Fi, ", " Psychological Drama, ", " Epic", ],
    duration: "162 min",
    language: "Russian (with English subs) ",
    link: "https://www.youtube.com/watch?v=Q3hBLv-HLEc",
    },

    {
    id: 3,
    title: "The Enigma of Kaspar Hauser",
    coverPhoto: kaspar_modalcover,
    year: 1974,
    director: "Werner Herzog",
    cast: ["Bruno S", "Walter Ladengast", "Brigitte Mira",],
    synopsis: "Herzog's film is based upon the true and mysterious story of Kaspar Hauser, a young man who suddenly appeared in Nuremberg in 1828, barely able to talk or walk, and bearing a strange note; he later explained that he had been held captive in a dungeon of some sort for his entire life that he could remember, and only recently was he released, for reasons unknown. His benefactor attempts to integrate him into society, with intriguing results",
    whyWatch: "One of Werner Herzog’s most haunting and human films, telling the true story of a young man who spent his life in isolation and is suddenly thrust into society. Through Kaspar’s innocent, literal-minded view of the world, the film becomes a beautiful exploration of what it actually means to be “civilized,” how society treats outsiders, and how fragile and strange human behavior really is. Bruno S. gives a raw, unforgettable performance that feels almost documentary-real, and Herzog turns the story into something both philosophical and deeply emotional. It’s a film that stays simple on the surface but resonates long afterward.",
    posterUrl: kasparPoster,
    rating: "7.7/10", 
    genres: ["Period Drama, ", " Biography, ", " History", ],
    duration: "110 min",
    language: "German (with English auto sub option) ",
    link: "https://www.youtube.com/watch?v=t5q6QmiikM8",
    },

    {
    id: 4,
    title: "Stroszek",
    coverPhoto: stroszek_modalcover,
    year: 1977,
    director: "Werner Herzog",
    cast: ["Bruno S", "Eva Mattes", "Clemens Scheitz", "Wilhelm von Homburg", ],
    synopsis: "Bruno Stroszek is released from prison and warned to stop drinking. He has few skills and fewer expectations: with a glockenspiel and an accordion, he ekes out a living as a street musician. He befriends Eva, a sex worker down on her luck. After they are harried and beaten by the thugs who have been Eva's pimps, they join Bruno's neighbor, Scheitz, an elderly eccentric, when he leaves Germany to live in Wisconsin. In that winter bound, barren prairie, Bruno works as a mechanic, Eva as a waitress. They buy a trailer. Then, bills mount, the bank threatens to repossess the trailer, Eva wants privacy, and inexorably, the promise of a new life deserts Bruno.",
    whyWatch: "One of Herzog’s most heartbreaking yet darkly funny films, following a gentle, unlucky man who leaves Germany hoping for a better life in America, only to find a different kind of struggle. It blends bleak realism with surreal, poetic moments, creating a story that feels both painfully human and strangely dreamlike. Bruno S. gives another raw, vulnerable performance that makes the film emotionally gripping, and Herzog uses the American landscape to highlight the absurdities of modern life.",
    posterUrl: stroszekPoster,
    rating: "7.7/10", 
    genres: ["Drama, ", " Tragic Comedy, ", ],
    duration: "110 min",
    language: "German, English (with English sub) ",
    link: "https://www.youtube.com/watch?v=FCDmvgrxrOE",
    },

    {
    id: 5,
    title: "Beyond The Black Rainbow",
    coverPhoto: blackrainbow_modalcover,
    year: 2010,
    director: "Panos Cosmatos",
    cast: ["Eva Bourne", "Michael J Rogers", "Scott Hylands", "Rondel Reynoldson", ],
    synopsis: "In 1983, a young mute woman with psychic abilities is held captive within the Arboria Institute, a secluded futuristic facility run by a sinister doctor with an unraveling mind and a growing obsession with her.",
    whyWatch: "delivers a hypnotic, visually stunning blend of retro-sci-fi and psychological horror that feels unlike anything else. Rather than focusing on plot, it creates an intense, dreamlike mood through neon-soaked visuals, eerie synth music, and slow-burn tension. It’s a film that rewards viewers who enjoy atmosphere, symbolism, and unsettling, surreal imagery.",
    posterUrl: blackRainbowPoster,
    rating: "5.9/10", 
    genres: ["Sci Fi, ", " Psychological Horror, ", ],
    duration: "110 min",
    language: "English (with English sub) ",
    link: "https://www.youtube.com/watch?v=0tTI3gYzMIc",
    }






];

export default movies;
