function isFish(pet) {
    return pet.swim != undefined;
}
var zoo = [{ swim: function () { return "chuchu"; } }, { fly: function () { return "swoop"; } }, { swim: function () { return "chewchew"; } }];
var fishes = zoo.filter(function (pet) { return isFish(pet); });
console.log(fishes);
