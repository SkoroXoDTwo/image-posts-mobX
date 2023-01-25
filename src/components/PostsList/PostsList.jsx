import "./PostsList.scss"
import Post from "../Post/Post";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { storePosts } from "../../store/storePosts";
import { toJS } from "mobx";

const PostsList = observer(() => {
  const { loadPosts } = storePosts;
  const posts = toJS(storePosts.posts.list);
  console.log(posts);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <ul className="posts-list">
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} description={post.body}/>
      ))}

    </ul>
  )
});

export default PostsList;
