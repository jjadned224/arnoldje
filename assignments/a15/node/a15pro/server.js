const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static('public'));
app.use(express.json());
const cors = require("cors");
app.use(cors());

const upload = multer({dest: __dirname + "/public/songimg"});

app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

let songs = [
    {
        _id: 1,
        name: "Stranger Things Have Happened",
        Artist: ["Foo Fighters"],
        release: "Sep 25th, 2007",
        runtime: "5:21",
        genres: ["Alternative Rock", " Post-Grunge", " Hard Rock"],
        recby: ["Jaden"],
        img: "./songimg/ESPG.jpg",
        spotifylink:  'https://open.spotify.com/embed/track/7zaZlzl0XhthNwH3GQcyZ0?utm_source=generator', 
    },
    {
        _id: 2,
        name: "This is War",
        Artist: ["Alter Bridge"],
        release: "Oct 14th, 2022",
        runtime: "4:04",
        genres: ["Alternative Rock", " Progressive Metal",],
        recby: ["Jaden"],
        img: "./songimg/P&Ks.jpg",
        spotifylink:  'https://open.spotify.com/embed/track/2e8F1M3b7dI2GDUDZh6c9l?utm_source=generator', 
    },
    {
        _id: 3,
        name: "I'm Not Alright",
        Artist: ["Shinedown"],
        release: "Mar 27th, 2012",
        runtime: "3:07",
        genres: ["Hard-Rock", " Post-Grunge",],
        recby: ["Jaden"],
        img: "./songimg/Am.jpg",
        spotifylink:  'https://open.spotify.com/embed/track/558KeqwhMiNafy3Dy4kan5?utm_source=generator', 
    },
    {
        _id: 4,
        name: "Bleed American",
        Artist: ["Jimmy Eat World"],
        release: "July 24th, 2001",
        runtime: "3:01",
        genres: ["Emo", " Alternative Rock", " Pop-punk", " Power pop"],
        recby: ["Jaden"],
        img: "./songimg/BA.jpeg",
        spotifylink:  'https://open.spotify.com/embed/track/61XspFITuKmAlYdQacNCbF?utm_source=generator', 
    },
    {
        _id: 5,
        name: "When the Fire and the Rose Were One",
        Artist: ["Wilderun"],
        release: "Nov 1st, 2019",
        runtime: "11:51",
        genres: ["Metal", " Progressive Metal", " Folk", " Orchestral"],
        recby: ["Jaden"],
        img: "./songimg/Veil.png",
        spotifylink:  'https://open.spotify.com/embed/track/5AEWvbrAUhj7t5tSkkW1ZM?utm_source=generator', 
    },
    {
        _id: 6,
        name: "Suzanne",
        Artist: ["Creeper"],
        release: "Oct 3rd, 2016",
        runtime: "2:40",
        genres: ["Pop Punk", " Punk Rock",],
        recby: ["Jaden"],
        img: "./songimg/Suz.jpg",
        spotifylink:  'https://open.spotify.com/embed/track/7fa1JCl90Uamf9SxBWNBTP?utm_source=generator', 
    },
    {
        _id: 7,
        name: "The Man Who Sold The World - Live",
        Artist: ["Nirvana"],
        release: "Nov 18th, 1993",
        runtime: "4:21",
        genres: ["Grunge", " Alternative", " Indie", " Blues"],
        recby: ["Jaden"],
        img: "./songimg/TMWSTW.jpg",
        spotifylink:  'https://open.spotify.com/embed/track/15VRO9CQwMpbqUYA7e6Hwg?utm_source=generator', 
    },
    {
        _id: 8,
        name: "A Song for the Birds",
        Artist: ["Eisley"],
        release: "February 17th, 2017",
        runtime: "4:01",
        genres: ["Alternative", " Indie", " Rock"],
        recby: ["Jaden"],
        img: "./songimg/Dreaming.jpg",
        spotifylink: 'https://open.spotify.com/embed/track/3xKKKzMj0uwE8bqdJWHwZP?utm_source=generator',
    }
];

app.get("/api/songs", (req, res) => {
    res.json(songs);
});

app.post("/api/songs", upload.single("img"), (req, res) => {
    const result = validateSong(req.body);
    const jsonData = req.body;
    
    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const song = {
        _id: songs.length+1,
        name: req.body.name,
        Artist: req.body.Artist,
        release: req.body.release,
        runtime: req.body.runtime,
        genres: req.body.genres,
        recby: req.body.recby,
        img:  "",
        spotifylink: req.body.spotifylink,
    }
    if(req.file) {
        song.img = "/songimg/" + req.file.filename;
    }
    songs.push(song);
    res.send(songs);
});

const validateSong = (song) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        name: Joi.string().min(3).required(),
        Artist: Joi.string().min(3).required(),
        release: Joi.string().min(3).required(),
        runtime: Joi.string().min(3).required(),
        genres: Joi.string().min(3).required(),
        recby: Joi.string().min(3).required(),
        spotifylink: Joi.allow(""),
    });
    return schema.validate(song);
}

app.listen(3000, () => {
    console.log("Working");
});

app.delete("/api/songs/:id", (req,res) => {
   const id = parseInt(req.params.id);
   const song = songs.find((r) => r._id === id);
   
   if (!song) {
    res.status(404).send("The song was not found");
    return;
}

const index = songs.indexOf(song);
songs.splice(index, 1);
res.send(song);
});