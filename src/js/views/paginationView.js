import { View } from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', event => {
      const btn = event.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPage = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 and there are other pages
    if (currPage === 1 && numPage > 1)
      return this._generateMarkupButton('next');

    // Last Page
    if (currPage === numPage && numPage > 1)
      return this._generateMarkupButton('prev');

    // Other Page
    if (currPage < numPage)
      return (
        this._generateMarkupButton('prev') + this._generateMarkupButton('next')
      );

    // Page 1 and ther are no other page
    return '';
  }

  _generateMarkupButton(btn) {
    const currPage = this._data.page;
    if (btn === 'prev')
      return `
				<button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
					<svg class="search__icon">
						<use href="${icons}#icon-arrow-left"></use>
					</svg>
					<span>Page ${currPage - 1}</span>
				</button>
			`;
    if (btn === 'next')
      return `
				<button data-goto="${currPage + 1}"class="btn--inline pagination__btn--next">
					<span>Page ${currPage + 1}</span>
					<svg class="search__icon">
						<use href="${icons}#icon-arrow-right"></use>
					</svg>
				</button>
			`;
  }
}

export default new PaginationView();
