import { data } from './data/data';
import './style.css';
import { renderTable } from './components/table';
import { getCards } from './util/util';
import { elements } from './constants/elements';
import { state, calculateTotalPages } from './components/state';
import { prevPage, nextPage } from './components/pagination';

const cards = getCards(data.purchase_records);

//  рендер таблицы

const bindEvents = () => {
  elements.pageNumbers.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
      state.currentPage = Number(e.target.textContent);
      renderTable();
    }
  });
  elements.pageSelect.addEventListener('change', (e) => {
    state.pageSize = Number(e.target.value);
    state.currentPage = 1;
    renderTable();
  });
  elements.prevBtn.addEventListener('click', prevPage);
  elements.nextBtn.addEventListener('click', nextPage);
};

function initTablePagination(data) {
  state.data = data;
  calculateTotalPages();
  renderTable();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', () => {
  initTablePagination(cards);
});
