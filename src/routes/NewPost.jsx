import { useState } from "react";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";

const NewPost = ({ onCancel, onAddPost }) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const changeBodyHandler = (event) => {
    setText(event.target.value);
  };

  const changeAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      body: text,
      author,
    };
    onAddPost(postData);
    onCancel();
  };

  return (
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={styles.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
