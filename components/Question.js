import styles from "./Question.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ModalAnswer from "./ModalAnswer";
import { useUser } from "@auth0/nextjs-auth0/client";
import Router from "next/router";

const formatDate = (date) => {
  let d = date.slice(0, 10);
  let day = d.slice(8, 10) + "/" + d.slice(5, 7) + "/" + d.slice(0, 4);

  let t = date.slice(11, 19);
  let time = (parseInt(t.slice(0, 2)) + 2).toString() + "h" + t.slice(3, 5);

  return day + " à " + time;
};

export default function Question(props) {
  const { user, isLoading } = useUser();

  const deleteData = async (e) => {
    try {
      const question = props.data;
      const body = { question };
      await fetch("/api/deleteQuestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/faq");
    } catch (error) {
      console.error(error);
    }
  };

  const like = async (e) => {
    try {
      const question = props.data;
      const body = { question, user };
      await fetch("/api/likeQuestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/faq");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.question_box}>
      <div className={styles.like_column}>
        {props.data.userLikes
          .map((userLike) => {
            if (
              userLike.questionId == props.data.id &&
              userLike.user.email == user.email
            ) {
              return true;
            } else {
              return false;
            }
          })
          .every((value) => value == false) ? (
          <button
            type="button"
            className={styles.like_button}
            onClick={() => like()}
          >
            <img src="/pouceBlanc.png" className={styles.pouce}></img>
          </button>
        ) : (
          <button
            type="button"
            className={styles.like_button}
            onClick={() => like()}
          >
            <img src="/pouceVert.png" className={styles.pouce}></img>
          </button>
        )}
        <div className={styles.like_number}>{props.data.userLikes.length}</div>
      </div>

      <div className={styles.question_content}>
        <div className={styles.question_header}>
          <div className={styles.question_author}>
            Question publiée par {props.data.author.name} le{" "}
            {formatDate(props.data.createdAt)}
          </div>
          <div className={styles.question_answer}>
            <ModalAnswer question={props.data}></ModalAnswer>
          </div>
        </div>

        <div className={styles.question_title}>{props.data.title}</div>
        <div className={styles.question_text}>{props.data.content}</div>
        <hr className={styles.bar_footer}></hr>
        <div className={styles.question_footer}>
          <div className={styles.question_nbAnswer}>
            <img src="/comment.png" className={styles.reponse_logo}></img>
            <div className={styles.reponse_text}>
              {props.data.answers.length} réponse(s)
            </div>
          </div>
          {user.email == props.data.author.email && (
            <div className={styles.question_delete}>
              <button
                type="button"
                className={styles.delete_button}
                onClick={() => deleteData()}
              >
                <img src="/poubelle.png" className={styles.delete_logo}></img>
                <div className={styles.delete_text}> Supprimer </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
