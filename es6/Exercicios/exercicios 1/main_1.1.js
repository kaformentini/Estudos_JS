
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.admin = false
    }

    isAdmin() {
        return this.admin
    }
 
}

class Admin extends User {
    constructor(email, password){
        super(email, password);

        this.admin = true;
    }
}

const User1 =  new User('kah@email.com', '123456');
const Admin1 = new Admin('kah@email.com', '123456'  );

console.log(User1);

console.log(User1.isAdmin())
console.log(Admin1.isAdmin())

console.log(Admin1);