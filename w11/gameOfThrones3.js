/*****************************************
 * CHAPTER 5: Winter is Coming           *
 *****************************************/
// console.log("\n---- Chapter 5 ----\n");
var lordEddardsChildrenAndWards = [
  {name: "Robb",   house: "Stark",   sex: "M", direWolf: "Grey Wind"},
  {name: "Theon",  house: "Greyjoy", sex: "M"},
  {name: "Sansa",  house: "Stark",   sex: "F", direWolf: "Lady"},
  {name: "Jeyne",  house: "Poole",   sex: "F"},
  {name: "Arya",   house: "Stark",   sex: "F", direWolf: "Nymeria"},
  {name: "Bran",   house: "Stark",   sex: "M", direWolf: "Summer"},
  {name: "Rickon", house: "Stark",   sex: "M", direWolf: "Shaggydog"},
  {
    name:     "Jon",
    house:    "Stark",
    sex:      "M",
    direWolf: "Ghost",
    trueBorn: false
  }
];

var children = lordEddardsChildrenAndWards;

// 1.  Write a function named `isStark` that takes a single argument `child`,
//     and returns a boolean (true or false) depending on if that child object
//     has a property `house` that is equal to "Stark".
console.log("Number 1:");

function isStark(child)
{
  return child.house === "Stark";
}

 console.log(isStark(children[0]));
 console.log(isStark(children[1]));

// 2.  Write a function named `isTrueborn` that takes a single argument `child`,
//     and returns a boolean (true or false) depending on if that child object
//     has a property `trueBorn` that is equal to false.
console.log("Number 2:");

function isTrueborn(child)
{
  return child.trueBorn !== false;
}
 console.log(isTrueborn(children[7])); // false
 console.log(isTrueborn(children[5]));
 console.log(isTrueborn(children[3]));
 console.log(isTrueborn(children[1])); // true

// 3.  Write a function named `trueName` that takes a single argument `child`,
//     and returns a string that is their 'true name.' A true name is a child's
//     house, if they are trueborn. Otherwise their 'true name' is "Snow".
console.log("Number 3:");
function trueName(child)
{
  return (isTrueborn(child)) ? child.house : "Snow";
}

 console.log(trueName(children[7])); // "Snow"
 console.log(trueName(children[6]));
 console.log(trueName(children[3]));
 console.log(trueName(children[2]));
 console.log(trueName(children[1])); // "Greyjoy"

// 4.  Write a function named `isTrueStark` that takes a single argument
//     `child`, and returns a boolean (true or false) depending on if that
//     child object has a **true name** that is equal to "Stark".
console.log("Number 4:");
function isTrueStark(child)
{
  return trueName(child) === "Stark";
}

 console.log(isTrueStark(children[7])); // false
 console.log(isTrueStark(children[1])); // false
 console.log(isTrueStark(children[0])); // true

// 5.  Write a function named `isFemale` that takes a single argument `child`,
//     and returns a boolean (true or false) depending on if that child object
//     is female (true) or male (false).
console.log("Number 5:");
function isFemale(child)
{
  return child.sex === "F";
}

 console.log(isFemale(children[1])); // false
 console.log(isFemale(children[2])); // true
 console.log(isFemale(children[3]));
 console.log(isFemale(children[4]));
 console.log(isFemale(children[5]));

/************************************************************************
 * CHAPTER 6: "The man who passes the sentence should swing the sword." *
 ************************************************************************/
console.log("\n---- Chapter 6 ----");

// 1.  Create a new list of children called `starksBoys`; use the `forEach`
//     enumeration method to add only the male children to the new list.
console.log("\n", "Number 1:");
var starksBoys = [];
lordEddardsChildrenAndWards.forEach(function(child){
  if (!isFemale(child))
  {
    starksBoys.push(child);
  }
})

 console.log(starksBoys);

// 2.  Use the `filter` enumeration method to create a new list of children
//     called `starksBoys` that includes only the male children (same as above).
console.log("\n", "Number 2:");
starksBoys = [];
starksBoys = children.filter(function(child){
  return !isFemale(child);
})

 console.log(starksBoys);

// 3.  Use the `filter` enumeration method to create a new list of children
//     called `starksGirls` that includes only the female children.
console.log("\n", "Number 3:");
var starksGirls = [];
starksGirls = children.filter(function(child){
  return isFemale(child);
})

 console.log(starksGirls);

// 4.  Use the `filter` enumeration on the `starksBoys` list to update that list
//     to only include those children whose house is "Stark".
console.log("\n", "Number 4:");
starksBoys = starksBoys.filter(function(child){
  return isStark(child);
})

 console.log(starksBoys);

// 5.  Use the `filter` enumeration on the `starksBoys` list to update that list
//     to only include those children whose 'true name' is "Stark"
//     (`isTrueStark`).
console.log("\n", "Number 5:");
starksBoys = starksBoys.filter(function(child){
  return isTrueStark(child);
})

 console.log(starksBoys);

// 6.  Use the `filter` enumeration method to create a new list of children
//     called `luckyKids` that only include those children who have
//     'direwolves'.
console.log("\n", "Number 6:");
var luckyKids = [];
luckyKids = children.filter(function(child){
  return child.direWolf != undefined;
})

 console.log(luckyKids);

// 7.  Use the `filter` enumeration method to create a new list of children
//     called `gDogs` that only includes those children who have direwolves
//     with names that have a "g" in them. (You may use regexes!)
console.log("\n", "Number 7:");
var gDogs = [];
gDogs = children.filter(function(child){
    var re = /(.?)g(.?)/i
    return re.exec(child.direWolf) !== null;
})

 console.log(gDogs);

// 8.  Use the `filter` enumeration method to create a new list of children
//     called `notTrueStarkBoys` that only includes those children who are not
//     *boys with the 'true name' of Stark*.
console.log("\n", "Number 8:");
var notTrueStarkBoys = [];
notTrueStarkBoys = children.filter(function(child){
  return (isFemale(child) || !isTrueStark(child));
})

 console.log(notTrueStarkBoys);

// 9.  Use the `filter` enumeration method to create a new list of children
//     called `anOn` that only includes those children whose names have either
//     'an' or 'on' in them. (You may use regexes!)
console.log("\n", "Number 9:");
var anOn = [];
anOn = children.filter(function(child){
    var re = /(.?)(an|on)(.?)/i;
    return re.exec(child.name) !== null;
})

 console.log(anOn);

// 10. Use the `filter` enumeration method to create a new list of children
//     called `notStarks` that only includes those children whose house is not
//     "Stark". (You may use regexes!)
console.log("\n", "Number 10:");
var notStarks = [];
notStarks = children.filter(function(child){
  return child.house !== "Stark";
})

 console.log(notStarks);

// 11. Use the `filter` enumeration method to create a new list of children
//     called `dontFitIn` that only includes those children whose 'true name' is
//     not "Stark", as well as Arya.
console.log("\n", "Number 11:");
var dontFitIn = [];
dontFitIn = children.filter(function(child){
  return !isTrueStark(child) || child.name === "Arya";
})

 console.log(dontFitIn);

// 12. Use any means you can to take the list of children, and create a new
//     list that only includes direwolf names.
console.log("\n", "Number 12:");
var direWolves = [];
children.forEach(function(child){
  (child.direWolf) ? direWolves.push(child.direWolf) : "";
})

console.log(direWolves);
