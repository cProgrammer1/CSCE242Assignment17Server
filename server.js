/* 
    Created by Chrissy Dobrowolski 
    Assignment 17- Server Edit and Delete (copied over from Assignment 15) 
    CSCE 242- 001 
    Due: 4.7.2024 

*/

// FOR TESTING: console.log("Testing");

const express = require("express");
const app = express();

const joi = require("joi");
const multer = require("multer");

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());

const cors = require("cors");
app.use(cors());

const storage = multer.diskStorage
({
    destination: (request, file, cb) =>
    {
      cb(null, "./public/images/");

    },

    filename: (request, file, cb) => 
    {
      cb(null, file.originalname);

    },

});

const upload = multer({storage:storage});

app.get("/", (request, response) => 
{
    // FOR TESTING: 
        // response.send("Test");
        // const testArray = ["test1, test2, test3"];
        // response.send(testArray);

    // Responds with file in existing directory 
    response.sendFile(__dirname + "/index.html");

});


const crafts = []

    crafts[0] =
        {
            "_id": "0",
            "name": "Beaded JellyFish",
            "image": "bead-jellyfish.jpg",
            "description": "Create a hanging jellyfish using eggcartons and multicolored beads",
            "supplies": [
                "String",
                "Egg cartons",
                "Beads"
            ]
        };

    crafts[1] = 
        {
            "_id": "1",
            "name": "Character Bookmarks",
            "image": "bookmarks.jpeg",
            "description": "Create a little birdy bookmark to always remin you were you were",
            "supplies": [
                "Yellow construction paper",
                "Orange construction paper",
                "Black construction paper"
            ]
        };

    crafts[2] = 
        {
            "_id": "2",
            "name": "Button Flowers",
            "image": "button-flowers.jpeg",
            "description": "Create a fun bouquet of flowers with your favorite buttons",
            "supplies": [
                "Multicolored buttons",
                "Multicolored flet",
                "Green straws",
                "Ribbon"
            ]
        };

    crafts[3] = 
        {
            "_id": "3",
            "name": "Cheerio Necklaces",
            "image": "cheerio-necklace.webp",
            "description": "Create a fun and edible necklace",
            "supplies": [
                "Cheerios or Fruit Loops",
                "Elastic string"
            ]
        };

    crafts[4] = 
        {
            "_id": "4",
            "name": "Cotton Ball Cupcakes",
            "image": "cotton-ball-cupcakes.webp",
            "description": "Decorate your fun filled cupcake however you want.",
            "supplies": [
                "Construction Paper",
                "Cotton Balls",
                "Black Sharpie",
                "Glitter"
            ]
        };

    crafts[5] = 
        {
            "_id": "5",
            "name": "School Themed Mason Jars",
            "image": "decorated-jars.jpeg",
            "description": "Let's make mason jars to ",
            "supplies": [
                "Construction Paper",
                "Cotton Balls",
                "Black Sharpie",
                "Glitter"
            ]
        };

    crafts[6] = 
        {
            "_id": "6",
            "name": "Egg Carton Flowers",
            "image": "egg-carton-flowers.jpg",
            "description": "Make a beautiful bouquet with egg cartons and other items you can find around the house",
            "supplies": [
                "Egg Cartons",
                "Butons",
                "Green Pipe Cleaner",
                "Ribbon",
                "Canvas"
            ]
        };

    crafts[7] = 
        {
            "_id": "7",
            "name": "Finger Puppets",
            "image": "finger-puppets.jpeg",
            "description": "These little critters are easy to make, and will entertain your little one while they make a show.",
            "supplies": [
                "Pom-poms",
                "Googly Eyes",
                "Pipe Cleaner"
            ]
        };

    crafts[8] = 
        {
            "_id": "8",
            "name": "Ribbon Flower Headbands",
            "image": "flower-headbands.jpg",
            "description": "Let your little one show off her new style with these pretty and customizable headbands",
            "supplies": [
                "Plain headband",
                "Ribbon",
                "Buttons",
                "Gems"
            ]
        };

    crafts[9] = 
        {
            "_id": "9",
            "name": "Hand Print Fish Puppets",
            "image": "handprint-fish.jpg",
            "description": "We all need to take every opportunity we can to remember those tiny hands, and what better way to do it, then to make fish puppets!",
            "supplies": [
                "Popsicle sticks",
                "Cardstock",
                "Gems",
                "Googly Eyes"
            ]
        };

    crafts[10] = 
        {
            "_id": "10",
            "name": "Hand Print Tree",
            "image": "hand-print-tree.jpeg",
            "description": "This is a fun way to get your little one into finger painting.",
            "supplies": [
                "Watercolor Paper",
                "Finger paint"
            ]
        };

    crafts[11] = 
        {
            "_id": "11",
            "name": "Melted Bead Bowl",
            "image": "melted-bead-bowl.jpeg",
            "description": "All they need to do is shape their faviorte design, warm it up and they have a brand new bowl.",
            "supplies": [
                "Beads",
                "Bowl",
                "Parchment paper"
            ]
        };

    crafts[12] = 
        {
            "_id": "12",
            "name": "Monster Kites",
            "image": "monster-rolls.jpg",
            "description": "Let's make those scary toilet paper rolls fly!",
            "supplies": [
                "Toilet paper rolls",
                "Paint",
                "Tissue Paper",
                "String"
            ]
        };

    crafts[13] = 
        {
            "_id": "13",
            "name": "Pool Noodle Boats",
            "image": "noodle-boats.png",
            "description": "Let's make a boat that will actually float, due to the floating bottom of a pool noodle.",
            "supplies": [
                "Pool Noodle",
                "Straw",
                "Plastic Paper"
            ]
        };

    crafts[14] = 
        {
            "_id": "14",
            "name": "Paper Plate Bees",
            "image": "paper-plate-bees.jpeg",
            "description": "Let's have fun with making cute little bees, or big bees actually.",
            "supplies": [
                "Paper Plate",
                "Googly Eyes",
                "Close Pins",
                "Black pom poms",
                "Yellow Paint",
                "Black Paint"
            ]
        };

    crafts[15] = 
        {
            "_id": "15",
            "name": "Paper Plate Dinosaurs",
            "image": "paper-plate-dinosaurs.jpg",
            "description": "Who would have thought that half a paper plate would be the base of a dinosaur.",
            "supplies": [
                "Paper Plate",
                "Paint",
                "Close Pins",
                "Construction Paper"
            ]
        };

    crafts[16] = 
        {
            "_id": "16",
            "name": "Porcupine Leafs",
            "image": "porcupine-leaf.webp",
            "description": "Let's turn an ordinary paper plate into a fun filled mask.",
            "supplies": [
                "Leafs",
                "Berries",
                "Acorns",
                "Construction Paper"
            ]
        };

    crafts[17] = 
        {
            "_id": "17",
            "name": "Rainbow Cloud",
            "image": "rainbow-cloud.webp",
            "description": "Some cotton and color and you'll have a beautiful rainbow.",
            "supplies": [
                "Paper Plate",
                "Cotton Balls",
                "Construction Paper"
            ]
        };

    crafts[18] = 
        {
            "_id": "18",
            "name": "Fun Shaped Crayons",
            "image": "shaped-crayons.jpg",
            "description": "Let's melt some crayons together and let them harden into fun shapes.",
            "supplies": [
                "Broken Crayons",
                "Mold"
            ]
        };

    crafts[19] = 
        {
            "_id": "19",
            "name": "Straw Farris Wheel",
            "image": "straw-faris-wheel.jpg",
            "description": "It might be too small to ride, but this farris wheel is the most colorful of all.",
            "supplies": [
                "Multicolored straws",
                "Platform"
            ]
        };

    crafts[20] = 
        {
            "_id": "20",
            "name": "Sunny String",
            "image": "sun-string.jpg",
            "description": "Let's practice our fine motor skills while we weave the string into a fun sun.",
            "supplies": [
                "Yellow String",
                "Paper Plate",
                "Yellow construction paper",
                "Yellow and Orange beads"
            ]
        };

    crafts[21] = 
        {
            "_id": "21",
            "name": "Tissue Ballerinas",
            "image": "tisue-dancer.jpeg",
            "description": "These beautiful dancers will look great on display",
            "supplies": [
                "Pipe cleaner",
                "Tissue Paper",
                "Elastics"
            ]
        };

    crafts[22] = 
        {
            "_id": "22",
            "name": "Toilet Paper Roll Animals",
            "image": "toilet-paper-animals.jpeg",
            "description": "These beautiful dancers will look great on display",
            "supplies": [
                "Toilet Paper Rolls",
                "Construction Paper",
                "Googly Eyes"
            ]
        };

    crafts[23] = 
        {
            "_id": "23",
            "name": "Toilet Paper Butterfly",
            "image": "toilet-paper-butterfly.jpg",
            "description": "Such a sweat little flyer",
            "supplies": 
            [
                "Toilet Paper Rolls",
                "Construction Paper",
                "Googly Eyes",
                "Buttons"
            ]
        };

    crafts[24] = 
        {
            "_id": "24",
            "name": "Valentines Jar",
            "image": "valentines-jar.webp",
            "description": "So much hearts all in one",
            "supplies": 
            [
                "Clay",
                "Glitter"
            ]
        };


