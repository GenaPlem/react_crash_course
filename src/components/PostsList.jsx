import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author="Maxim" body="React is awesome" />
        <Post author="David" body="Check it, it is awesome!" />
      </ul>
    </>
  );
};

export default PostsList;
