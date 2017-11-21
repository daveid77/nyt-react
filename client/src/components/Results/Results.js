import React from "react";

const Results = () =>
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1>Results</h1>
          </div>
          <div className="panel-body">

            <div className="article-wrapper">
              <div className="panel panel-default" style={{marginBottom: '5px'}}>
                <div className="panel-body">
                  
                  <button className="btn btn-md btn-primary pull-right change-saved" data-id="">Save</button>

                  <h4>Article Title</h4>

                  {/*<p>
                    <a href="#" target="_blank">Read More</a>
                  </p>*/}

                </div>
              </div>
            </div>

          </div>{/* end panel body */}

        </div>
      </div>
    </div>
  </div>;

export default Results;
