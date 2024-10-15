import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const changeBodyHandler = (event) => {
    setText(event.target.value);
  };

  const changeAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={author} body={text} />
        <Post author="David" body={"Check it, it is awesome!"} />
      </ul>
    </>
  );
};

export default PostsList;
