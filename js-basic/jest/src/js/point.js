export default (x, y) => {
  const point = {
    x,
    y,
  };

  function axiX() {
    return point.x;
  }

  function axiY() {
    return point.y;
  }

  return {
    axiX,
    axiY,
  };
};
