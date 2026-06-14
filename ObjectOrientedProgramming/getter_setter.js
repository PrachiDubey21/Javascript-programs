class User {

    constructor(email, password){
        this.email = email;
        this.password = password
    }

    
        //as constructor is already setting the values
        //normal syntax would call it multiple times
        //will result to maximum call size stack exceeded error
        //race condition

        //name of the getter and setter should be same as variable

        //if we are writing getter/setter we need the other one too
        

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const prachi = new User("prachi@.ai", "abc")
console.log(prachi.email);