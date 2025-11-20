

export let state = {
  data: [],
  currentPage: 1,
  pageSize: 5,
  totalPages: 1,
};

export const calculateTotalPages = () => {
  state.totalPages = Math.ceil(state.data.length / state.pageSize);
};

export const updateState = (newState) => {
  state = { ...state, ...newState };
};
