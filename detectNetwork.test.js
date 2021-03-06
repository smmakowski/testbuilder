/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
//var FILL_ME_IN = 'Fill this value in';
/*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });
  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901232').should.equal('Diner\'s Club');
  });
});


describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });
  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var should = chai.should();

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });
  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });
  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901237').should.equal('MasterCard');
  });
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011090989890982').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011928290938209888').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511090989890982').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511928290938209888').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix){
    it(`has a prefix of ${prefix} and a length of 16`, function(){
      detectNetwork(prefix + '1234567890123').should.equal('Discover');
    });
    it(`has prefix of ${prefix} and a length of 19`, function(){
      detectNetwork(prefix + '1234567890123456').should.equal('Discover')
    });
    })(prefix)
  }
});

describe('Maestro', function() {
  var should = chai.should();

  for (var len = 12; len <= 19; len++) {
    var otherNums = '';
    var i = 1;
    while (i <= len - 4){
      otherNums += '1';
      i++;
    }

    (function(len, otherNums){
    it(`has a prefix of 5018 and a length of ${len}`, function() {
      detectNetwork('5018' + otherNums).should.equal('Maestro');
    });
  })(len, otherNums)
  }

  for (var len = 12; len <= 19; len++) {
    var otherNums = '';
    var i = 1;
    while (i <= len - 4){
      otherNums += '1';
      i++;
    }

    (function(len, otherNums){
    it(`has a prefix of 5020 and a length of ${len}`, function() {
      detectNetwork('5020' + otherNums).should.equal('Maestro');
    });
  })(len, otherNums)
  }

  for (var len = 12; len <= 19; len++) {
    var otherNums = '';
    var i = 1;
    while (i <= len - 4){
      otherNums += '1';
      i++;
    }

    (function(len, otherNums){
    it(`has a prefix of 5038 and a length of ${len}`, function() {
      detectNetwork('5038' + otherNums).should.equal('Maestro');
    });
  })(len, otherNums)
  }

  for (var len = 12; len <= 19; len++) {
    var otherNums = '';
    var i = 1;
    while (i <= len - 4){
      otherNums += '1'; 
      i++;
    }

    (function(len, otherNums){
    it(`has a prefix of 6304 and a length of ${len}`, function() {
      detectNetwork('6304' + otherNums).should.equal('Maestro');
    });
  })(len, otherNums)
  }
});

describe('China UnionPay', function() {
  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix + '7879899872673').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork(prefix + '78792899872673').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork(prefix + '787928998726732').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix + '7879289987267322').should.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix + '787989872673').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork(prefix + '7879289972673').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork(prefix + '78792898726732').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix + '787928987267322').should.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix + '7879898726').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork(prefix + '78792899726').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork(prefix + '787928987267').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix + '7879289872673').should.equal('China UnionPay');
      });
    })(prefix)
  }
});

describe('Switch', function(){
    var should = chai.should();

    it(`has a prefix of 4903 and a length of 16`, function(){
      detectNetwork('4903123456789022').should.equal('Switch');
    });
    it(`has prefix of 4903 and a length of 18`, function(){
      detectNetwork('490312345678902224').should.equal('Switch');
    });
    it(`has prefix of 4903 and a length of 19`, function(){
      detectNetwork('4903123456789012222').should.equal('Switch');
    });
    it(`has a prefix of 4905 and a length of 16`, function(){
      detectNetwork('4905123456789022').should.equal('Switch');
    });
    it(`has prefix of 4905 and a length of 18`, function(){
      detectNetwork('490512345678902224').should.equal('Switch');
    });
    it(`has prefix of 4905 and a length of 19`, function(){
      detectNetwork('4905123456789012222').should.equal('Switch');
    });
    it(`has a prefix of 4911 and a length of 16`, function(){
      detectNetwork('4911123456789022').should.equal('Switch');
    });
    it(`has prefix of 4911 and a length of 18`, function(){
      detectNetwork('491112345678902224').should.equal('Switch');
    });
    it(`has prefix of 4911 and a length of 19`, function(){
      detectNetwork('4911123456789012222').should.equal('Switch');
    });
    it(`has a prefix of 4936 and a length of 16`, function(){
      detectNetwork('4936123456789022').should.equal('Switch');
    });
    it(`has prefix of 4911 and a length of 18`, function(){
      detectNetwork('493612345678902242').should.equal('Switch');
    });
    it(`has prefix of 4936 and a length of 19`, function(){
      detectNetwork('4936123456789012222').should.equal('Switch');
    });
    it(`has a prefix of 564182 and a length of 16`, function(){
      detectNetwork('5641823456789022').should.equal('Switch');
    });
    it(`has prefix of 564182 and a length of 18`, function(){
      detectNetwork('564182345678902229').should.equal('Switch');
    });
    it(`has prefix of 564182 and a length of 19`, function(){
      detectNetwork('5641823456789012222').should.equal('Switch');
    });
    it(`has a prefix of 633110 and a length of 16`, function(){
      detectNetwork('6331103456789022').should.equal('Switch');
    });
    it(`has prefix of 633110 and a length of 18`, function(){
      detectNetwork('633110345678902232').should.equal('Switch');
    });
    it(`has prefix of 633110 and a length of 19`, function(){
      detectNetwork('6331103456789012222').should.equal('Switch');
    });
    it(`has a prefix of 6333 and a length of 16`, function(){
      detectNetwork('6333123456789022').should.equal('Switch');
    });
    it(`has prefix of 6333 and a length of 18`, function(){
      detectNetwork('633312345678902223').should.equal('Switch');
    });
    it(`has prefix of 6333 and a length of 19`, function(){
      detectNetwork('6333123456789012222').should.equal('Switch');
    });
    it(`has a prefix of 6759 and a length of 16`, function(){
      detectNetwork('6759123456789022').should.equal('Switch');
    });
    it(`has prefix of 6759 and a length of 18`, function(){
      detectNetwork('675912345678902223').should.equal('Switch');
    });
    it(`has prefix of 6759 and a length of 19`, function(){
      detectNetwork('6759123456789012222').should.equal('Switch');
    });
});
