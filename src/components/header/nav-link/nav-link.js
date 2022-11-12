import React from "react";

export default class NavLink extends React.Component {
  render() {
    return (
			<button className={this.props.className} type="button">
					{this.props.icon}
					<span style={{ display: 'inline-block' }} className="ml-2">{this.props.children}</span>
      </button>
    );
  }
}
