import PropTypes from "prop-types";
import linkStyles from "./nav-link.module.css";
export default function NavLink({ icon, color, children }) {
  return (
    <div
      className={`${linkStyles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default ${color}`}
    >
      {icon}
      <span className={`ml-2 ${linkStyles.linkText}`}>{children}</span>
    </div>
  );
}

NavLink.propTypes = {
  icon: PropTypes.element,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};
