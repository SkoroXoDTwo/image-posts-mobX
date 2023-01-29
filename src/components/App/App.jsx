import { useEffect } from "react";
import { observer } from "mobx-react";
import "./App.scss";

import Header from "../Header/Header";
import Main from "../Main/Main"
import PostsList from "../PostsList/PostsList";
import PaginationPage from "../PaginationPage/PaginationPage";

const App = observer(() => {

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main>
          <PostsList />
          <PaginationPage />
        </Main>
      </div>
    </div>

  );
});

export default App;
