/**
 * Facade -- Mortgage
 * - knows which subsystems are responsible for a request
 * - delegates client requests to appropriate subsystem objects
 *
 * Sub systems -- Bank, Credit, Background
 * - implements and performs specialized subsystem functionality
 * - have no knowledge of reference to the facade
 */

const Mortgage = function (name) {
  this.name = name;
};

Mortgage.prototype = {
  applyFor: function (amount) {
    let result = 'approved';
    if (!new Bank().verify(this.name, amount)) {
      result = 'denied';
    } else if (!new Credit().get(this.name)) {
      result = 'denied';
    } else if (!new Background().check(this.name)) {
      result = 'denied';
    }
    return `${this.name} has been ${result} for a ${amount} mortgage`;
  },
};

const Bank = function () {
  this.verify = function (name, amount) {
    // complex logic ...
    return true;
  };
};

const Credit = function () {
  this.get = function (name) {
    // complex logic ...
    return true;
  };
};

const Background = function () {
  this.check = function (name) {
    // complex logic ...
    return true;
  };
};

const mortgage = new Mortgage('Joan');
const result = mortgage.applyFor('$100,000');
console.log(result);
