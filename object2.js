let user1={
    Name : "Shobi",
    age  : 21,
    sayHi:function(){
        console.log("Hi "+this.Name);
    }
}


// user1.sayHi();

let user2 = user1;

user1=null;

// user2.sayHi();
// console.log(user1);
// console.log("User2 :" + user2.sayHi());
console.log(user1);





