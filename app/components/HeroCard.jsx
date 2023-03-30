import React from "react";
import styles from "./HeroCard.module.css";

export default async function HeroCard(props) {
  return (
    <div className={styles.heroCard}>
      <img
        className={styles.heroImage}
        src={props?.user.avatar}
        alt={props?.user.first_name}
      />
      <h1>
        {props?.user.first_name} {props?.user.last_name}
      </h1>
    </div>
  );
}
