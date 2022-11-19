import React from "react";
import PropTypes from 'prop-types';
export default function NavLink({className, icon, ...props}) {
  return (
    <button className={className} type="button">
      {icon}
      <span style={{ display: "inline-block" }} className="ml-2">
        {props.children}
      </span>
    </button>
  );
}

NavLink.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.element,
};