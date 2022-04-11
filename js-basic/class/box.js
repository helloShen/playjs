import Rectangle from './rectangle.js';

export default (width, height, zIndex) => {
  const proto = {
    base: Rectangle(width, height),
    height: zIndex,
  }

  function volumn() {
    return proto.base.area() * proto.height;
  }

  return {
    volumn,
  };
};
