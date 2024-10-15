import Post from "./Post";

const PostsList = () => {
    return (
        <ul>
            <Post author='Maxim' body='React is awesome!'/>
            <Post author='David' body='Check it, it is awesome!'/>
        </ul>
    )
}

export default PostsList;