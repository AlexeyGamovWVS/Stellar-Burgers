import rowStyles from "./ingredients-row.module.css";
import PropTypes from "prop-types";

export default function IngredientRow({ title, children }) {
  return (
    <div className={`${rowStyles.row} row mt-10`}>
      <h3 className={`text text_type_main-medium`}>{title}</h3>
      <ul className={`${rowStyles.list} mt-6 pl-4 pr-4`}>{children}</ul>
    </div>
  );
}

IngredientRow.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
