class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
 
    get email(){ //name same
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}nilam` //new variable _password
    }

    set password(value){
        this._password = value 
    }
}

const nilam = new User("n@gmail.com", "abc")
console.log(nilam.password);
console.log(nilam.email);