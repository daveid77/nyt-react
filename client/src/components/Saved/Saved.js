import React from "react";

const Saved = () =>
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1>Saved</h1>
          </div>
          <div className="panel-body">

            <div className="article-wrapper">
              <div className="panel panel-default" style={{marginBottom: '5px'}}>
                <div className="panel-body">
                  
                  <button className="btn btn-md btn-primary pull-right change-saved" data-id="">Remove</button>
                  
                  <button className="btn btn-md btn-primary pull-right change-saved" data-id="" style={{marginRight: '10px'}}>Add Annotation</button>

                  <h4>Article Title</h4>
                  <p>Date Saved: 10/14/17</p>

                  {/*<p>
                    <a href="#" target="_blank">Read More</a>
                  </p>*/}

                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-body">

                  <p>This article blew my mind!</p>

                </div>
              </div>
            </div>

            <div className="article-wrapper">
              <div className="panel panel-default" style={{marginBottom: '5px'}}>
                <div className="panel-body">
                  
                  <button className="btn btn-md btn-primary pull-right change-saved" data-id="">Remove</button>
                  
                  <button className="btn btn-md btn-primary pull-right change-saved" data-id="" style={{marginRight: '10px'}}>Add Annotation</button>

                  <h4>Article Title #2</h4>
                  <p>Date Saved: 10/14/17</p>

                  {/*<p>
                    <a href="#" target="_blank">Read More</a>
                  </p>*/}

                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-body">

                  <p>This article sucks, but I saved it anyway.</p>

                </div>
              </div>
            </div>

          </div>{/* end panel body */}

        </div>
      </div>
    </div>
  </div>;

export default Saved;
