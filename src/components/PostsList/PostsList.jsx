import "./PostsList.scss"
import Post from "../Post/Post";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { storePosts } from "../../store/storePosts";
import { storePage } from "../../store/storePage";
import { toJS } from "mobx";

const PostsList = observer(() => {
  const { loadPosts } = storePosts;
  const posts = toJS(storePosts.posts.list);
  const page = toJS(storePage.page);

  useEffect(() => {
    loadPosts(page);
  }, [page]);

  return (
    <ul className="posts-list">
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} description={post.body}/>
      ))}

    </ul>
  )
});

export default PostsList;
