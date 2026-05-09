// const instaUser = new Object()
// console.log(instaUser);

const instaUser = {}

instaUser.id = "123abc"
instaUser.name = "pichi"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prachi",
            lastname: "Dubey"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

//{} -> target , source
// const obj3 = Object.assign({}, obj1, obj2, obj4)


//spread operator (mostly used)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


//array of object
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));     //true/false

//-------------------------------------------------------------------------

//Object destructure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


//Ways of accessing values

// console.log(course.courseInstructor);

//const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


                  //JSON (key and value -> string(usually))
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]