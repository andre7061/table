import { elements } from '../constants/elements';
import { state } from './state';
import { renderTable } from './table';

export const createPaginationButtons = () => {
  elements.pageNumbers.innerHTML = '';
  const maxVisiblePages = 5;

  let startPage = Math.max(1, state.currentPage - 2);
  let endPage = Math.min(state.totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList.add('btn');
    if (i === state.currentPage) {
      btn.classList.add('active');
    }
    elements.pageNumbers.append(btn);
  }
};
export const updateNavigationButtons = () => {
  elements.prevBtn.disabled = state.currentPage === 1;
  elements.nextBtn.disabled = state.currentPage === state.totalPages;
};

export const prevPage = () => {
  if (state.currentPage > 1) {
    state.currentPage--;
    renderTable();
  }
};

export const nextPage = () => {
  if (state.currentPage < state.totalPages) {
    state.currentPage++;
    renderTable();
  }
};
