var adminProperties = {
    name: "Taleh",
    surname: "Haciyev",
    email: "haciyev@mail.ru",
    password: 1234,
};
var Person = /** @class */ (function () {
    function Person(properties) {
        this.name = properties.name;
        this.surname = properties.surname;
        this.email = properties.email;
        this.password = properties.password;
    }
    Person.prototype.getInfo = function () {
        console.log("Name: ".concat(this.name, ", Surname: ").concat(this.surname, " \n Email : ").concat(this.email));
    };
    Person.prototype.changeEmail = function (newEmail) {
        this.email = newEmail;
    };
    return Person;
}());
var person2 = new Person(adminProperties);
person2.getInfo();
