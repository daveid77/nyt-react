import axios from "axios";

export default {
  // Gets all articles
  getArticles: function(topic, startYear, endYear) {
      console.log(topic); // + ' | ' + startyear + ' | ' + endyear);
    let apikey = `24881b82f17b48b299e435dbc820ef19`;
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apikey}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231`;
    return axios.get(url)
      .then(res => {
          // console.log(res.data.response.docs);
        return res.data.response.docs;
      });
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  // saveArticle: function(articleData) {
  //   return axios.post("/api/articles", articlesData);
  // }
};
