import React from "react";

export default class NavLink extends React.Component {
  render() {
    return (
			<button className={this.props.className} type="button">
          {this.props.children}
      </button>
    );
  }
}
