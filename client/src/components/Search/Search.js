import React from "react";

const Search = () =>
<div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">
            <h1>Search</h1>
            <form>
              <div class="form-group">
                <label for="email">Topic:</label><br/>
                <input type="email" class="form-control" id="email"/>
              </div>
              <div class="form-group">
                <label for="email">Start Year:</label><br/>
                <input type="email" class="form-control" id="email"/>
              </div>
              <div class="form-group">
                <label for="email">End Year:</label><br/>
                <input type="email" class="form-control" id="email"/>
              </div>
              <button type="submit" class="btn btn-default btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default Search;
