import styles from "./Question.module.css";

export default function Question(props) {
  return (
    <div className={styles.question_box}>
      <div className={styles.question_header}>
        <h3 className={styles.question_title}>{props.data.title}</h3>
        <div className={styles.question_author}>
          <div className={styles.question_author_name}>
            Rédigée par {props.data.author.name} le {props.data.date}
          </div>
        </div>
      </div>

      <hr></hr>

      <div className={styles.question_content}></div>
      <div>{props.data.content}</div>

      <hr></hr>

      <div className={styles.upvotes}>
        <button type="button" className="btn btn-primary">
          Upvote
        </button>

        <button type="button" className="btn btn-primary">
          Downvote
        </button>
        <div className={styles.upvotes_number}>0</div>
      </div>
    </div>
  );
}
