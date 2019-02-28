import React, { Component } from "react";

class Like extends Component {
  getHeartClass = () => {
    let heartClass = "fa fa-heart";
    return this.props.liked ? heartClass : heartClass + "-o";
  };

  render() {
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        className={this.getHeartClass()}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
