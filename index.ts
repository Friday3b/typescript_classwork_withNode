
interface User {
    name: string;
    surname: string;
    email: string;
    password: number;
}


const adminProperties: User = {
    name: "Taleh",
    surname: "Haciyev",
    email: "haciyev@mail.ru",
    password: 1234,
};


class Person {
   public name: string;
   public surname: string;
   protected email: string; 
   private password: number;


    public constructor(properties : User) {
        this.name = properties.name;
        this.surname = properties.surname;
        this.email = properties.email; 
        this.password = properties.password;
    }


    public getInfo() {
        console.log(`Name: ${this.name}, Surname: ${this.surname} \n Email : ${this.email}`);

    }

    public changeEmail(newEmail :string):void{
        this.email = newEmail;
    }


}


const person = new Person(adminProperties);


person.getInfo();




