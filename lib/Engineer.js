// imports Employee constructor
const Employee = require("./Employee");

// the engineer constructor extends the employee constructor
class Engineer extends Employee {
  constructor (name, id, email, github) {
    super (name,id,email);

    this.github = github;
  }

  getGithub () {
    return this.github;
  }

  // changes employees role to engineer
  getRole () {
    return "Engineer";
  }
}

module.exports = Engineer;