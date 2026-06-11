class User{

    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username : ${this.username}`);
    }

    //not accesible for everyone
    static createId(){
        return `123`;
    }

}

const prachi = new User("prachi");
//console.log(prachi.createId());
prachi.logme();