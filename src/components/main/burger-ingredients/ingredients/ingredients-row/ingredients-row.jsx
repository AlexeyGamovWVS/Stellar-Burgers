import rowStyles from "./ingredients-row.module.css";
import PropTypes from "prop-types";

export default function IngredientRow({ title, children, id, rowRef }) {
  return (
    <div ref={rowRef} className={`${rowStyles.row} row mt-10`} id={id}>
      <h3 className={`text text_type_main-medium`}>{title}</h3>
      <ul className={`${rowStyles.list} mt-6 pl-4 pr-4`}>{children}</ul>
    </div>
  );
}

IngredientRow.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  id: PropTypes.string.isRequired,
	rowRef: PropTypes.object.isRequired,
};
