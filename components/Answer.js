import styles from "./Answer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "react-bootstrap";
import Router from "next/router";

const formatDate = (date) => {
  let d = date.slice(0, 10);
  let day = d.slice(8, 10) + "/" + d.slice(5, 7) + "/" + d.slice(0, 4);

  let t = date.slice(11, 19);
  let time = (parseInt(t.slice(0, 2)) + 2).toString() + "h" + t.slice(3, 5);

  return day + " à " + time;
};

export default function Answer(props) {
  const { user, isLoading } = useUser();

  const deleteData = async (e) => {
    try {
      let answer = props.data;
      const body = { answer };
      await fetch("/api/deleteAnswer", {
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
    <div className={styles.answer_content}>
      <div className={styles.answer_header}>
        <div className={styles.answer_author}>
          {props.data.author.name} • le {formatDate(props.data.createdAt)}
        </div>
      </div>

      <div className={styles.answer_title}>{props.data.title}</div>
      <div className={styles.answer_textzone}>
        <div className={styles.answer_text}>{props.data.content}</div>
      </div>

      {user.email == props.data.author.email && (
        <>
          <hr className={styles.bar_footer}></hr>
          <div className={styles.answer_footer}>
            <div className={styles.answer_delete}>
              <button
                type="button"
                className={styles.delete_button}
                onClick={() => deleteData()}
              >
                <img src="/poubelle.png" className={styles.delete_logo}></img>
                <div className={styles.delete_text}> Supprimer </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
