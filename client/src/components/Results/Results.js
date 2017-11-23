import React, { Component } from "react";
import API from "../../utils/API";

const Results = props => {
  return (
      
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h1>Results</h1>
              </div>
              <div className="panel-body">
                
                  {props.results.map( (results , i) => (
                    <div className="article-wrapper" key={i}>
                      <div className="panel panel-default" style={{marginBottom: '5px'}}>
                        <div className="panel-body">

                          <button className="btn btn-md btn-primary pull-right change-saved" data-id="" onSubmit={this.handleSave}>Save Article</button>
                              
                          <h4>{results.headline.main}</h4>

                          <p><a href="{results.web_url}">Read More</a></p>

                          <p>{results.pub_date}</p>

                        </div>
                      </div>
                    </div>
                  ))}
                
              </div>

            </div>
          </div>
        </div>
      </div>

)};

export default Results;
