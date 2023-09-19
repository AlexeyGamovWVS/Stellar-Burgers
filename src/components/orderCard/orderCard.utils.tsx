import styles from "./orderCard.module.css";
import { GET_RANDOM } from "../burger-constructor/burger-components/burger-components.utils";

export default function ingredientsImagesMap(ingredientsPictures: string[]) {
  let imagesMap = [];
  if (ingredientsPictures.length < 6) {
    imagesMap = ingredientsPictures.map((image, index) => {
      return (
        <li key={GET_RANDOM()} className={styles.card__iconbox} style={{ zIndex: 6 - index }}>
          <img className={styles.card__icon} src={image} alt={""} />
        </li>
      );
    });
  } else {
    imagesMap = ingredientsPictures.slice(0, 5).map((image, index) => {
      return (
        <li key={GET_RANDOM()} className={styles.card__iconbox} style={{ zIndex: 6 - index }}>
          <img className={styles.card__icon} src={image} alt={""} />
        </li>
      );
    });
    imagesMap.push(
      <li
        key={GET_RANDOM()}
        className={styles.card__iconbox}
        style={{ zIndex: 0, position: "relative" }}
      >
        <img className={styles.card__icon} src={ingredientsPictures[5]} alt="" />
        <div
          className={`${styles.card__icon_over} text text_type_digits-default`}
          style={{ zIndex: 1 }}
        >
          {`+${ingredientsPictures.length - 5}`}
        </div>
      </li>
    );
  }
  return imagesMap;
}
