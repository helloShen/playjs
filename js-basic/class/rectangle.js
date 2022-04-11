export default (width, height) => {
  const proto = {
    width,
    height,
  };

  function area() {
    return width * height;
  }

  return {
    area,
  };
}