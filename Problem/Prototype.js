var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course Count ${this.courseCount}`);
  };
};

//prototype
User.prototype.getFirstName = function () {
  console.log(`Your Name is:${this.firstName}`);
};

let Mahesh = new User("Mahesh", 5);
Mahesh.getCourseCount();
Mahesh.getFirstName();
