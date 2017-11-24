import React, { Component } from "react";
// import moment from 'moment';
import API from "../../utils/API";
import Results from "../Results";
import Saved from "../Saved";

class Search extends Component {

  state = {
    results: [],
    topic: "",
    startyear: "",
    endyear: "",
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data})
      )
      .catch(err => console.log(err));
  };

  saveArticle = targetIndex => {
    if (this.state.results[targetIndex].headline.main && this.state.results[targetIndex].pub_date && this.state.results[targetIndex].web_url) {
      API.saveArticle({
        title: this.state.results[targetIndex].headline.main,
        date: this.state.results[targetIndex].pub_date,
        url: this.state.results[targetIndex].web_url
      })
        .then(
          res => this.loadArticles()
        )
        .catch(err => console.log(err));
    }
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.apiArticles(this.state.topic, this.state.startyear, this.state.endyear)
      .then(res => {
          // console.log('res[0].pub_date: ', res[0].pub_date);
      // TRYING TO MAP A NEW FORMAT FOR ALL RESULTS DATES BEFORE STATE SET
      // BUT CAN'T GET IT WORKING, SO HANDLED IN RESULTS.JS ON DISPLAY
        // res.map( (res, i) => (
        //   // console.log(res.pub_date)
        //   res.pub_date = moment(res.pub_date, 'MMMM Do, YYYY, h:mma')
        // ))
        this.setState({ results: res, topic: "", startyear: "", endyear: "" });
        // console.log('loadArticles() this.state.results: ', this.state.results);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h1>Search</h1>
                  </div>
                  <div className="panel-body">
                    <form onSubmit={this.handleFormSubmit}>
                      <div className="form-group">
                        <label htmlFor="topic">Topic:</label><br/>
                        <input
                          value={this.state.topic}
                          onChange={this.handleInputChange}
                          name="topic"
                          placeholder="Enter Search Topic"
                          className="form-control" 
                          id="topic"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="startyear">Start Year:</label><br/>
                        <input 
                          value={this.state.startyear}
                          onChange={this.handleInputChange}
                          name="startyear"
                          placeholder="YYYY" 
                          className="form-control" 
                          id="startyear"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="endyear">End Year:</label><br/>
                        <input 
                          value={this.state.endyear}
                          onChange={this.handleInputChange}
                          name="endyear"
                          placeholder="YYYY"
                          className="form-control" 
                          id="endyear"
                        />
                      </div>
                      <button type="submit" className="btn btn-default btn-primary">Search</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* ONLY RENDERS RESULTS COMPONENT WHEN RESULTS STATE NOT EMPTY */}
        {this.state.results.length > 0 &&
          <Results results={this.state.results} saveArticle={this.saveArticle} />
        }

      {/* ONLY RENDERS SAVED COMPONENT WHEN ARTICLES STATE NOT EMPTY */}
        {this.state.articles.length > 0 &&
          <Saved saved={this.state.articles} deleteArticle={this.deleteArticle} />
        }

      </div>
    );
  }

}
export default Search;
