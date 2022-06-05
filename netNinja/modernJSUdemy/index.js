// lesson 36

// Call back functions:
// forEach is like a loop uses callback

// let people = ["mario", "luigi", "ryu", "chun-li", "shaun"];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// https://github.com/iamshaunjp/modern-javascript/tree/lesson-36/chapter_4

// lesson 38
let user = {
    name: "crystal",
    age: 30,
    email: "crystal@netninja.co.uk",
    location: 'berlin',
    blogs: ["why mac and cheese rules", "10 things to make with marmite"],
    // these are methods 
    login() {
        console.log("User logged in");
    },
    // need to use reg functions (these are shortened reg functions) on objects because 
    // if we use arrow functions 'this' will reference the window object rather than the 
    // user object
    logout() {
        console.log("User logged out");
    },
    logBlogs() {
        console.log("This user has written the following blogs: ");
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};
user.logBlogs(this)