import PropTypes from "prop-types";
import linkStyles from "./nav-link.module.css";
export default function NavLink({ icon, ...props }) {
  return (
    <button
      className={`${linkStyles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default text_color_inactive`}
      type="button"
    >
      {icon}
      <span style={{ display: "inline-block" }} className="ml-2">
        {props.children}
      </span>
    </button>
  );
}

NavLink.propTypes = {
  icon: PropTypes.element,
};
