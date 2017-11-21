import React from "react";

const Saved = () =>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1>Saved</h1>
          </div>
          <div class="panel-body">

            <div class="panel panel-default" style={{marginBottom: '5px'}}>
              <div class="panel-body">
                
                <button class="btn btn-md btn-primary pull-right change-saved" data-id="">Remove</button>

                <h4>Article Title</h4>
                <p>Date Saved: 10/14/17</p>

                {/*<p>
                  <a href="#" target="_blank">Read More</a>
                </p>*/}

              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-body">

                <p>This article blew my mind!</p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>;

export default Saved;
