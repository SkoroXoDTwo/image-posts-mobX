import { useEffect } from "react";
import { observer } from "mobx-react";
import "./App.scss";
import { storePosts } from "../../store/storePosts";
import { toJS } from "mobx";

const App = observer(() => {
  const { loadPosts } = storePosts;
  const posts = toJS(storePosts.posts);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <div className="page" onClick={() => console.log(posts)}>
        Hello
      </div>

      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
});

export default App;
