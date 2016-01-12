// |||||||||||||||||||||||||||
// |||||| MORE EXAMPLES ||||||
// |||||||||||||||||||||||||||

// |||||||||||||||||||||||
// |||||||| SCOPE ||||||||
// |||||||||||||||||||||||

var tiredSoul = "Adam Ewing";
var futureSelf = "Zachry";

(function(){
  var tiredSoul = "Luisa Rey";
  var sensedConnection = "Robert Frobisher";

  console.log(tiredSoul,sensedConnection,futureSelf);
})();









// |||||||||||||||||||||||
// ||||||| CONTEXT |||||||
// |||||||||||||||||||||||

// |||||||||||||||||||
// this Wandering Soul
// |||||||||||||||||||


var frobisher = {
  birthmark: "comet",
  checkBirthmark: function() {
    return this.birthmark;
  }
}

console.log(frobisher.checkBirthmark())


var frobisher = {
  birthmark: "comet"
}

function checkBmark() {
  return this.birthmark;
}

frobisher.dermCheck = checkBmark;

console.log(frobisher.dermCheck());
console.log(checkBmark());

// ||||||||||||||||||||||||||||
// Binding Context Functionally
// ||||||||||||||||||||||||||||
