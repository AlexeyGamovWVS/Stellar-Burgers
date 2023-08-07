// import { useParams } from "react-router-dom";
import styles from "./feedOrderDetails.module.css";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";

export default function FeedOrderDetails() {
  // const { id } = useParams();
  const status = "done";

  return (
    <div className={styles.container}>
      <p className={`${styles.ordernum} text text_type_digits-default mb-10`}>555</p>
      <h1 className={`${styles.name} text text_type_main-medium mb-3`}>
        Black Hole Singularity острый бургер
      </h1>
      <p
        className={
          status === "done"
            ? `${styles.status} ${styles.status_done} text text_type_main-small mb-15`
            : `${styles.status} text text_type_main-small mb-15`
        }
      >
        Выполнен
      </p>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Состав:</h2>
      <ul className={`${styles.ingredients} mb-10`}>
        <li key={5555} className={styles.item}>
          <div className={styles.iconbox}></div>
          <p className={`${styles.ingrname} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.pricebox}>
            <p className={`${styles.price} text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon />
          </div>
        </li>

        <li key={5555} className={styles.item}>
          <div className={styles.iconbox}></div>
          <p className={`${styles.ingrname} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.pricebox}>
            <p className={`${styles.price} text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon />
          </div>
        </li>
        <li key={5555} className={styles.item}>
          <div className={styles.iconbox}></div>
          <p className={`${styles.ingrname} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.pricebox}>
            <p className={`${styles.price} text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon />
          </div>
        </li>
        <li key={5555} className={styles.item}>
          <div className={styles.iconbox}></div>
          <p className={`${styles.ingrname} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.pricebox}>
            <p className={`${styles.price} text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon />
          </div>
        </li>
        <li key={5555} className={styles.item}>
          <div className={styles.iconbox}></div>
          <p className={`${styles.ingrname} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.pricebox}>
            <p className={`${styles.price} text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon />
          </div>
        </li>
        <li key={5555} className={styles.item}>
          <div className={styles.iconbox}></div>
          <p className={`${styles.ingrname} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.pricebox}>
            <p className={`${styles.price} text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon />
          </div>
        </li>
      </ul>
      {/* <div className={styles.ingredients}>
        <ul className={styles.ingredientsInfo}>
          {uniqueIngredients?.map((ingredient) => {
            return (
              <li key={ingredient} className={styles.list}>
                <div className={styles.listGroup}>
                  <div className={styles.iconItem}>
                    <img
                      className={styles.icon}
                      src={
                        ingredientsData.filter(
                          (storeIngredient) => storeIngredient._id === ingredient
                        )[0].image
                      }
                    />
                  </div>
                  <p className={`${styles.textBlock} text text_type_main-default`}>
                    {
                      ingredientsData.filter(
                        (storeIngredient) => storeIngredient._id === ingredient
                      )[0].name
                    }
                  </p>
                </div>
                <div className={styles.listGroup}>
                  <p className={`${styles.textBlock} text text_type_digits-default`}>
                    {count(ingredient)} x{" "}
                    {
                      ingredientsData.filter(
                        (storeIngredient) => storeIngredient._id === ingredient
                      )[0].price
                    }
                  </p>
                  <CurrencyIcon />
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className={styles.orderfooter}>
        <FormattedDate
          className={`${styles.datetext} text text_type_main-default text_color_inactive`}
          date={new Date()}
        />
        <div className={styles.pricebox}>
          <p className={`${styles.price} text text_type_digits-default`}>5456</p>
          <CurrencyIcon />
        </div>
      </div>
    </div>
  );
}
