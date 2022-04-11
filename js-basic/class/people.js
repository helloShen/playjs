export default (name, age, gender) => {
  const proto = {
    name,
    age,
    gender,
  };

  function hello() {
    console.log(`Hello, ${introduceName()} ${introduceAge()}`);
  }

  function introduceName() {
    return `My name is ${proto.name}.`;
  }

  function introduceAge() {
    return `I'm ${proto.age} years old now.`;
  }

  return {
    hello,
  };
}


