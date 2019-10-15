import React, { Component } from "react";
import Comments from "./Comments";
import Video from "./Video";
import Menu from "./Menu";

export default class TestApp extends React.Component {
  render() {
    return (
      <div className="container is-fluid" style={{ marginTop: "2%" }}>
        <h1 className="title" style={{ color: "white" }}>
          {" "}
          Indian Travel Experience
        </h1>
        <div className="columns ">
          <div className="column is-one-quarter">
            <Menu />
          </div>
          <div className="column">
            <Video />
            <Comments />
          </div>
        </div>
      </div>
    );
  }
}