app.get("/api/crafts", (request, response) => 
{
    console.log("API requested");
    // response.send("Test");
        
    // FOR TESTING: console.log(crafts);
    
    response.send(crafts);

});


app.post("/api/crafts", upload.single("image_input"), (request, response) =>
{
  // console.log("Made it in the post");

  const result = validateCraft(request.body);

  if(result.error)
  {
    // In event of 400 error, sends result's first error in array of errors 
    response.status(400).send(result.error.details[0].message);

    return;

  }

  console.log(crafts.length);

    const craft = 
    {
        _id: crafts.length,
        name: request.body.name_input,
        description: request.body.description_input,
        supplies: request.body.supply_input.split(",") // Splits comma-separated items in array 

    };

    if(request.file)
    {
        craft.image = "images/" + request.file.filename;

    }


    crafts.push(craft);
    console.log(craft);

    response.send(crafts);
  
  // console.log("Made it past the validator");

});


// Defines how craft should look 
const validateCraft = (craft) =>
{
  const schema = joi.object
  ({
    // Can be empty or full if editing existing recipe 
    _id: joi.allow(""),

    name_input: joi.string().min(3).required(),
    description_input: joi.string().min(3).required(),

    // Allowed to not have ingredients / be empty here 
    supply_input: joi.allow(""),

  }).unknown(true);

  // console.log(supply_input);

  return schema.validate(craft);

};


app.listen(3000, () => 
{
    console.log("Listening");

});