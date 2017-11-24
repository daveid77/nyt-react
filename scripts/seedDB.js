const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "I’m a Lesbian Who Hates Cats. I’m Going to Die Alone.",
    date: "2017-11-03T19:00:15+0000",
    url:
      'https://www.nytimes.com/2017/11/03/opinion/sunday/lesbian-cats-dating.html'
  },
  {
    title: "2 Guinness World Records-Holding Cats Missing After Fire",
    date: "2017-11-13T16:01:07+0000",
    url:
      'https://www.nytimes.com/aponline/2017/11/13/us/ap-us-cat-records-house-fire.html'
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
