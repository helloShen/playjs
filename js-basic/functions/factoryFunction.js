let People = function(name) {
  const _name = name;

  function hello() {
    return `Hello, I'm ${_name}`;
  }

  return {
    hello,
  };
}

const me = People('Jay');
console.dir(me);