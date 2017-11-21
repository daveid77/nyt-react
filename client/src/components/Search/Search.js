import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../Results";

class Search extends Component {

  state = {
    results: [],
    topic: "",
    startdate: "",
    enddate: ""
  };

  loadArticles = (event) => {
    event.preventDefault();
      // alert('hell');
      console.log(this.state.topic);
    API.getArticles(this.state.topic, this.state.startdate, this.state.enddate)
      .then(res => {
        this.setState({ results: res, topics: "", startdate: "", enddate: "" });
        console.log(this.state.results)
      }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
      // console.log(this.state.topic);
  };

  handleFormSubmit = event => {
    event.preventDefault();
      console.log(this.state.topic);
    if (this.state.topic && this.state.startdate && this.state.enddate) {
      API.saveArticle({
        topic: this.state.topic,
        startdate: this.state.startdate,
        enddate: this.state.enddate
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
                        <label htmlFor="startdate">Start Date:</label><br/>
                        <input 
                          value={this.state.startdate}
                          onChange={this.handleInputChange}
                          name="startdate"
                          placeholder="YYYYMMDD" 
                          className="form-control" 
                          id="startdate"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="enddate">End Date:</label><br/>
                        <input 
                          value={this.state.enddate}
                          onChange={this.handleInputChange}
                          name="enddate"
                          placeholder="YYYYMMDD"
                          className="form-control" 
                          id="enddate"
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
