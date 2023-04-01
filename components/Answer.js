import styles from "./Answer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export default function Answer(props) {
  return (
    <div className={styles.answer_box}>
      <div className={styles.answer_header}>
        <h3 className={styles.answer_title}>{props.data.title}</h3>
        <div className={styles.answer_author}>
          <div className={styles.answer_author_name}>
            Rédigée par {props.data.author.name} le
          </div>
        </div>
      </div>

      <hr></hr>

      <div className={styles.answer_content}></div>
      <div>{props.data.content}</div>
    </div>
  );
}
