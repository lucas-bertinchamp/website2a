import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Router from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ModalAnswer(props) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTextChange = (e) => setText(e.target.value);

  const { user, isLoading } = useUser();

  const submitData = async (e) => {
    try {
      const question = props.question;
      const body = { text, user, question };
      await fetch("/api/postAnswer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/faq");
      setContent("");
      setTitle("");
    } catch (error) {
      console.error(error);
    }
    setText("");
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Répondre
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Répondre à {props.question.author.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTextArea">
              <Form.Control
                as="textarea"
                rows={3}
                value={text}
                onChange={handleTextChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={submitData}>
            Envoyer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
