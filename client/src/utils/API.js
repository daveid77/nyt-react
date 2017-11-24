import axios from "axios";

export default {
  // Hits API for articles
  //  (API Documentation: https://developer.nytimes.com)  
  apiArticles: function(topic, startYear, endYear) {
      // console.log('getArticles() topic: ', topic);
    let apikey = `24881b82f17b48b299e435dbc820ef19`;
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apikey}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231&fl=web_url,headline,pub_date`;
    return axios.get(url)
      .then(res => {
          // console.log(res.data.response.docs);
        return res.data.response.docs;
      });
  },
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
      console.log('saveArticle() articleData: ', articleData);
    return axios.post("/api/books", articleData);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
