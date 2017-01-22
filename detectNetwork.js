// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// HELPER FUNCTIONS
function checkPrefix(prefixes, cardNumber) {
  for (var i = 0; i < prefixes.length; i++) {
    if (cardNumber.indexOf(prefixes[i]) === 0) {
      return true;
    }
  }
  return false;
}

function checkLength(lengths, cardNumber){
  for (var i = 0; i < lengths.length; i++){
    if (lengths[i] === cardNumber.length){
      return true;
    }
  }
  return false;
}

// MAIN FUNCTION
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var prefix = cardNumber.slice(0, 2);

  var network = [
    {name: 'Diner\'s Club', prefixes: ['38', '39'],lengths: [14]},
    {name: 'American Express', prefixes: ['34', '37'],lengths: [15]},
    {name: 'MasterCard', prefixes: ['51', '52', '53', '54', '55'],lengths: [16]},
    {name: 'Discover', prefixes: ['6011', '644', '645', '646', '647', '648', '649','65'],lengths: [16, 19]},
    {name: 'Maestro', prefixes: ['5018', '5020', '5038', '6304'],lengths: [12, 13, 14, 15, 16, 17, 18, 19]},
    {name: 'China UnionPay', prefixes: ['624', '625', '626'], lengths: [16, 17, 18, 19]},
    {name: 'Switch', prefixes: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'], lengths: [16, 18, 19]},
    {name: 'Visa', prefixes: ['4'],lengths: [13, 16, 19]}
  ];

  for (var i = 622126; i <= 622925; i++){
    network[5].prefixes.push(String(i));
  }
  for (var i = 6282; i <= 6288; i++){
    network[5].prefixes.push(String(i));
  }

  for (var i = 0; i < network.length; i++) {
    var card = network[i]['name'];
    var prefixes = network[i]['prefixes'];
    var lengths = network[i]['lengths'];
    var okLength = checkLength(lengths, cardNumber);
    var okPrefix = checkPrefix(prefixes, cardNumber);

    if (okLength && okPrefix) {
      return card;
    }
  }

  return 'Number not in valid Network'
};
