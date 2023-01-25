import { useEffect } from "react";
import { observer } from "mobx-react";
import "./App.scss";
import { storePosts } from "../../store/storePosts";
import { toJS } from "mobx";

import Header from "../Header/Header";

const App = observer(() => {
  const { loadPosts } = storePosts;
  const posts = toJS(storePosts.posts.list);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div onClick={() => console.log(toJS(storePosts.posts))}>
          Hello
        </div>

        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>

  );
});

export default App;
