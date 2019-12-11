import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Default extends Component {
  render() {
    return (
      <main>
        <h1>Error 404: Not found</h1>
        <button
          onClick={this.props.history.goBack}
          style={{
            backgroundColor: "green",
            color: "white",
            fontSize: "26px",
            cursor: "pointer",
            padding: "10px",
            width: "200px",
            border: "none",
            margin: "10px"
          }}
        >
          Zpět?
        </button>
      </main>
    );
  }
}
export default withRouter(Default);
