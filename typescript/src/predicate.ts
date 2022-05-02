interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim != undefined;
}

const zoo: (Fish | Bird)[] = [{swim: () => "chuchu"}, {fly: () => "swoop"}, {swim: () => "chewchew"}];

const fishes: Fish[] = zoo.filter((pet): pet is Fish => isFish(pet));

console.log(fishes);
