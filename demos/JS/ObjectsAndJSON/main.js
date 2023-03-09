let person1 = {
    firstName: "Dean",
    surname: "Dashwood",
    showAge: function () {
        alert(`${this.firstName} is ${this.age} years old`);
    }
};

person1.age = 42;
person1.showAge();

person1.showFullName = function () {
    alert(`${this.firstName} ${this.surname}`);
    this.showAge();
};

person1.showFullName(person1);
