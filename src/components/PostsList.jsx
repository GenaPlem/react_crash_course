import Post from "./Post";
import styles from './PostsList.module.css'

const PostsList = () => {
    return (
        <ul className={styles.posts}>
            <Post author='Maxim' body='React is awesome!'/>
            <Post author='David' body='Check it, it is awesome!'/>
        </ul>
    )
}

export default PostsList;