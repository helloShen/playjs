export default (inRow, inColumn) => {
  function row() {
    return inRow;
  }

  function column() {
    return inColumn;
  }

  return {
    row,
    column,
  };
};
