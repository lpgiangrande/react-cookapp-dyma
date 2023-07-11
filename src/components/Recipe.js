import { useState } from "react";
import styles from "./Recipe.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Recipe({ title, image }) {

  const [liked, setLiked] = useState(false);
  
  function handleLike(){
    setLiked(!liked);
  }

  return (
    <div onClick={ handleLike } className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{ title }</h3>
        <FontAwesomeIcon icon="fa-solid fa-heart" className={`${liked ? "text-primary" : ""}`}/>
      </div>
    </div>
  );
}

export default Recipe;