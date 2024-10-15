import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const changeBodyHandler = (event) => {
    setText(event.target.value);
  };

  const changeAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
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
