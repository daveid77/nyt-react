var mongoose = require("mongoose");

// Save reference to Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    // unique: true // This wasn't working, but upsert did
  },
  date: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  saved: {
    type: Boolean,
    default: false,
    required: true
  },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
