import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../Results";

class Search extends Component {

  state = {
    results: [],
    topic: "",
    startyear: "",
    endyear: ""
  };

  loadArticles = (event) => {
    event.preventDefault();
    API.getArticles(this.state.topic, this.state.startyear, this.state.endyear)
      .then(res => {
        this.setState({ results: res, topics: "", startyear: "", endyear: "" });
        // console.log(this.state.results)
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSave = event => {
    event.preventDefault();
      console.log(this.state.topic);
    if (this.state.topic && this.state.startyear && this.state.endyear) {
      API.saveArticle({
        topic: this.state.topic,
        startyear: this.state.startyear,
        endyear: this.state.endyear
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h1>Search</h1>
                    <form onSubmit={this.loadArticles}>
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
                      <input type="submit" className="btn btn-default btn-primary"/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <Results results={this.state.results} />

      </div>
    );
  }

}
export default Search;
