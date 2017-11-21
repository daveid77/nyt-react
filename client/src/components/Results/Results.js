import React from "react";

const Results = () =>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1>Results</h1>
          </div>
          <div class="panel-body">

            <div class="article-wrapper">
              <div class="panel panel-default" style={{marginBottom: '5px'}}>
                <div class="panel-body">
                  
                  <button class="btn btn-md btn-primary pull-right change-saved" data-id="">Save</button>

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
