import { state } from './state.js';
import { calculateTotalPages } from './state.js';
import { createPaginationButtons } from './pagination.js';
import { elements } from '../constants/elements';
import { updateNavigationButtons } from './pagination.js';

export const renderTable = () => {
  const startIndex = (state.currentPage - 1) * state.pageSize;
  const endIndex = Math.min(startIndex + state.pageSize, state.data.length);
  const pageData = state.data.slice(startIndex, endIndex);
  elements.tableBody.innerHTML = '';
  pageData.forEach((item) => {
    const card = document
      .getElementById('temlate-card')
      .content.cloneNode(true);
    card.querySelector('[data-name="data"]').textContent = item.date;
    card.querySelector('[data-name="customer"]').textContent = item.customer;
    card.querySelector('[data-name="seller"]').textContent = item.seller;
    card.querySelector('[data-name="total"]').textContent = item.total;
    elements.tableBody.append(card);
  });
  calculateTotalPages();
  createPaginationButtons();
  updateNavigationButtons();
};
