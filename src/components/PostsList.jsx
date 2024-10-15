import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import styles from './PostsList.module.css'

const PostsList = () => {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const changeBodyHandler = (event) => {
        setText(event.target.value);
    }
    
    const changeAuthorHandler = (e) => {
        setAuthor(e.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
            <ul className={styles.posts}>
                <Post author={author} body={text}/>
                <Post author='David' body={'Check it, it is awesome!'}/>
            </ul>
        </>
    )
}

export default PostsList;