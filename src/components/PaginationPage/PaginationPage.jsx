import "./PaginationPage.scss"
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { storePage } from "../../store/storePage";

const PaginationPage = observer(() => {
  const { nextPage, backPage } = storePage;
  const page = toJS(storePage.page);

  return (
    <section className="pagination-page">
      <div className="pagination-page__container">
        <button
          className="pagination-page__btn"
          onClick={() => {
            backPage();
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}
        />
        <p className="pagination-page__number">{page}</p>
        <button
          className="pagination-page__btn pagination-page__btn_right"
          onClick={() => {
            nextPage();
            window.scrollTo(0, 0);
          }}
          disabled={page === 10}
        />
      </div>
    </section>
  )
});

export default PaginationPage;
