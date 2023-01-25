import { useEffect } from "react";
import { observer } from "mobx-react";
import "./App.scss";
import { storePosts } from "../../store/storePosts";
import { toJS } from "mobx";

import Header from "../Header/Header";
import Main from "../Main/Main"
import PostsList from "../PostsList/PostsList";

const App = observer(() => {
  const { loadPosts } = storePosts;
  const posts = toJS(storePosts.posts.list);



  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main>
          <PostsList />
        </Main>
      </div>
    </div>

  );
});

export default App;
