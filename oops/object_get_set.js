const User = {
    _email: "n@nk.com", // _ dikhata h private property me define kr rha hun (ab # use hota h)
    _password: "abc",

    get email(){ // get ek property pe work kr rha h 
        return this._email.toUpperCase()
    }, //memory se leke aao 

    set email(value){
        this._email = value
    } 
}

//factory function
const tea = Object.create(User)
console.log(tea.email);